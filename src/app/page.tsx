"use client";

import { useState } from "react";

import {
  demoSummary,
  latestEvidenceAssets,
  latestMonitoringEvent,
  primaryInstallation,
  primaryReport,
} from "@/lib/demo-data";

import type { ReviewStatus } from "@/types/scientific-evidence";

type LanguageCode = "en" | "ca" | "es";

type UiCopy = {
  languageName: string;
  badges: {
    nda: string;
    synthetic: string;
    documentation: string;
  };
  title: string;
  subtitle: string;
  ndaNotice: string;
  metrics: {
    installations: string;
    installationsDetail: string;
    monitoringEvents: string;
    monitoringEventsDetail: string;
    evidenceAssets: string;
    evidenceAssetsDetail: string;
    reports: string;
    reportsDetail: string;
  };
  selectedInstallation: string;
  latestMonitoringEvent: string;
  biodiversity: string;
  observedSpeciesAndIndex: string;
  syntheticObservedTaxa: string;
  sensorContext: string;
  environmentalReadings: string;
  export: string;
  traceableReportDraft: string;
  evidenceChain: string;
  evidenceLinked: string;
  scientistQuestion: string;
  uncertaintyPrefix: string;
  footer: string;
  labels: {
    location: string;
    coordinates: string;
    structure: string;
    deployment: string;
    baseline: string;
    controlSite: string;
    monitoringDate: string;
    method: string;
    dataSource: string;
    reviewStatus: string;
    confidence: string;
    temperature: string;
    dissolvedOxygen: string;
    ph: string;
    chlorophyll: string;
    reportId: string;
    status: string;
    version: string;
    generated: string;
    captureDate: string;
    rawReference: string;
    hash: string;
  };
  statusLabels: Record<ReviewStatus, string>;
};

const uiCopy: Record<LanguageCode, UiCopy> = {
  en: {
    languageName: "English",
    badges: {
      nda: "NDA-safe mockup",
      synthetic: "Synthetic data only",
      documentation: "EN / CA / ES documentation",
    },
    title: "Ocean Scientific Evidence Console",
    subtitle:
      "Scientific-operational mockup for querying marine installation data, monitoring evidence, biodiversity measurements, method visibility, uncertainty, review status and exportable traceable reports.",
    ndaNotice:
      "Developed under confidentiality framework OE-CLARITY-20260624-NDA-001. This mockup does not contain real, private, internal or confidential Ocean Ecostructures data.",
    metrics: {
      installations: "Demo installations",
      installationsDetail: "Synthetic records",
      monitoringEvents: "Monitoring events",
      monitoringEventsDetail: "Linked to method and evidence",
      evidenceAssets: "Evidence assets",
      evidenceAssetsDetail: "Raw references and demo hashes",
      reports: "Exportable reports",
      reportsDetail: "Draft traceable exports",
    },
    selectedInstallation: "Selected installation",
    latestMonitoringEvent: "Latest monitoring event",
    biodiversity: "Biodiversity",
    observedSpeciesAndIndex: "Observed species and index",
    syntheticObservedTaxa: "Synthetic observed taxa",
    sensorContext: "Sensor context",
    environmentalReadings: "Environmental readings",
    export: "Export",
    traceableReportDraft: "Traceable report draft",
    evidenceChain: "Evidence chain",
    evidenceLinked: "Evidence linked to the latest monitoring event",
    scientistQuestion:
      "Scientist question: where is this installation, when was it deployed, what is the baseline and what control reference is used?",
    uncertaintyPrefix: "Uncertainty",
    footer:
      "NDA-safe mockup developed under OE-CLARITY-20260624-NDA-001. Synthetic demo data only. Not an official Ocean Ecostructures system. Not scientific validation. Not ecological certification.",
    labels: {
      location: "Location",
      coordinates: "Coordinates",
      structure: "Structure",
      deployment: "Deployment",
      baseline: "Baseline",
      controlSite: "Control site",
      monitoringDate: "Monitoring date",
      method: "Method",
      dataSource: "Data source",
      reviewStatus: "Review status",
      confidence: "Confidence",
      temperature: "Temperature",
      dissolvedOxygen: "Dissolved oxygen",
      ph: "pH",
      chlorophyll: "Chlorophyll-a",
      reportId: "Report ID",
      status: "Status",
      version: "Version",
      generated: "Generated",
      captureDate: "Capture date",
      rawReference: "Raw reference",
      hash: "Hash",
    },
    statusLabels: {
      reviewed: "Reviewed",
      partial_review: "Partial review",
      pending_review: "Pending review",
    },
  },
  ca: {
    languageName: "Català",
    badges: {
      nda: "Mockup segur sota NDA",
      synthetic: "Només dades sintètiques",
      documentation: "Documentació EN / CA / ES",
    },
    title: "Consola d'Evidència Científica Ocean",
    subtitle:
      "Mockup científic-operatiu per consultar dades d'instal·lacions marines, evidències de monitoratge, mesures de biodiversitat, visibilitat del mètode, incertesa, estat de revisió i informes exportables traçables.",
    ndaNotice:
      "Desenvolupat sota el marc de confidencialitat OE-CLARITY-20260624-NDA-001. Aquest mockup no conté dades reals, privades, internes ni confidencials d'Ocean Ecostructures.",
    metrics: {
      installations: "Instal·lacions demo",
      installationsDetail: "Registres sintètics",
      monitoringEvents: "Esdeveniments de monitoratge",
      monitoringEventsDetail: "Connectats amb mètode i evidència",
      evidenceAssets: "Actius d'evidència",
      evidenceAssetsDetail: "Referències raw i hashes demo",
      reports: "Informes exportables",
      reportsDetail: "Esborranys traçables",
    },
    selectedInstallation: "Instal·lació seleccionada",
    latestMonitoringEvent: "Últim esdeveniment de monitoratge",
    biodiversity: "Biodiversitat",
    observedSpeciesAndIndex: "Espècies observades i índex",
    syntheticObservedTaxa: "Tàxons observats sintètics",
    sensorContext: "Context de sensors",
    environmentalReadings: "Lectures ambientals",
    export: "Exportació",
    traceableReportDraft: "Esborrany d'informe traçable",
    evidenceChain: "Cadena d'evidència",
    evidenceLinked: "Evidència vinculada a l'últim esdeveniment de monitoratge",
    scientistQuestion:
      "Pregunta científica: on és aquesta instal·lació, quan es va desplegar, quina és la línia base i quina referència de control s'utilitza?",
    uncertaintyPrefix: "Incertesa",
    footer:
      "Mockup segur sota NDA desenvolupat sota OE-CLARITY-20260624-NDA-001. Només dades sintètiques de demostració. No és un sistema oficial d'Ocean Ecostructures. No és validació científica. No és certificació ecològica.",
    labels: {
      location: "Ubicació",
      coordinates: "Coordenades",
      structure: "Estructura",
      deployment: "Desplegament",
      baseline: "Línia base",
      controlSite: "Lloc de control",
      monitoringDate: "Data de monitoratge",
      method: "Mètode",
      dataSource: "Font de dades",
      reviewStatus: "Estat de revisió",
      confidence: "Confiança",
      temperature: "Temperatura",
      dissolvedOxygen: "Oxigen dissolt",
      ph: "pH",
      chlorophyll: "Clorofil·la-a",
      reportId: "ID d'informe",
      status: "Estat",
      version: "Versió",
      generated: "Generat",
      captureDate: "Data de captura",
      rawReference: "Referència raw",
      hash: "Hash",
    },
    statusLabels: {
      reviewed: "Revisat",
      partial_review: "Revisió parcial",
      pending_review: "Revisió pendent",
    },
  },
  es: {
    languageName: "Español",
    badges: {
      nda: "Mockup seguro bajo NDA",
      synthetic: "Solo datos sintéticos",
      documentation: "Documentación EN / CA / ES",
    },
    title: "Consola Científica de Evidencia Ocean",
    subtitle:
      "Mockup científico-operativo para consultar datos de instalaciones marinas, evidencias de monitorización, mediciones de biodiversidad, visibilidad del método, incertidumbre, estado de revisión y reportes exportables trazables.",
    ndaNotice:
      "Desarrollado bajo el marco de confidencialidad OE-CLARITY-20260624-NDA-001. Este mockup no contiene datos reales, privados, internos ni confidenciales de Ocean Ecostructures.",
    metrics: {
      installations: "Instalaciones demo",
      installationsDetail: "Registros sintéticos",
      monitoringEvents: "Eventos de monitorización",
      monitoringEventsDetail: "Conectados con método y evidencia",
      evidenceAssets: "Activos de evidencia",
      evidenceAssetsDetail: "Referencias raw y hashes demo",
      reports: "Reportes exportables",
      reportsDetail: "Borradores trazables",
    },
    selectedInstallation: "Instalación seleccionada",
    latestMonitoringEvent: "Último evento de monitorización",
    biodiversity: "Biodiversidad",
    observedSpeciesAndIndex: "Especies observadas e índice",
    syntheticObservedTaxa: "Taxones observados sintéticos",
    sensorContext: "Contexto de sensores",
    environmentalReadings: "Lecturas ambientales",
    export: "Exportación",
    traceableReportDraft: "Borrador de reporte trazable",
    evidenceChain: "Cadena de evidencia",
    evidenceLinked: "Evidencia vinculada al último evento de monitorización",
    scientistQuestion:
      "Pregunta científica: dónde está esta instalación, cuándo se desplegó, cuál es la línea base y qué referencia de control se utiliza?",
    uncertaintyPrefix: "Incertidumbre",
    footer:
      "Mockup seguro bajo NDA desarrollado bajo OE-CLARITY-20260624-NDA-001. Solo datos sintéticos de demostración. No es un sistema oficial de Ocean Ecostructures. No es validación científica. No es certificación ecológica.",
    labels: {
      location: "Ubicación",
      coordinates: "Coordenadas",
      structure: "Estructura",
      deployment: "Despliegue",
      baseline: "Línea base",
      controlSite: "Sitio de control",
      monitoringDate: "Fecha de monitorización",
      method: "Método",
      dataSource: "Fuente de datos",
      reviewStatus: "Estado de revisión",
      confidence: "Confianza",
      temperature: "Temperatura",
      dissolvedOxygen: "Oxígeno disuelto",
      ph: "pH",
      chlorophyll: "Clorofila-a",
      reportId: "ID de reporte",
      status: "Estado",
      version: "Versión",
      generated: "Generado",
      captureDate: "Fecha de captura",
      rawReference: "Referencia raw",
      hash: "Hash",
    },
    statusLabels: {
      reviewed: "Revisado",
      partial_review: "Revisión parcial",
      pending_review: "Revisión pendiente",
    },
  },
};

const languageOrder: LanguageCode[] = ["en", "ca", "es"];

export default function Home() {
  const [language, setLanguage] = useState<LanguageCode>("en");
  const copy = uiCopy[language];

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
            <h2 className="mt-2 text-2xl font-semibold text-white">{latestMonitoringEvent.monitoringEventId}</h2>

            <div className="mt-6 space-y-4">
              <InfoRow label={copy.labels.monitoringDate} value={latestMonitoringEvent.monitoringDate} />
              <InfoRow label={copy.labels.method} value={latestMonitoringEvent.method} />
              <InfoRow label={copy.labels.dataSource} value={latestMonitoringEvent.dataSource} />
              <InfoRow label={copy.labels.reviewStatus} value={copy.statusLabels[latestMonitoringEvent.reviewStatus]} />
              <InfoRow label={copy.labels.confidence} value={latestMonitoringEvent.confidenceLevel} />
            </div>

            <div className="mt-6 rounded-2xl border border-rose-300/20 bg-rose-300/10 p-4 text-sm leading-6 text-rose-100">
              {copy.uncertaintyPrefix}: {latestMonitoringEvent.uncertaintyNotes}
            </div>
          </article>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-800 bg-slate-900 p-6">
            <p className="section-kicker">{copy.biodiversity}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{copy.observedSpeciesAndIndex}</h3>

            <p className="mt-5 text-5xl font-semibold text-cyan-200">{latestMonitoringEvent.speciesRichness}</p>
            <p className="mt-2 text-sm text-slate-400">{copy.syntheticObservedTaxa}</p>

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
            <p className="section-kicker">{copy.sensorContext}</p>
            <h3 className="mt-2 text-xl font-semibold text-white">{copy.environmentalReadings}</h3>

            <div className="mt-5 grid gap-3">
              <InfoRow label={copy.labels.temperature} value={`${latestMonitoringEvent.sensorReading.temperatureCelsius} ºC`} />
              <InfoRow label={copy.labels.dissolvedOxygen} value={`${latestMonitoringEvent.sensorReading.dissolvedOxygenMgL} mg/L`} />
              <InfoRow label={copy.labels.ph} value={`${latestMonitoringEvent.sensorReading.ph}`} />
              <InfoRow label={copy.labels.chlorophyll} value={`${latestMonitoringEvent.sensorReading.chlorophyllUgL} µg/L`} />
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
            {latestEvidenceAssets.map((asset) => (
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
