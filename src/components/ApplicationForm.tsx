"use client";

import { useActionState } from "react";
import { submitApplication, type ApplyState } from "@/app/actions";

const initial: ApplyState = { ok: false };

function FieldError({ msgs }: { msgs?: string[] }) {
  if (!msgs?.length) return null;
  return <p className="mt-1 text-xs text-red-400">{msgs[0]}</p>;
}

const inputCls =
  "w-full rounded-md bg-neutral-900 border border-neutral-800 px-3 py-2 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/60 focus:border-cyan-500/60 transition";
const labelCls = "block text-xs font-medium text-neutral-300 mb-1.5";

export function ApplicationForm() {
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initial,
  );

  if (state.ok) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center">
        <div className="text-2xl mb-2">Application received</div>
        <p className="text-neutral-300">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {/* Honeypot — hidden field, real users leave blank */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className={labelCls}>
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            className={inputCls}
            placeholder="Jane Doe"
          />
          <FieldError msgs={state.errors?.fullName} />
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputCls}
            placeholder="jane@example.com"
          />
          <FieldError msgs={state.errors?.email} />
        </div>
      </div>

      <div>
        <label htmlFor="linkedin" className={labelCls}>
          LinkedIn URL
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          required
          className={inputCls}
          placeholder="https://linkedin.com/in/janedoe"
        />
        <FieldError msgs={state.errors?.linkedin} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="certLevel" className={labelCls}>
            Amadeus certification
          </label>
          <select
            id="certLevel"
            name="certLevel"
            required
            defaultValue="self-service"
            className={inputCls}
          >
            <option value="self-service">Self-Service</option>
            <option value="enterprise">Enterprise / 1A</option>
            <option value="both">Both</option>
            <option value="other">Other / in progress</option>
          </select>
          <FieldError msgs={state.errors?.certLevel} />
        </div>
        <div>
          <label htmlFor="yearsAmadeus" className={labelCls}>
            Years working with Amadeus
          </label>
          <input
            id="yearsAmadeus"
            name="yearsAmadeus"
            type="number"
            min={0}
            max={40}
            required
            className={inputCls}
            placeholder="5"
          />
          <FieldError msgs={state.errors?.yearsAmadeus} />
        </div>
      </div>

      <div>
        <label htmlFor="endpoints" className={labelCls}>
          Amadeus endpoints you have shipped to production
        </label>
        <textarea
          id="endpoints"
          name="endpoints"
          rows={3}
          required
          className={inputCls}
          placeholder="e.g. Flight Offers Search v2, Flight Offers Pricing, Flight Create Orders v1, Hotel Search v3..."
        />
        <FieldError msgs={state.errors?.endpoints} />
      </div>

      <div>
        <label htmlFor="liveProof" className={labelCls}>
          Live proof — a URL, repo, or 1 sentence about a prod integration
        </label>
        <textarea
          id="liveProof"
          name="liveProof"
          rows={2}
          required
          className={inputCls}
          placeholder="e.g. https://travel-co.example — built flight booking flow Mar 2025, ~3k bookings/mo"
        />
        <FieldError msgs={state.errors?.liveProof} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="rate" className={labelCls}>
            Hourly rate (USD)
          </label>
          <input
            id="rate"
            name="rate"
            type="number"
            min={10}
            max={500}
            required
            className={inputCls}
            placeholder="85"
          />
          <FieldError msgs={state.errors?.rate} />
        </div>
        <div>
          <label htmlFor="availability" className={labelCls}>
            Hours/week available
          </label>
          <input
            id="availability"
            name="availability"
            required
            className={inputCls}
            placeholder="15–25 hrs/wk from July 1"
          />
          <FieldError msgs={state.errors?.availability} />
        </div>
        <div>
          <label htmlFor="timezone" className={labelCls}>
            Timezone
          </label>
          <input
            id="timezone"
            name="timezone"
            required
            className={inputCls}
            placeholder="CET / UTC+1"
          />
          <FieldError msgs={state.errors?.timezone} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className={labelCls}>
          Anything else (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className={inputCls}
          placeholder="NDC experience, ex-Amadeus, multi-GDS, anything we should know"
        />
        <FieldError msgs={state.errors?.notes} />
      </div>

      {state.message && !state.ok && (
        <p className="text-sm text-red-400">{state.message}</p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 text-sm font-semibold text-neutral-950 transition"
      >
        {pending ? "Submitting…" : "Submit application"}
      </button>

      <p className="text-xs text-neutral-500">
        We read every application. Replies within 5 business days for fits.
      </p>
    </form>
  );
}
