import {
  demoSummary,
  latestEvidenceAssets,
  latestMonitoringEvent,
  primaryInstallation,
  primaryReport,
} from "@/lib/demo-data";

const statusLabels = {
  reviewed: "Reviewed",
  partial_review: "Partial review",
  pending_review: "Pending review",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-8">
        <header className="rounded-3xl border border-cyan-400/20 bg-slate-900/80 p-8 shadow-2xl shadow-cyan-950/30">
          <div className="mb-4 flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-cyan-200">
            <span className="rounded-full border border-cyan-300/30 px-3 py-1">NDA-safe mockup</span>
            <span className="rounded-full border border-cyan-300/30 px-3 py-1">Synthetic data only</span>
            <span className="rounded-full border border-cyan-300/30 px-3 py-1">EN / CA / ES documentation</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Ocean Scientific Evidence Console
          </h1>

          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            Scientific-operational mockup for querying marine installation data, monitoring evidence, biodiversity measurements, method visibility, uncertainty, review status and exportable traceable reports.
          </p>

          <p className="mt-6 max-w-5xl rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
            Developed under confidentiality framework <strong>OE-CLARITY-20260624-NDA-001</strong>. This mockup does not contain real, private, internal or confidential Ocean Ecostructures data.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-4">
          <MetricCard label="Demo installations" value={demoSummary.installationsCount} detail="Synthetic records" />
          <MetricCard label="Monitoring events" value={demoSummary.monitoringEventsCount} detail="Linked to method and evidence" />
          <MetricCard label="Evidence assets" value={demoSummary.evidenceAssetsCount} detail="Raw references and demo hashes" />
          <MetricCard label="Exportable reports" value={demoSummary.exportableReportsCount} detail="Draft traceable exports" />
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">Selected installation</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{primaryInstallation.installationId}</h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoRow label="Location" value={primaryInstallation.locationName} />
              <InfoRow label="Coordinates" value={primaryInstallation.coordinates} />
              <InfoRow label="Structure" value={primaryInstallation.structureType} />
              <InfoRow label="Deployment" value={primaryInstallation.deploymentDate} />
              <InfoRow label="Baseline" value={primaryInstallation.baselineReference} />
              <InfoRow label="Control site" value={primaryInstallation.controlSite} />
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-4 text-sm leading-6 text-cyan-100">
              Scientist question: where is this installation, when was it deployed, what is the baseline and what control reference is used?
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">Latest monitoring event</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{latestMonitoringEvent.monitoringEventId}</h2>

            <div className="mt-6 space-y-4">
              <InfoRow label="Monitoring date" value={latestMonitoringEvent.monitoringDate} />
              <InfoRow label="Method" value={latestMonitoringEvent.method} />
              <InfoRow label="Data source" value={latestMonitoringEvent.dataSource} />
              <InfoRow label="Review status" value={statusLabels[latestMonitoringEvent.reviewStatus]} />
              <InfoRow label="Confidence" value={latestMonitoringEvent.confidenceLevel} />
            </div>

            <div className="mt-6 rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-rose-100">
              Uncertainty: {latestMonitoringEvent.uncertaintyNotes}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">Biodiversity</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Observed species and index</h3>

            <p className="mt-5 text-5xl font-semibold text-cyan-200">{latestMonitoringEvent.speciesRichness}</p>
            <p className="mt-2 text-sm text-slate-400">Synthetic observed taxa</p>

            <div className="mt-5 rounded-2xl bg-slate-950 p-4">
              <p className="text-sm text-slate-400">{latestMonitoringEvent.biodiversityIndex.type}</p>
              <p className="mt-1 text-3xl font-semibold text-white">{latestMonitoringEvent.biodiversityIndex.value}</p>
            </div>

            <ul className="mt-5 space-y-2 text-sm text-slate-300">
              {latestMonitoringEvent.speciesObserved.map((species) => (
                <li key={species}>• {species}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">Sensor context</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Environmental readings</h3>

            <div className="mt-5 grid gap-3">
              <InfoRow label="Temperature" value={`${latestMonitoringEvent.sensorReading.temperatureCelsius} ºC`} />
              <InfoRow label="Dissolved oxygen" value={`${latestMonitoringEvent.sensorReading.dissolvedOxygenMgL} mg/L`} />
              <InfoRow label="pH" value={`${latestMonitoringEvent.sensorReading.ph}`} />
              <InfoRow label="Chlorophyll-a" value={`${latestMonitoringEvent.sensorReading.chlorophyllUgL} µg/L`} />
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">Export</p>
            <h3 className="mt-2 text-xl font-semibold text-white">Traceable report draft</h3>

            <div className="mt-5 space-y-4">
              <InfoRow label="Report ID" value={primaryReport.reportId} />
              <InfoRow label="Status" value={primaryReport.reportStatus} />
              <InfoRow label="Version" value={primaryReport.exportVersion} />
              <InfoRow label="Generated" value={primaryReport.generatedAt} />
            </div>

            <p className="mt-5 rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
              {primaryReport.disclaimer}
            </p>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
          <p className="section-kicker">Evidence chain</p>
          <h2 className="mt-2 text-2xl font-semibold text-white">Evidence linked to the latest monitoring event</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {latestEvidenceAssets.map((asset) => (
              <article className="rounded-2xl border border-slate-800 bg-slate-950 p-5" key={asset.evidenceAssetId}>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{asset.type}</p>
                <h3 className="mt-2 text-lg font-semibold text-white">{asset.label}</h3>

                <div className="mt-4 space-y-3">
                  <InfoRow label="Capture date" value={asset.captureDate} />
                  <InfoRow label="Method" value={asset.captureMethod} />
                  <InfoRow label="Raw reference" value={asset.rawDataReference} />
                  <InfoRow label="Hash" value={asset.evidenceHash} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <footer className="rounded-3xl border border-slate-800 bg-slate-900 p-5 text-sm leading-6 text-slate-400">
          NDA-safe mockup developed under OE-CLARITY-20260624-NDA-001. Synthetic demo data only. Not an official Ocean Ecostructures system. Not scientific validation. Not ecological certification.
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
