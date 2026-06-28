import type { ScientificFilterKey } from "@/lib/scientific-filters";
import type { LanguageCode } from "@/lib/ui-copy";

type LocalizedText = Record<LanguageCode, string>;

export type FilterInsightMetric = {
  label: string;
  value: string;
  note: string;
};

export type FilterInsightRecord = {
  sampleId: string;
  site: string;
  indicator: string;
  value: string;
  method: string;
  status: string;
};

export type FilterInsight = {
  eyebrow: string;
  title: string;
  summary: string;
  syntheticLabel: string;
  metricsTitle: string;
  recordsTitle: string;
  methodTitle: string;
  qualityNote: string;
  metrics: FilterInsightMetric[];
  records: FilterInsightRecord[];
  methodNotes: string[];
};

const localizedUi: Record<
  LanguageCode,
  {
    eyebrow: string;
    syntheticLabel: string;
    metricsTitle: string;
    recordsTitle: string;
    methodTitle: string;
    qualityNote: string;
  }
> = {
  en: {
    eyebrow: "Synthetic operational insight",
    syntheticLabel: "Realistic synthetic data · no real Ocean data",
    metricsTitle: "Operational indicators",
    recordsTitle: "Example records",
    methodTitle: "Method context",
    qualityNote:
      "These values are synthetic and designed to simulate how a scientist would inspect filtered operational evidence.",
  },
  ca: {
    eyebrow: "Lectura operativa sintètica",
    syntheticLabel: "Dades sintètiques realistes · sense dades reals d'Ocean",
    metricsTitle: "Indicadors operatius",
    recordsTitle: "Registres d'exemple",
    methodTitle: "Context metodològic",
    qualityNote:
      "Aquests valors són sintètics i simulen com un científic inspeccionaria evidència operativa filtrada.",
  },
  es: {
    eyebrow: "Lectura operativa sintética",
    syntheticLabel: "Datos sintéticos realistas · sin datos reales de Ocean",
    metricsTitle: "Indicadores operativos",
    recordsTitle: "Registros de ejemplo",
    methodTitle: "Contexto metodológico",
    qualityNote:
      "Estos valores son sintéticos y simulan cómo un científico inspeccionaría evidencia operativa filtrada.",
  },
};

const titles: Record<ScientificFilterKey, LocalizedText> = {
  all: {
    en: "Complete monitoring overview",
    ca: "Vista completa del monitoratge",
    es: "Vista completa de la monitorización",
  },
  reviewed: {
    en: "Validated scientific review",
    ca: "Revisió científica validada",
    es: "Revisión científica validada",
  },
  partial_review: {
    en: "Partial review requiring follow-up",
    ca: "Revisió parcial amb seguiment pendent",
    es: "Revisión parcial con seguimiento pendiente",
  },
  with_evidence: {
    en: "Records with linked evidence",
    ca: "Registres amb evidència vinculada",
    es: "Registros con evidencia vinculada",
  },
  with_uncertainty: {
    en: "Records with uncertainty notes",
    ca: "Registres amb notes d'incertesa",
    es: "Registros con notas de incertidumbre",
  },
  exportable: {
    en: "Export-ready monitoring package",
    ca: "Paquet de monitoratge preparat per exportar",
    es: "Paquete de monitorización preparado para exportar",
  },
};

const summaries: Record<ScientificFilterKey, LocalizedText> = {
  all: {
    en: "Shows the whole synthetic monitoring set, preserving review state, evidence links and uncertainty context.",
    ca: "Mostra tot el conjunt sintètic de monitoratge, mantenint estat de revisió, evidències i incertesa.",
    es: "Muestra todo el conjunto sintético de monitorización, conservando estado de revisión, evidencias e incertidumbre.",
  },
  reviewed: {
    en: "Focuses on records that already passed scientific review and are suitable for high-confidence interpretation.",
    ca: "Centrat en registres que ja han passat revisió científica i permeten una interpretació de més confiança.",
    es: "Se centra en registros que ya han pasado revisión científica y permiten una interpretación de mayor confianza.",
  },
  partial_review: {
    en: "Highlights records that need a second pass before being treated as stable scientific evidence.",
    ca: "Destaca registres que necessiten una segona revisió abans de considerar-se evidència científica estable.",
    es: "Destaca registros que necesitan una segunda revisión antes de considerarse evidencia científica estable.",
  },
  with_evidence: {
    en: "Shows records connected to demo evidence assets such as ROV observations, images or hash references.",
    ca: "Mostra registres connectats amb actius d'evidència demo com observacions ROV, imatges o hashes.",
    es: "Muestra registros conectados con activos de evidencia demo como observaciones ROV, imágenes o hashes.",
  },
  with_uncertainty: {
    en: "Surfaces records where interpretation needs caution because method, sensor or ecological uncertainty is present.",
    ca: "Mostra registres on la interpretació requereix cautela per incertesa metodològica, de sensor o ecològica.",
    es: "Muestra registros donde la interpretación requiere cautela por incertidumbre metodológica, de sensor o ecológica.",
  },
  exportable: {
    en: "Groups records that can be included in a traceable report draft without exposing private or real Ocean data.",
    ca: "Agrupa registres que poden entrar en un esborrany traçable sense exposar dades privades o reals d'Ocean.",
    es: "Agrupa registros que pueden entrar en un borrador trazable sin exponer datos privados o reales de Ocean.",
  },
};

const baseMetrics: Record<
  ScientificFilterKey,
  Array<{
    label: LocalizedText;
    value: string;
    note: LocalizedText;
  }>
> = {
  all: [
    {
      label: { en: "Monitoring events", ca: "Esdeveniments", es: "Eventos" },
      value: "2",
      note: { en: "Synthetic records", ca: "Registres sintètics", es: "Registros sintéticos" },
    },
    {
      label: { en: "Evidence links", ca: "Enllaços d'evidència", es: "Enlaces de evidencia" },
      value: "1",
      note: { en: "Linked demo assets", ca: "Actius demo vinculats", es: "Activos demo vinculados" },
    },
    {
      label: { en: "Export readiness", ca: "Preparació export", es: "Preparación export" },
      value: "2/2",
      note: { en: "Report-compatible", ca: "Compatible amb informe", es: "Compatible con reporte" },
    },
  ],
  reviewed: [
    {
      label: { en: "Validated record", ca: "Registre validat", es: "Registro validado" },
      value: "1",
      note: { en: "Reviewed status", ca: "Estat revisat", es: "Estado revisado" },
    },
    {
      label: { en: "Confidence", ca: "Confiança", es: "Confianza" },
      value: "High",
      note: { en: "Stable interpretation", ca: "Interpretació estable", es: "Interpretación estable" },
    },
    {
      label: { en: "Open flags", ca: "Alertes obertes", es: "Alertas abiertas" },
      value: "0",
      note: { en: "No blocking issue", ca: "Cap bloqueig", es: "Sin bloqueo" },
    },
  ],
  partial_review: [
    {
      label: { en: "Pending check", ca: "Comprovació pendent", es: "Comprobación pendiente" },
      value: "1",
      note: { en: "Second pass needed", ca: "Cal segona revisió", es: "Requiere segunda revisión" },
    },
    {
      label: { en: "Taxa to verify", ca: "Tàxons a verificar", es: "Taxones a verificar" },
      value: "2",
      note: { en: "Visual confirmation", ca: "Confirmació visual", es: "Confirmación visual" },
    },
    {
      label: { en: "Risk level", ca: "Nivell de risc", es: "Nivel de riesgo" },
      value: "Medium",
      note: { en: "Not final evidence", ca: "No és evidència final", es: "No es evidencia final" },
    },
  ],
  with_evidence: [
    {
      label: { en: "Evidence assets", ca: "Actius d'evidència", es: "Activos de evidencia" },
      value: "2",
      note: { en: "ROV/image references", ca: "Referències ROV/imatge", es: "Referencias ROV/imagen" },
    },
    {
      label: { en: "Hash trace", ca: "Traça hash", es: "Traza hash" },
      value: "SHA-256",
      note: { en: "Demo custody", ca: "Custòdia demo", es: "Custodia demo" },
    },
    {
      label: { en: "Method link", ca: "Enllaç mètode", es: "Enlace método" },
      value: "Visible",
      note: { en: "Method preserved", ca: "Mètode preservat", es: "Método preservado" },
    },
  ],
  with_uncertainty: [
    {
      label: { en: "Uncertain records", ca: "Registres incerts", es: "Registros inciertos" },
      value: "2",
      note: { en: "Interpretation caution", ca: "Cautela interpretativa", es: "Cautela interpretativa" },
    },
    {
      label: { en: "Index spread", ca: "Dispersió índex", es: "Dispersión índice" },
      value: "±0.12",
      note: { en: "Synthetic variance", ca: "Variància sintètica", es: "Varianza sintética" },
    },
    {
      label: { en: "Sensor note", ca: "Nota sensor", es: "Nota sensor" },
      value: "Drift",
      note: { en: "Calibration required", ca: "Cal calibratge", es: "Requiere calibración" },
    },
  ],
  exportable: [
    {
      label: { en: "Exportable records", ca: "Registres exportables", es: "Registros exportables" },
      value: "2",
      note: { en: "Report draft ready", ca: "Esborrany preparat", es: "Borrador preparado" },
    },
    {
      label: { en: "Private data", ca: "Dades privades", es: "Datos privados" },
      value: "0",
      note: { en: "NDA-safe sample", ca: "Mostra segura NDA", es: "Muestra segura NDA" },
    },
    {
      label: { en: "Review package", ca: "Paquet revisió", es: "Paquete revisión" },
      value: "v0.2",
      note: { en: "Traceable export", ca: "Export traçable", es: "Exportación trazable" },
    },
  ],
};

const baseRecords: Record<
  ScientificFilterKey,
  Array<{
    sampleId: string;
    site: string;
    indicator: LocalizedText;
    value: string;
    method: string;
    status: LocalizedText;
  }>
> = {
  all: [
    {
      sampleId: "MON-DEMO-2026-02-14-A",
      site: "DEMO-LBU-003",
      indicator: { en: "Species richness", ca: "Riquesa d'espècies", es: "Riqueza de especies" },
      value: "12 taxa",
      method: "ROV transect",
      status: { en: "Reviewed", ca: "Revisat", es: "Revisado" },
    },
    {
      sampleId: "MON-DEMO-2026-01-10-A",
      site: "DEMO-LBU-003",
      indicator: { en: "Shannon index", ca: "Índex Shannon", es: "Índice Shannon" },
      value: "2.41",
      method: "Image sampling",
      status: { en: "Partial review", ca: "Revisió parcial", es: "Revisión parcial" },
    },
  ],
  reviewed: [
    {
      sampleId: "SCI-REV-DEMO-001",
      site: "DEMO-LBU-003",
      indicator: { en: "Validated taxa", ca: "Tàxons validats", es: "Taxones validados" },
      value: "10/12",
      method: "ROV transect",
      status: { en: "Reviewed", ca: "Revisat", es: "Revisado" },
    },
    {
      sampleId: "SCI-REV-DEMO-002",
      site: "DEMO-LBU-003",
      indicator: { en: "Confidence band", ca: "Banda de confiança", es: "Banda de confianza" },
      value: "High",
      method: "Human review",
      status: { en: "Validated", ca: "Validat", es: "Validado" },
    },
  ],
  partial_review: [
    {
      sampleId: "SCI-PART-DEMO-001",
      site: "DEMO-LBU-003",
      indicator: { en: "Taxa pending", ca: "Tàxons pendents", es: "Taxones pendientes" },
      value: "2",
      method: "Image sampling",
      status: { en: "Needs second pass", ca: "Cal segona revisió", es: "Requiere segunda revisión" },
    },
    {
      sampleId: "SCI-PART-DEMO-002",
      site: "DEMO-LBU-003",
      indicator: { en: "Habitat coverage", ca: "Cobertura d'hàbitat", es: "Cobertura de hábitat" },
      value: "68%",
      method: "ROV visual estimate",
      status: { en: "Partial review", ca: "Revisió parcial", es: "Revisión parcial" },
    },
  ],
  with_evidence: [
    {
      sampleId: "EVD-DEMO-ROV-001",
      site: "DEMO-LBU-003",
      indicator: { en: "ROV observation", ca: "Observació ROV", es: "Observación ROV" },
      value: "Linked",
      method: "ROV video",
      status: { en: "Hash referenced", ca: "Hash referenciat", es: "Hash referenciado" },
    },
    {
      sampleId: "EVD-DEMO-IMG-001",
      site: "DEMO-LBU-003",
      indicator: { en: "Still image set", ca: "Conjunt d'imatges", es: "Conjunto de imágenes" },
      value: "Linked",
      method: "Image capture",
      status: { en: "Evidence available", ca: "Evidència disponible", es: "Evidencia disponible" },
    },
  ],
  with_uncertainty: [
    {
      sampleId: "UNC-DEMO-001",
      site: "DEMO-LBU-003",
      indicator: { en: "Sensor drift note", ca: "Nota de deriva sensor", es: "Nota de deriva de sensor" },
      value: "±0.12",
      method: "Sensor check",
      status: { en: "Caution", ca: "Cautela", es: "Cautela" },
    },
    {
      sampleId: "UNC-DEMO-002",
      site: "DEMO-LBU-003",
      indicator: { en: "Visibility constraint", ca: "Limitació de visibilitat", es: "Limitación de visibilidad" },
      value: "Medium",
      method: "ROV transect",
      status: { en: "Interpret carefully", ca: "Interpretar amb cura", es: "Interpretar con cuidado" },
    },
  ],
  exportable: [
    {
      sampleId: "RPT-DEMO-2026-02-LBU003",
      site: "DEMO-LBU-003",
      indicator: { en: "Report inclusion", ca: "Inclusió en informe", es: "Inclusión en reporte" },
      value: "Ready",
      method: "Traceable export",
      status: { en: "Exportable", ca: "Exportable", es: "Exportable" },
    },
    {
      sampleId: "RPT-DEMO-CHECK-001",
      site: "DEMO-LBU-003",
      indicator: { en: "Disclosure safety", ca: "Seguretat de divulgació", es: "Seguridad de divulgación" },
      value: "NDA-safe",
      method: "Synthetic dataset",
      status: { en: "No real data", ca: "Sense dades reals", es: "Sin datos reales" },
    },
  ],
};

const methodNotes: Record<LanguageCode, string[]> = {
  en: [
    "Synthetic records simulate a scientist-facing review workflow.",
    "Values are plausible placeholders, not measurements from Ocean systems.",
    "Evidence, uncertainty and review status remain visible after filtering.",
  ],
  ca: [
    "Els registres sintètics simulen un flux de revisió per a científics.",
    "Els valors són placeholders plausibles, no mesures de sistemes d'Ocean.",
    "Evidència, incertesa i estat de revisió continuen visibles després del filtre.",
  ],
  es: [
    "Los registros sintéticos simulan un flujo de revisión para científicos.",
    "Los valores son placeholders plausibles, no mediciones de sistemas de Ocean.",
    "Evidencia, incertidumbre y estado de revisión siguen visibles después del filtro.",
  ],
};

export function getSyntheticOperationalInsight(
  language: LanguageCode,
  filter: ScientificFilterKey,
): FilterInsight {
  const ui = localizedUi[language];

  return {
    eyebrow: ui.eyebrow,
    title: titles[filter][language],
    summary: summaries[filter][language],
    syntheticLabel: ui.syntheticLabel,
    metricsTitle: ui.metricsTitle,
    recordsTitle: ui.recordsTitle,
    methodTitle: ui.methodTitle,
    qualityNote: ui.qualityNote,
    metrics: baseMetrics[filter].map((metric) => ({
      label: metric.label[language],
      value: metric.value,
      note: metric.note[language],
    })),
    records: baseRecords[filter].map((record) => ({
      sampleId: record.sampleId,
      site: record.site,
      indicator: record.indicator[language],
      value: record.value,
      method: record.method,
      status: record.status[language],
    })),
    methodNotes: methodNotes[language],
  };
}
