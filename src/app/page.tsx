"use client";

import { useState } from "react";

import { Filter3DCard } from "@/components/filter-3d-card";
import {
  demoSummary,
  evidenceAssets,
  latestEvidenceAssets,
  latestMonitoringEvent,
  monitoringEvents,
  primaryInstallation,
  primaryReport,
  reports,
} from "@/lib/demo-data";
import {
  filterMonitoringEvents,
  getMonitoringFilterCount,
  scientificFilterOrder,
  type ScientificFilterKey,
} from "@/lib/scientific-filters";
import {
  languageOrder,
  scientificFilterCopy,
  uiCopy,
  type LanguageCode,
} from "@/lib/ui-copy";

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const [activeFilter, setActiveFilter] =
    useState<ScientificFilterKey>("all");
  const copy = uiCopy[language];
  const filterCopy = scientificFilterCopy[language];

  const filteredMonitoringEvents = filterMonitoringEvents(
    monitoringEvents,
    evidenceAssets,
    reports,
    activeFilter,
  );

  const selectedMonitoringEvent =
    filteredMonitoringEvents[0] ?? latestMonitoringEvent;

  const selectedEvidenceAssets = evidenceAssets.filter(
    (asset) =>
      asset.monitoringEventId === selectedMonitoringEvent.monitoringEventId,
  );

  const activeFilterCount = filteredMonitoringEvents.length;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8">
        <header className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-cyan-200">
              <span className="rounded-full border border-cyan-300/30 px-3 py-1">{copy.badges.nda}</span>
              <span className="rounded-full border border-cyan-300/30 px-3 py-1">{copy.badges.synthetic}</span>
              <span className="rounded-full border border-cyan-300/30 px-3 py-1">{copy.badges.documentation}</span>
            </div>

            <div className="flex gap-2">
              {languageOrder.map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLanguage(code)}
                  className={
                    code === language
                      ? "rounded-full border border-cyan-300 bg-cyan-300 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-950"
                      : "rounded-full border border-slate-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-slate-300 hover:border-cyan-300 hover:text-cyan-200"
                  }
                  aria-pressed={code === language}
                >
                  {code}
                </button>
              ))}
            </div>
          </div>

          <p className="mb-3 text-sm font-semibold text-cyan-200">{copy.languageName}</p>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            {copy.title}
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            {copy.subtitle}
          </p>

          <p className="mt-6 max-w-5xl rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
            {copy.ndaNotice}
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <MetricCard label={copy.metrics.installations} value={demoSummary.installationsCount} detail={copy.metrics.installationsDetail} />
          <MetricCard label={copy.metrics.monitoringEvents} value={demoSummary.monitoringEventsCount} detail={copy.metrics.monitoringEventsDetail} />
          <MetricCard label={copy.metrics.evidenceAssets} value={demoSummary.evidenceAssetsCount} detail={copy.metrics.evidenceAssetsDetail} />
          <MetricCard label={copy.metrics.reports} value={demoSummary.exportableReportsCount} detail={copy.metrics.reportsDetail} />
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="section-kicker">{filterCopy.title}</p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                {filterCopy.active}: {filterCopy.labels[activeFilter]}
              </h2>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-400">
                {filterCopy.subtitle}
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
              {activeFilterCount} {filterCopy.recordsShown}
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {scientificFilterOrder.map((filter) => (
              <Filter3DCard
                active={filter === activeFilter}
                count={getMonitoringFilterCount(
                  monitoringEvents,
                  evidenceAssets,
                  reports,
                  filter,
                )}
                countLabel={filterCopy.recordsShown}
                filter={filter}
                key={filter}
                label={filterCopy.labels[filter]}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>

          <p className="mt-5 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4 text-sm leading-6 text-emerald-100">
            {filterCopy.preservedContext}
          </p>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">{copy.selectedInstallation}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{primaryInstallation.installationId}</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoRow label={copy.labels.location} value={primaryInstallation.locationName} />
              <InfoRow label={copy.labels.coordinates} value={primaryInstallation.coordinates} />
              <InfoRow label={copy.labels.structure} value={primaryInstallation.structureType} />
              <InfoRow label={copy.labels.deployment} value={primaryInstallation.deploymentDate} />
              <InfoRow label={copy.labels.baseline} value={primaryInstallation.baselineReference} />
              <InfoRow label={copy.labels.controlSite} value={primaryInstallation.controlSite} />
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
              {copy.scientistQuestion}
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">{copy.latestMonitoringEvent}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{selectedMonitoringEvent.monitoringEventId}</h2>

            <div className="mt-6 space-y-4">
              <InfoRow label={copy.labels.monitoringDate} value={selectedMonitoringEvent.monitoringDate} />
              <InfoRow label={copy.labels.method} value={selectedMonitoringEvent.method} />
              <InfoRow label={copy.labels.dataSource} value={selectedMonitoringEvent.dataSource} />
              <InfoRow label={copy.labels.reviewStatus} value={copy.statusLabels[selectedMonitoringEvent.reviewStatus]} />
              <InfoRow label={copy.labels.confidence} value={selectedMonitoringEvent.confidenceLevel} />
            </div>

            <div className="mt-6 rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-rose-100">
              {copy.uncertaintyPrefix}: {selectedMonitoringEvent.uncertaintyNotes}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">{copy.biodiversity}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{copy.observedSpeciesAndIndex}</h3>

            <p className="mt-5 text-5xl font-semibold text-cyan-200">{selectedMonitoringEvent.speciesRichness}</p>
            <p className="mt-2 text-sm text-slate-400">{copy.syntheticObservedTaxa}</p>

            <div className="mt-5 rounded-2xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">{selectedMonitoringEvent.biodiversityIndex.type}</p>
              <p className="mt-1 text-3xl font-semibold text-white">{selectedMonitoringEvent.biodiversityIndex.value}</p>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {selectedMonitoringEvent.speciesObserved.map((species) => (
                <li key={species}>• {species}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">{copy.sensorContext}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{copy.environmentalReadings}</h3>

            <div className="mt-5 grid gap-3">
              <InfoRow label={copy.labels.temperature} value={`${selectedMonitoringEvent.sensorReading.temperatureCelsius} ºC`} />
              <InfoRow label={copy.labels.dissolvedOxygen} value={`${selectedMonitoringEvent.sensorReading.dissolvedOxygenMgL} mg/L`} />
              <InfoRow label={copy.labels.ph} value={`${selectedMonitoringEvent.sensorReading.ph}`} />
              <InfoRow label={copy.labels.chlorophyll} value={`${selectedMonitoringEvent.sensorReading.chlorophyllUgL} µg/L`} />
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">{copy.export}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{copy.traceableReportDraft}</h3>

            <div className="mt-5 space-y-4">
              <InfoRow label={copy.labels.reportId} value={primaryReport.reportId} />
              <InfoRow label={copy.labels.status} value={primaryReport.reportStatus} />
              <InfoRow label={copy.labels.version} value={primaryReport.exportVersion} />
              <InfoRow label={copy.labels.generated} value={primaryReport.generatedAt} />
            </div>

            <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
              {primaryReport.disclaimer}
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="section-kicker">{copy.evidenceChain}</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">{copy.evidenceLinked}</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {(selectedEvidenceAssets.length > 0 ? selectedEvidenceAssets : latestEvidenceAssets).map((asset) => (
              <article className="rounded-2xl border border-slate-800 bg-slate-950 p-5" key={asset.evidenceAssetId}>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{asset.type}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{asset.label}</h3>

                <div className="mt-4 space-y-3">
                  <InfoRow label={copy.labels.captureDate} value={asset.captureDate} />
                  <InfoRow label={copy.labels.method} value={asset.captureMethod} />
                  <InfoRow label={copy.labels.rawReference} value={asset.rawDataReference} />
                  <InfoRow label={copy.labels.hash} value={asset.evidenceHash} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-sm leading-6 text-slate-400">
          {copy.footer}
        </footer>
      </section>
    </main>
  );
}

function MetricCard({
  label,
  value,
  detail,
}: {
  label: string;
  value: number;
  detail: string;
}) {
  return (
    <article className="rounded-3xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-3 text-4xl font-semibold text-white">{value}</p>
      <p className="mt-2 text-sm text-cyan-200">{detail}</p>
    </article>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
      <p className="text-xs uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-sm font-medium text-slate-100">{value}</p>
    </div>
  );
}
