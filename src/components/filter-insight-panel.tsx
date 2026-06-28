import type { FilterInsight } from "@/lib/filter-insights";

type FilterInsightPanelProps = {
  insight: FilterInsight;
};

export function FilterInsightPanel({ insight }: FilterInsightPanelProps) {
  return (
    <article className="mt-6 overflow-hidden rounded-3xl border border-cyan-300/20 bg-slate-950/80 shadow-2xl shadow-cyan-950/20">
      <div className="border-b border-slate-800 bg-[radial-gradient(circle_at_20%_10%,rgba(103,232,249,0.16),transparent_34%),linear-gradient(135deg,rgba(15,23,42,0.88),rgba(8,47,73,0.22))] p-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="section-kicker">{insight.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">
              {insight.title}
            </h3>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
              {insight.summary}
            </p>
          </div>

          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-amber-100">
            {insight.syntheticLabel}
          </span>
        </div>
      </div>

      <div className="grid gap-6 p-6 xl:grid-cols-[0.8fr_1.2fr]">
        <section>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {insight.metricsTitle}
          </h4>

          <div className="mt-4 grid gap-3">
            {insight.metrics.map((metric) => (
              <div
                className="rounded-2xl border border-slate-800 bg-slate-900 p-4"
                key={`${metric.label}-${metric.value}`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">{metric.label}</p>
                    <p className="mt-1 text-xs text-cyan-200">{metric.note}</p>
                  </div>
                  <p className="text-2xl font-semibold text-white">
                    {metric.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
            {insight.recordsTitle}
          </h4>

          <div className="mt-4 overflow-hidden rounded-2xl border border-slate-800">
            <div className="grid grid-cols-[1.1fr_0.75fr_1fr_0.75fr] bg-slate-900 px-4 py-3 text-xs uppercase tracking-[0.14em] text-slate-500">
              <span>Sample</span>
              <span>Site</span>
              <span>Indicator</span>
              <span>Status</span>
            </div>

            {insight.records.map((record) => (
              <div
                className="grid grid-cols-[1.1fr_0.75fr_1fr_0.75fr] gap-3 border-t border-slate-800 bg-slate-950 px-4 py-4 text-sm text-slate-200"
                key={record.sampleId}
              >
                <div>
                  <p className="font-semibold text-white">{record.sampleId}</p>
                  <p className="mt-1 text-xs text-slate-500">{record.method}</p>
                </div>
                <span>{record.site}</span>
                <div>
                  <p>{record.indicator}</p>
                  <p className="mt-1 text-xs text-cyan-200">{record.value}</p>
                </div>
                <span className="text-cyan-100">{record.status}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      <div className="border-t border-slate-800 bg-slate-900/70 p-6">
        <h4 className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
          {insight.methodTitle}
        </h4>

        <ul className="mt-3 grid gap-2 text-sm leading-6 text-slate-300 lg:grid-cols-3">
          {insight.methodNotes.map((note) => (
            <li
              className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
              key={note}
            >
              {note}
            </li>
          ))}
        </ul>

        <p className="mt-4 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
          {insight.qualityNote}
        </p>
      </div>
    </article>
  );
}
