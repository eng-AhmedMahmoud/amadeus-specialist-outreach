import { ApplicationForm } from "@/components/ApplicationForm";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="relative overflow-hidden border-b border-neutral-900">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/30 via-neutral-950/60 to-neutral-950" />
        <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 text-xs text-cyan-300">
            <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Hiring now — paid contract
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.05]">
            Amadeus-certified developers,
            <br />
            <span className="text-cyan-400">we want to work with you.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-neutral-300">
            We&apos;re integrating the Amadeus Self-Service catalog — Flight
            Offers, Pricing, Create Orders, Hotel Search — into a production
            booking flow. Looking for engineers who have actually shipped
            Amadeus to prod, not just sandbox demos.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-md bg-cyan-500 hover:bg-cyan-400 px-5 py-3 text-sm font-semibold text-neutral-950 transition"
            >
              Apply in 2 minutes →
            </a>
            <a
              href="#scope"
              className="inline-flex items-center justify-center rounded-md border border-neutral-700 hover:border-neutral-500 px-5 py-3 text-sm font-medium text-neutral-200 transition"
            >
              See the scope
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl">
            <Stat k="Rate" v="$60–$120/hr" />
            <Stat k="Engagement" v="6–12 weeks" />
            <Stat k="Mode" v="Remote, async" />
            <Stat k="Start" v="ASAP" />
          </dl>
        </div>
      </section>

      <section id="scope" className="border-b border-neutral-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">The scope</h2>
          <p className="mt-3 text-neutral-400 max-w-2xl">
            Concrete deliverables. No vapor. If these endpoints sound boring
            because you&apos;ve done them ten times — you&apos;re who we want.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 gap-5">
            <ScopeCard
              n="01"
              title="Flight Offers Search v2"
              body="Multi-city, multi-cabin, with a caching layer and clean filtering. Ranked results, normalized errors."
            />
            <ScopeCard
              n="02"
              title="Flight Offers Pricing → Create Orders v1"
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
              body="429-aware retry, OAuth refresh, structured error logging. We want to see your retry policy, not invent ours."
            />
            <ScopeCard
              n="05"
              title="Self-Service → Enterprise migration"
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

      <section className="border-b border-neutral-900">
        <div className="mx-auto max-w-5xl px-6 py-20 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              You probably fit if…
            </h2>
            <ul className="mt-6 space-y-3 text-neutral-300">
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
            <h2 className="text-3xl font-semibold tracking-tight">
              You&apos;re not the fit if…
            </h2>
            <ul className="mt-6 space-y-3 text-neutral-300">
              <Bullet kind="x">
                Sandbox-only experience, or &quot;I worked with a team that did
                Amadeus&quot;
              </Bullet>
              <Bullet kind="x">
                You quote $15/hr for &quot;expert&quot; Amadeus work — won&apos;t end well
              </Bullet>
              <Bullet kind="x">You won&apos;t do a small paid trial task</Bullet>
              <Bullet kind="x">You can&apos;t share any reference clients</Bullet>
            </ul>
          </div>
        </div>
      </section>

      <section className="border-b border-neutral-900">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">
            What happens next
          </h2>
          <ol className="mt-10 grid sm:grid-cols-4 gap-6">
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
              body="4–6 hrs on a real (small) ticket. Paid at your rate, no strings."
            />
            <Step
              n="4"
              title="Contract"
              body="6–12 wk engagement, weekly invoices."
            />
          </ol>
        </div>
      </section>

      <section id="apply" className="border-b border-neutral-900">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Apply</h2>
          <p className="mt-3 text-neutral-400">
            Honesty over polish. Specifics over buzzwords. We screen on
            shipped-to-prod evidence.
          </p>
          <div className="mt-10">
            <ApplicationForm />
          </div>
        </div>
      </section>

      <footer className="py-10 text-center text-xs text-neutral-500">
        Independent hiring page. Not affiliated with Amadeus IT Group.
      </footer>
    </main>
  );
}

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wider text-neutral-500">{k}</dt>
      <dd className="mt-1 text-base font-medium text-neutral-100">{v}</dd>
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
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-6 hover:border-neutral-700 transition">
      <div className="text-xs font-mono text-cyan-400">{n}</div>
      <div className="mt-2 text-lg font-semibold">{title}</div>
      <p className="mt-2 text-sm text-neutral-400 leading-relaxed">{body}</p>
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
            ? "bg-emerald-500/15 text-emerald-400"
            : "bg-red-500/15 text-red-400"
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
    <li className="rounded-xl border border-neutral-800 bg-neutral-900/40 p-5">
      <div className="text-xs font-mono text-cyan-400">Step {n}</div>
      <div className="mt-2 font-semibold">{title}</div>
      <p className="mt-1 text-sm text-neutral-400">{body}</p>
    </li>
  );
}
