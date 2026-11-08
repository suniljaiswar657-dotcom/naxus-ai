const capabilities = [
  {
    number: "01",
    title: "Business Intelligence",
    description: "Turn business signals and operating data into clear, evidence-based decisions.",
    status: "Planned",
  },
  {
    number: "02",
    title: "Intelligent Agents",
    description: "Coordinate focused AI agents through one controlled orchestration layer.",
    status: "Planned",
  },
  {
    number: "03",
    title: "Workflow Automation",
    description: "Connect repeatable workflows with permissions, approvals, and audit trails.",
    status: "Planned",
  },
  {
    number: "04",
    title: "Revenue Operations",
    description: "Support customer operations and revenue workflows without promising outcomes.",
    status: "Planned",
  },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-8 sm:px-10">
      <header className="flex items-center justify-between border-b border-white/10 pb-6">
        <a href="/" className="text-lg font-semibold tracking-[0.24em]">NAXUS<span className="text-teal-200"> AI</span></a>
        <span className="rounded-full border border-teal-200/25 px-3 py-1 text-xs text-teal-100">FOUNDATION BUILD</span>
      </header>

      <section className="grid flex-1 items-center gap-12 py-20 md:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-teal-200">INTELLIGENCE. ORCHESTRATION. CONTROL.</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Business operations, built for the <span className="text-teal-200">AI era.</span>
          </h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400">
            NAXUS AI is being built as a modular platform for business intelligence,
            intelligent agents, and workflow automation — with people in control
            of consequential actions.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#capabilities" className="rounded-lg bg-teal-200 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-100">
              Explore platform
            </a>
            <a href="https://github.com/suniljaiswar657-dotcom/naxus-ai" target="_blank" rel="noreferrer" className="rounded-lg border border-white/15 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/5">
              View repository
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-2xl shadow-black/20">
          <div className="mb-6 flex items-center justify-between">
            <span className="text-sm font-medium text-slate-200">System overview</span>
            <span className="flex items-center gap-2 text-xs text-teal-200"><span className="h-2 w-2 rounded-full bg-teal-300" /> Foundation</span>
          </div>
          <div className="rounded-xl border border-teal-200/20 bg-teal-200/[0.06] p-5 text-center">
            <p className="text-xs tracking-[0.2em] text-teal-100">NAXUS ORCHESTRATOR</p>
            <p className="mt-2 text-sm text-slate-300">Central coordination layer</p>
          </div>
          <div className="my-3 text-center text-slate-600">↓</div>
          <div className="grid grid-cols-2 gap-3">
            {["Research Agent", "BI Agent", "Operations Agent", "Revenue Agent"].map((agent) => (
              <div key={agent} className="rounded-xl border border-white/10 bg-slate-900/70 p-4 text-center">
                <p className="text-sm text-slate-200">{agent}</p>
                <p className="mt-1 text-[11px] text-slate-500">Planned module</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3 text-center text-xs text-slate-400">
            Approval gate · Audit log · Tool gateway
          </div>
        </div>
      </section>

      <section id="capabilities" className="border-t border-white/10 py-12">
        <div className="mb-7">
          <p className="text-xs font-semibold tracking-[0.25em] text-teal-200">PLATFORM MODULES</p>
          <h2 className="mt-3 text-2xl font-semibold">Designed as one governed system</h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {capabilities.map((item) => (
            <article key={item.number} className="rounded-xl border border-white/10 bg-white/[0.025] p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-teal-200">{item.number}</span>
                <span className="text-[11px] text-slate-500">{item.status}</span>
              </div>
              <h3 className="mt-4 text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
        <span>© 2026 NAXUS AI. Independent project.</span>
        <span>Human approval stays in control.</span>
      </footer>
    </main>
  );
}
