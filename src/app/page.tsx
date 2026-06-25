import Image from "next/image";
import { ApplicationForm } from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="flex-1">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
          <a
            href="https://tajera.com"
            className="flex items-center gap-2"
            aria-label="Tajera"
          >
            <Image
              src="/tajera-logo.svg"
              alt="Tajera"
              width={120}
              height={32}
              priority
              className="h-7 w-auto"
            />
          </a>
          <a
            href="#apply"
            className="text-sm font-medium text-[var(--ink-soft)] hover:text-[var(--brand)] transition"
          >
            Apply →
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="blob blob-cool absolute -top-32 -left-24 h-[520px] w-[520px]" />
          <div className="blob blob-warm absolute top-40 -right-20 h-[420px] w-[420px] opacity-40" />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <div className="eyebrow">Tajera × Amadeus</div>
          <h1 className="display mt-6 max-w-[18ch] text-[clamp(2.6rem,7vw,6rem)]">
            We&apos;re hiring <span className="display-italic text-[var(--brand)]">Amadeus-certified</span> developers.
          </h1>
          <div className="mt-10 grid md:grid-cols-12 gap-10 items-end">
            <p className="md:col-span-6 max-w-xl text-[17px] leading-relaxed text-[var(--ink-soft)]">
              Tajera is integrating the Amadeus Self-Service catalog — Flight
              Offers, Pricing, Create Orders, Hotel Search — into a production
              booking flow. Looking for engineers who have actually shipped
              Amadeus to prod, not just sandbox demos.
            </p>
            <div className="md:col-span-6 md:justify-self-end flex flex-wrap items-center gap-3">
              <a href="#apply" className="btn btn-primary">
                Apply in 2 minutes →
              </a>
              <a href="#scope" className="btn btn-ghost">
                See the scope
              </a>
            </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl">
            <Stat k="Rate" v="$60–$120/hr" />
            <Stat k="Engagement" v="6–12 weeks" />
            <Stat k="Mode" v="Remote, async" />
            <Stat k="Start" v="ASAP" />
          </dl>
        </div>
      </section>

      {/* Scope */}
      <section
        id="scope"
        className="relative bg-[var(--bg-soft)] border-y hairline"
      >
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="eyebrow">The scope</div>
          <h2 className="display mt-4 max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)]">
            Concrete deliverables. <span className="display-italic text-[var(--brand)]">No vapor.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--ink-soft)]">
            If these endpoints sound boring because you&apos;ve done them ten
            times — you&apos;re who Tajera wants.
          </p>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <ScopeCard
              n="01"
              title="Flight Offers Search v2"
              body="Multi-city, multi-cabin, with a caching layer and clean filtering. Ranked results, normalized errors."
            />
            <ScopeCard
              n="02"
              title="Pricing → Create Orders v1"
              body="Pricing-confirmation gate before booking. Idempotent Create Orders, PNR persistence, refund-aware error states."
            />
            <ScopeCard
              n="03"
              title="Hotel Search v3 + Booking v2"
              body="Property search, rate plans, booking flow. Currency + room-type edge cases handled."
            />
            <ScopeCard
              n="04"
              title="Reliability layer"
              body="429-aware retry, OAuth refresh, structured error logging. Show us your retry policy, not invent ours."
            />
            <ScopeCard
              n="05"
              title="Self-Service → Enterprise"
              body="Sandbox today, prod cert path in motion. Help us move clean — no rebuilds."
            />
            <ScopeCard
              n="06"
              title="Knowledge transfer"
              body="One short doc on the gotchas — the things that bit you so they don't bite us."
            />
          </div>
        </div>
      </section>

      {/* Fit */}
      <section className="border-b hairline">
        <div className="mx-auto max-w-6xl px-6 py-24 grid md:grid-cols-2 gap-16">
          <div>
            <div className="eyebrow">The fit</div>
            <h2 className="display mt-4 text-[clamp(1.8rem,3.6vw,3rem)]">
              You probably <span className="display-italic text-[var(--brand)]">fit</span> if…
            </h2>
            <ul className="mt-8 space-y-4 text-[var(--ink-soft)]">
              <Bullet>
                You&apos;ve shipped Amadeus Self-Service or Enterprise to
                production — with traffic, not just a sandbox demo
              </Bullet>
              <Bullet>
                You can name the gotcha that bit you last (price changes
                mid-flow? session expiry? NDC vs EDIFACT inventory?)
              </Bullet>
              <Bullet>
                You write tests, push PRs, and don&apos;t need to be chased
              </Bullet>
              <Bullet>
                You&apos;re happy with async + 2–3 hrs/wk overlap, paid hourly
              </Bullet>
            </ul>
          </div>
          <div>
            <div className="eyebrow">Not the fit</div>
            <h2 className="display mt-4 text-[clamp(1.8rem,3.6vw,3rem)]">
              You&apos;re <span className="display-italic text-[var(--brand)]">not</span> the fit if…
            </h2>
            <ul className="mt-8 space-y-4 text-[var(--ink-soft)]">
              <Bullet kind="x">
                Sandbox-only experience, or &quot;I worked with a team that did
                Amadeus&quot;
              </Bullet>
              <Bullet kind="x">
                You quote $15/hr for &quot;expert&quot; Amadeus work
              </Bullet>
              <Bullet kind="x">You won&apos;t do a small paid trial task</Bullet>
              <Bullet kind="x">You can&apos;t share any reference clients</Bullet>
            </ul>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[var(--bg-soft)] border-b hairline">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="eyebrow">What happens next</div>
          <h2 className="display mt-4 max-w-2xl text-[clamp(2rem,4.4vw,3.6rem)]">
            Four steps. <span className="display-italic text-[var(--brand)]">No theatre.</span>
          </h2>
          <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <Step
              n="1"
              title="Apply"
              body="Form below. ~2 min. Real humans read it."
            />
            <Step
              n="2"
              title="20-min call"
              body="Tech depth. Scope walk-through. Mutual fit."
            />
            <Step
              n="3"
              title="Paid trial"
              body="4–6 hrs on a real (small) ticket. Paid at your rate."
            />
            <Step
              n="4"
              title="Contract"
              body="6–12 wk engagement, weekly invoices."
            />
          </ol>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="border-b hairline">
        <div className="mx-auto max-w-3xl px-6 py-24">
          <div className="eyebrow">Apply</div>
          <h2 className="display mt-4 text-[clamp(2rem,4.4vw,3.6rem)]">
            Tell us what you&apos;ve <span className="display-italic text-[var(--brand)]">shipped</span>.
          </h2>
          <p className="mt-4 text-[var(--ink-soft)]">
            Honesty over polish. Specifics over buzzwords. Tajera screens on
            shipped-to-prod evidence.
          </p>
          <div className="mt-12">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <footer className="py-12">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--mute)]">
          <div className="flex items-center gap-3">
            <Image
              src="/tajera-logo.svg"
              alt="Tajera"
              width={80}
              height={20}
              className="h-5 w-auto opacity-60"
            />
            <span>© Tajera</span>
          </div>
          <span>Independent hiring page. Not affiliated with Amadeus IT Group.</span>
        </div>
      </footer>
    </main>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="eyebrow">{k}</dt>
      <dd className="mt-2 display text-2xl">{v}</dd>
    </div>
  );
}

function ScopeCard({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <div className="surface-card p-7 hover:-translate-y-0.5 transition">
      <div className="text-xs font-mono text-[var(--brand)]">{n}</div>
      <div className="display mt-3 text-xl">{title}</div>
      <p className="mt-3 text-sm text-[var(--ink-soft)] leading-relaxed">{body}</p>
    </div>
  );
}

function Bullet({
  children,
  kind = "check",
}: {
  children: React.ReactNode;
  kind?: "check" | "x";
}) {
  return (
    <li className="flex items-start gap-3">
      <span
        className={`mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full text-xs font-bold ${
          kind === "check"
            ? "bg-[var(--brand-soft)] text-[var(--brand)]"
            : "bg-red-100 text-red-600"
        }`}
      >
        {kind === "check" ? "✓" : "×"}
      </span>
      <span>{children}</span>
    </li>
  );
}

function Step({
  n,
  title,
  body,
}: {
  n: string;
  title: string;
  body: string;
}) {
  return (
    <li className="surface-card p-6">
      <div className="text-xs font-mono text-[var(--brand)]">Step {n}</div>
      <div className="display mt-2 text-lg">{title}</div>
      <p className="mt-2 text-sm text-[var(--ink-soft)]">{body}</p>
    </li>
  );
}
