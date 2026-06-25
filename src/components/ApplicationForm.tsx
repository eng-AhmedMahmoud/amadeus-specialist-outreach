"use client";

import { useActionState } from "react";
import { submitApplication, type ApplyState } from "@/app/actions";

const initial: ApplyState = { ok: false };

function FieldError({ msgs }: { msgs?: string[] }) {
  if (!msgs?.length) return null;
  return <p className="mt-1 text-xs text-red-600">{msgs[0]}</p>;
}

export function ApplicationForm() {
  const [state, formAction, pending] = useActionState(
    submitApplication,
    initial,
  );

  if (state.ok) {
    return (
      <div className="surface-card p-10 text-center">
        <div className="display text-3xl mb-3">Application received</div>
        <p className="text-[var(--ink-soft)]">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
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
          <label htmlFor="fullName" className="field-label">
            Full name
          </label>
          <input
            id="fullName"
            name="fullName"
            required
            className="field"
            placeholder="Jane Doe"
          />
          <FieldError msgs={state.errors?.fullName} />
        </div>
        <div>
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="field"
            placeholder="jane@example.com"
          />
          <FieldError msgs={state.errors?.email} />
        </div>
      </div>

      <div>
        <label htmlFor="linkedin" className="field-label">
          LinkedIn URL
        </label>
        <input
          id="linkedin"
          name="linkedin"
          type="url"
          required
          className="field"
          placeholder="https://linkedin.com/in/janedoe"
        />
        <FieldError msgs={state.errors?.linkedin} />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="certLevel" className="field-label">
            Amadeus certification
          </label>
          <select
            id="certLevel"
            name="certLevel"
            required
            defaultValue="self-service"
            className="field"
          >
            <option value="self-service">Self-Service</option>
            <option value="enterprise">Enterprise / 1A</option>
            <option value="both">Both</option>
            <option value="other">Other / in progress</option>
          </select>
          <FieldError msgs={state.errors?.certLevel} />
        </div>
        <div>
          <label htmlFor="yearsAmadeus" className="field-label">
            Years working with Amadeus
          </label>
          <input
            id="yearsAmadeus"
            name="yearsAmadeus"
            type="number"
            min={0}
            max={40}
            required
            className="field"
            placeholder="5"
          />
          <FieldError msgs={state.errors?.yearsAmadeus} />
        </div>
      </div>

      <div>
        <label htmlFor="endpoints" className="field-label">
          Amadeus endpoints you have shipped to production
        </label>
        <textarea
          id="endpoints"
          name="endpoints"
          rows={3}
          required
          className="field"
          placeholder="e.g. Flight Offers Search v2, Flight Offers Pricing, Flight Create Orders v1, Hotel Search v3..."
        />
        <FieldError msgs={state.errors?.endpoints} />
      </div>

      <div>
        <label htmlFor="liveProof" className="field-label">
          Live proof — a URL, repo, or 1 sentence about a prod integration
        </label>
        <textarea
          id="liveProof"
          name="liveProof"
          rows={2}
          required
          className="field"
          placeholder="e.g. https://travel-co.example — built flight booking flow Mar 2025, ~3k bookings/mo"
        />
        <FieldError msgs={state.errors?.liveProof} />
      </div>

      <div className="grid sm:grid-cols-3 gap-4">
        <div>
          <label htmlFor="rate" className="field-label">
            Hourly rate (USD)
          </label>
          <input
            id="rate"
            name="rate"
            type="number"
            min={10}
            max={500}
            required
            className="field"
            placeholder="85"
          />
          <FieldError msgs={state.errors?.rate} />
        </div>
        <div>
          <label htmlFor="availability" className="field-label">
            Hours/week available
          </label>
          <input
            id="availability"
            name="availability"
            required
            className="field"
            placeholder="15–25 hrs/wk from July 1"
          />
          <FieldError msgs={state.errors?.availability} />
        </div>
        <div>
          <label htmlFor="timezone" className="field-label">
            Timezone
          </label>
          <input
            id="timezone"
            name="timezone"
            required
            className="field"
            placeholder="CET / UTC+1"
          />
          <FieldError msgs={state.errors?.timezone} />
        </div>
      </div>

      <div>
        <label htmlFor="notes" className="field-label">
          Anything else (optional)
        </label>
        <textarea
          id="notes"
          name="notes"
          rows={3}
          className="field"
          placeholder="NDC experience, ex-Amadeus, multi-GDS, anything we should know"
        />
        <FieldError msgs={state.errors?.notes} />
      </div>

      {state.message && !state.ok && (
        <p className="text-sm text-red-600">{state.message}</p>
      )}

      <button type="submit" disabled={pending} className="btn btn-primary">
        {pending ? "Submitting…" : "Submit application →"}
      </button>

      <p className="text-xs text-[var(--mute)]">
        Tajera reads every application. Replies within 5 business days for fits.
      </p>
    </form>
  );
}
