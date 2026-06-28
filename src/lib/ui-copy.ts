import type { ScientificFilterKey } from "@/lib/scientific-filters";
import type { ReviewStatus } from "@/types/scientific-evidence";

export type LanguageCode = "en" | "ca" | "es";

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

export const uiCopy: Record<LanguageCode, UiCopy> = {
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

export const languageOrder: LanguageCode[] = ["en", "ca", "es"];


export const scientificFilterCopy: Record<
  LanguageCode,
  {
    title: string;
    subtitle: string;
    active: string;
    recordsShown: string;
    preservedContext: string;
    labels: Record<ScientificFilterKey, string>;
  }
> = {
  en: {
    title: "Scientific data filters",
    subtitle:
      "Filter synthetic monitoring records by review status, evidence availability, uncertainty and export readiness.",
    active: "Active filter",
    recordsShown: "records shown",
    preservedContext:
      "Filtered records preserve method, evidence, uncertainty and review context.",
    labels: {
      all: "All",
      reviewed: "Reviewed",
      partial_review: "Partial review",
      with_evidence: "With evidence",
      with_uncertainty: "With uncertainty",
      exportable: "Exportable",
    },
  },
  ca: {
    title: "Filtres científics de dades",
    subtitle:
      "Filtra registres sintètics de monitoratge per estat de revisió, evidència disponible, incertesa i preparació per exportació.",
    active: "Filtre actiu",
    recordsShown: "registres visibles",
    preservedContext:
      "Els registres filtrats conserven el context de mètode, evidència, incertesa i revisió.",
    labels: {
      all: "Tot",
      reviewed: "Revisat",
      partial_review: "Revisió parcial",
      with_evidence: "Amb evidència",
      with_uncertainty: "Amb incertesa",
      exportable: "Exportable",
    },
  },
  es: {
    title: "Filtros científicos de datos",
    subtitle:
      "Filtra registros sintéticos de monitorización por estado de revisión, evidencia disponible, incertidumbre y preparación para exportación.",
    active: "Filtro activo",
    recordsShown: "registros visibles",
    preservedContext:
      "Los registros filtrados conservan el contexto de método, evidencia, incertidumbre y revisión.",
    labels: {
      all: "Todo",
      reviewed: "Revisado",
      partial_review: "Revisión parcial",
      with_evidence: "Con evidencia",
      with_uncertainty: "Con incertidumbre",
      exportable: "Exportable",
    },
  },
};
