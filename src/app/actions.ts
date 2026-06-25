"use server";

import { z } from "zod";
import { Resend } from "resend";

const schema = z.object({
  fullName: z.string().min(2, "Name is required").max(120),
  email: z.string().email("Valid email required"),
  linkedin: z
    .string()
    .url("Must be a full URL")
    .refine((u) => u.includes("linkedin.com"), "LinkedIn URL"),
  certLevel: z.enum(["self-service", "enterprise", "both", "other"]),
  yearsAmadeus: z.coerce.number().int().min(0).max(40),
  endpoints: z.string().min(10, "List at least one shipped endpoint").max(2000),
  liveProof: z.string().min(5, "Provide a link or short reference").max(500),
  rate: z.coerce.number().int().min(10).max(500),
  availability: z.string().min(2).max(200),
  timezone: z.string().min(2).max(80),
  notes: z.string().max(2000).optional().default(""),
  // honeypot
  website: z.string().max(0).optional().default(""),
});

export type ApplyState = {
  ok: boolean;
  message?: string;
  errors?: Record<string, string[] | undefined>;
};

export async function submitApplication(
  _prev: ApplyState,
  formData: FormData,
): Promise<ApplyState> {
  const raw = Object.fromEntries(formData);
  const parsed = schema.safeParse(raw);

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please fix the highlighted fields.",
      errors: z.flattenError(parsed.error).fieldErrors,
    };
  }

  // Honeypot — silent success to bots
  if (parsed.data.website) {
    return { ok: true, message: "Thanks — we'll be in touch." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const inboxTo = process.env.APPLY_INBOX_TO;
  const inboxFrom = process.env.APPLY_INBOX_FROM;

  const summary = renderEmail(parsed.data);

  if (apiKey && inboxTo && inboxFrom) {
    const resend = new Resend(apiKey);
    try {
      await resend.emails.send({
        from: inboxFrom,
        to: inboxTo,
        replyTo: parsed.data.email,
        subject: `Amadeus application — ${parsed.data.fullName} (${parsed.data.certLevel}, ${parsed.data.yearsAmadeus}y, $${parsed.data.rate}/hr)`,
        text: summary,
      });
    } catch (err) {
      console.error("[apply] resend send failed:", err);
      return {
        ok: false,
        message:
          "Submission received locally but email delivery failed. We'll reach out at " +
          parsed.data.email,
      };
    }
  } else {
    console.log("[apply] new application (no Resend configured):\n" + summary);
  }

  return {
    ok: true,
    message:
      "Thanks. Application received — we reply to every fit within 5 business days.",
  };
}

function renderEmail(d: z.infer<typeof schema>) {
  return [
    `Name: ${d.fullName}`,
    `Email: ${d.email}`,
    `LinkedIn: ${d.linkedin}`,
    `Cert: ${d.certLevel}`,
    `Years on Amadeus: ${d.yearsAmadeus}`,
    `Rate: $${d.rate}/hr`,
    `Availability: ${d.availability}`,
    `Timezone: ${d.timezone}`,
    "",
    "--- Shipped endpoints ---",
    d.endpoints,
    "",
    "--- Live proof ---",
    d.liveProof,
    "",
    "--- Notes ---",
    d.notes || "(none)",
  ].join("\n");
}
