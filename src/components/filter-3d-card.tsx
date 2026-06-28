import { filterMiniChartBars } from "@/lib/filter-visuals";
import type { ScientificFilterKey } from "@/lib/scientific-filters";

type Filter3DCardProps = {
  active: boolean;
  count: number;
  countLabel: string;
  filter: ScientificFilterKey;
  label: string;
  onClick: () => void;
};

export function Filter3DCard({
  active,
  count,
  countLabel,
  filter,
  label,
  onClick,
}: Filter3DCardProps) {
  const bars = filterMiniChartBars[filter];

  return (
    <button
      {...(active
        ? { "aria-pressed": "true" as const }
        : { "aria-pressed": "false" as const })}
      className={
        active
          ? "group relative min-h-44 overflow-hidden rounded-3xl border border-cyan-300 bg-cyan-300/15 p-5 text-left shadow-2xl shadow-cyan-950/40 transition duration-300 hover:-translate-y-1"
          : "group relative min-h-44 overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 p-5 text-left transition duration-300 hover:-translate-y-1 hover:border-cyan-300/70 hover:shadow-2xl hover:shadow-cyan-950/30"
      }
      onClick={onClick}
      type="button"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(103,232,249,0.18),transparent_35%),linear-gradient(135deg,rgba(15,23,42,0),rgba(8,47,73,0.18))]" />

      <div className="relative z-10 flex items-start justify-between gap-4">
        <div>
          <p
            className={
              active
                ? "text-sm font-semibold text-cyan-100"
                : "text-sm font-semibold text-slate-200"
            }
          >
            {label}
          </p>
          <p
            className={
              active
                ? "mt-2 text-xs uppercase tracking-[0.18em] text-cyan-100/80"
                : "mt-2 text-xs uppercase tracking-[0.18em] text-slate-500"
            }
          >
            {count} {countLabel}
          </p>
        </div>

        <span
          className={
            active
              ? "rounded-full border border-cyan-200/50 bg-cyan-200/20 px-2.5 py-1 text-xs font-bold text-cyan-50"
              : "rounded-full border border-slate-700 px-2.5 py-1 text-xs font-bold text-slate-500"
          }
        >
          {count}
        </span>
      </div>

      <svg
        aria-hidden="true"
        className={
          active
            ? "relative z-10 mt-6 h-20 w-full text-cyan-200 drop-shadow-[0_0_18px_rgba(103,232,249,0.35)]"
            : "relative z-10 mt-6 h-20 w-full text-cyan-300/70 transition duration-300 group-hover:text-cyan-200 group-hover:drop-shadow-[0_0_16px_rgba(103,232,249,0.25)]"
        }
        role="img"
        viewBox="0 0 220 96"
      >
        <polygon
          fill="currentColor"
          opacity={active ? "0.14" : "0.08"}
          points="16,84 182,84 206,66 40,66"
        />

        {bars.map((height, index) => {
          const width = 24;
          const depth = 10;
          const base = 76;
          const x = 24 + index * 44;
          const y = base - height;

          return (
            <g key={`${filter}-${index}`}>
              <rect
                fill="currentColor"
                height={height}
                opacity={active ? "0.92" : "0.48"}
                rx="3"
                width={width}
                x={x}
                y={y}
              />
              <polygon
                fill="currentColor"
                opacity={active ? "0.5" : "0.24"}
                points={`${x + width},${y} ${x + width + depth},${y - depth} ${x + width + depth},${base - depth} ${x + width},${base}`}
              />
              <polygon
                fill="white"
                opacity={active ? "0.36" : "0.16"}
                points={`${x},${y} ${x + depth},${y - depth} ${x + width + depth},${y - depth} ${x + width},${y}`}
              />
            </g>
          );
        })}

        <path
          d="M18 84H184L208 66"
          fill="none"
          opacity={active ? "0.55" : "0.22"}
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
    </button>
  );
}
