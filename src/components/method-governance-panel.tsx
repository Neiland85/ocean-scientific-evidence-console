"use client";

import { useMemo, useState } from "react";

import type { LanguageCode } from "@/lib/ui-copy";

type GovernanceParameterKey =
  | "methodVisibility"
  | "evidenceTraceability"
  | "uncertaintyClarity"
  | "reviewCompleteness"
  | "sensorCalibration"
  | "exportReadiness";

type PresetKey = "balanced" | "strict" | "exploratory" | "custom";

type MethodGovernancePanelProps = {
  activeFilterLabel: string;
  language: LanguageCode;
};

const acceptanceThreshold = 75;

const parameterOrder: GovernanceParameterKey[] = [
  "methodVisibility",
  "evidenceTraceability",
  "uncertaintyClarity",
  "reviewCompleteness",
  "sensorCalibration",
  "exportReadiness",
];

const presetValues: Record<
  Exclude<PresetKey, "custom">,
  Record<GovernanceParameterKey, number>
> = {
  balanced: {
    methodVisibility: 86,
    evidenceTraceability: 90,
    uncertaintyClarity: 68,
    reviewCompleteness: 74,
    sensorCalibration: 62,
    exportReadiness: 88,
  },
  strict: {
    methodVisibility: 94,
    evidenceTraceability: 96,
    uncertaintyClarity: 84,
    reviewCompleteness: 88,
    sensorCalibration: 82,
    exportReadiness: 92,
  },
  exploratory: {
    methodVisibility: 64,
    evidenceTraceability: 70,
    uncertaintyClarity: 48,
    reviewCompleteness: 54,
    sensorCalibration: 42,
    exportReadiness: 66,
  },
};

const copy = {
  en: {
    eyebrow: "Canonical method governance",
    title: "Adjust scientific method gates",
    subtitle:
      "Change synthetic method parameters and immediately see which governance gates pass or require review.",
    activeFilter: "Active filter",
    score: "Governance score",
    threshold: "Acceptance threshold",
    pass: "Pass",
    review: "Review",
    gates: "gates passing",
    disclaimer:
      "Synthetic governance controls only. These values are demo parameters, not real Ocean Ecostructures measurements.",
    presets: {
      balanced: "Balanced",
      strict: "Strict",
      exploratory: "Exploratory",
      custom: "Custom",
    },
    parameters: {
      methodVisibility: {
        label: "Method visibility",
        description: "Sampling method is visible and readable by the scientist.",
      },
      evidenceTraceability: {
        label: "Evidence traceability",
        description: "Evidence assets, hashes and records are linked.",
      },
      uncertaintyClarity: {
        label: "Uncertainty clarity",
        description: "Uncertainty notes are explicit enough for interpretation.",
      },
      reviewCompleteness: {
        label: "Review completeness",
        description: "Scientific review state is sufficiently complete.",
      },
      sensorCalibration: {
        label: "Sensor calibration",
        description: "Sensor context is reliable enough for this synthetic sample.",
      },
      exportReadiness: {
        label: "Export readiness",
        description: "Filtered dataset is ready for a traceable report draft.",
      },
    },
  },
  ca: {
    eyebrow: "Governança canònica del mètode",
    title: "Ajusta els gates del mètode científic",
    subtitle:
      "Canvia paràmetres sintètics del mètode i veu immediatament quins gates passen o requereixen revisió.",
    activeFilter: "Filtre actiu",
    score: "Score de governança",
    threshold: "Llindar d'acceptació",
    pass: "Passa",
    review: "Revisió",
    gates: "gates superats",
    disclaimer:
      "Controls de governança sintètics. Aquests valors són paràmetres demo, no mesures reals d'Ocean Ecostructures.",
    presets: {
      balanced: "Equilibrat",
      strict: "Estricte",
      exploratory: "Exploratori",
      custom: "Personalitzat",
    },
    parameters: {
      methodVisibility: {
        label: "Visibilitat del mètode",
        description: "El mètode de mostreig és visible i llegible pel científic.",
      },
      evidenceTraceability: {
        label: "Traçabilitat de l'evidència",
        description: "Actius d'evidència, hashes i registres estan connectats.",
      },
      uncertaintyClarity: {
        label: "Claredat de la incertesa",
        description: "Les notes d'incertesa són prou explícites per interpretar.",
      },
      reviewCompleteness: {
        label: "Completitud de revisió",
        description: "L'estat de revisió científica és prou complet.",
      },
      sensorCalibration: {
        label: "Calibratge de sensor",
        description: "El context de sensors és prou fiable per aquesta mostra sintètica.",
      },
      exportReadiness: {
        label: "Preparació per exportar",
        description: "El dataset filtrat està preparat per a un informe traçable.",
      },
    },
  },
  es: {
    eyebrow: "Gobernanza canónica del método",
    title: "Ajusta los gates del método científico",
    subtitle:
      "Cambia parámetros sintéticos del método y ve inmediatamente qué gates pasan o requieren revisión.",
    activeFilter: "Filtro activo",
    score: "Score de gobernanza",
    threshold: "Umbral de aceptación",
    pass: "Pasa",
    review: "Revisión",
    gates: "gates superados",
    disclaimer:
      "Controles de gobernanza sintéticos. Estos valores son parámetros demo, no mediciones reales de Ocean Ecostructures.",
    presets: {
      balanced: "Equilibrado",
      strict: "Estricto",
      exploratory: "Exploratorio",
      custom: "Personalizado",
    },
    parameters: {
      methodVisibility: {
        label: "Visibilidad del método",
        description: "El método de muestreo es visible y legible por el científico.",
      },
      evidenceTraceability: {
        label: "Trazabilidad de evidencia",
        description: "Activos de evidencia, hashes y registros están conectados.",
      },
      uncertaintyClarity: {
        label: "Claridad de incertidumbre",
        description: "Las notas de incertidumbre son explícitas para interpretar.",
      },
      reviewCompleteness: {
        label: "Completitud de revisión",
        description: "El estado de revisión científica es suficientemente completo.",
      },
      sensorCalibration: {
        label: "Calibración de sensor",
        description: "El contexto de sensores es fiable para esta muestra sintética.",
      },
      exportReadiness: {
        label: "Preparación para exportar",
        description: "El dataset filtrado está preparado para un reporte trazable.",
      },
    },
  },
} as const;

export function MethodGovernancePanel({
  activeFilterLabel,
  language,
}: MethodGovernancePanelProps) {
  const [activePreset, setActivePreset] = useState<PresetKey>("balanced");
  const [parameters, setParameters] =
    useState<Record<GovernanceParameterKey, number>>(presetValues.balanced);

  const c = copy[language];

  const score = useMemo(() => {
    const total = parameterOrder.reduce((sum, key) => sum + parameters[key], 0);
    return Math.round(total / parameterOrder.length);
  }, [parameters]);

  const passingCount = parameterOrder.filter(
    (key) => parameters[key] >= acceptanceThreshold,
  ).length;

  const scorePasses = score >= acceptanceThreshold;

  const applyPreset = (preset: Exclude<PresetKey, "custom">) => {
    setActivePreset(preset);
    setParameters(presetValues[preset]);
  };

  const updateParameter = (key: GovernanceParameterKey, value: number) => {
    setActivePreset("custom");
    setParameters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <section className="mt-6 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 shadow-2xl shadow-cyan-950/20">
      <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-start">
        <div>
          <p className="section-kicker">{c.eyebrow}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{c.title}</h3>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-300">
            {c.subtitle}
          </p>
          <p className="mt-4 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            {c.activeFilter}: {activeFilterLabel}
          </p>
        </div>

        <div
          className={
            scorePasses
              ? "rounded-3xl border border-emerald-300/40 bg-emerald-300/10 p-5 text-right shadow-lg shadow-emerald-950/30"
              : "rounded-3xl border border-red-300/40 bg-red-300/10 p-5 text-right shadow-lg shadow-red-950/30"
          }
        >
          <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
            {c.score}
          </p>
          <p
            className={
              scorePasses
                ? "mt-2 text-5xl font-semibold text-emerald-200"
                : "mt-2 text-5xl font-semibold text-red-200"
            }
          >
            {score}
          </p>
          <p
            className={
              scorePasses
                ? "mt-2 text-sm font-semibold text-emerald-200"
                : "mt-2 text-sm font-semibold text-red-200"
            }
          >
            {scorePasses ? c.pass : c.review}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            {passingCount}/{parameterOrder.length} {c.gates}
          </p>
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {(["balanced", "strict", "exploratory"] as const).map((preset) => (
          <button
            className={
              activePreset === preset
                ? "rounded-full border border-cyan-300 bg-cyan-300 px-4 py-2 text-sm font-semibold text-slate-950"
                : "rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-300 hover:border-cyan-300 hover:text-cyan-200"
            }
            key={preset}
            onClick={() => applyPreset(preset)}
            type="button"
          >
            {c.presets[preset]}
          </button>
        ))}

        {activePreset === "custom" ? (
          <span className="rounded-full border border-amber-300/30 bg-amber-300/10 px-4 py-2 text-sm font-semibold text-amber-100">
            {c.presets.custom}
          </span>
        ) : null}
      </div>

      <div className="mt-6 grid gap-4 xl:grid-cols-2">
        {parameterOrder.map((key) => {
          const value = parameters[key];
          const passes = value >= acceptanceThreshold;
          const parameterCopy = c.parameters[key];

          return (
            <article
              className={
                passes
                  ? "rounded-3xl border border-emerald-300/30 bg-emerald-300/10 p-5"
                  : "rounded-3xl border border-red-300/30 bg-red-300/10 p-5"
              }
              key={key}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {parameterCopy.label}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {parameterCopy.description}
                  </p>
                </div>

                <div
                  className={
                    passes
                      ? "rounded-2xl border border-emerald-300/40 bg-emerald-300/10 px-4 py-2 text-right text-emerald-100"
                      : "rounded-2xl border border-red-300/40 bg-red-300/10 px-4 py-2 text-right text-red-100"
                  }
                >
                  <p className="text-2xl font-semibold">{value}</p>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                    {passes ? c.pass : c.review}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <input
                  aria-label={parameterCopy.label}
                  className={
                    passes ? "w-full accent-emerald-400" : "w-full accent-red-400"
                  }
                  max="100"
                  min="0"
                  onChange={(event) =>
                    updateParameter(key, Number(event.target.value))
                  }
                  type="range"
                  value={value}
                />

                <div className="mt-3 h-3 overflow-hidden rounded-full bg-slate-900">
                  <div
                    className={
                      passes
                        ? "h-full rounded-full bg-emerald-400"
                        : "h-full rounded-full bg-red-400"
                    }
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <p className="rounded-2xl border border-slate-800 bg-slate-900 p-4 text-sm leading-6 text-slate-300">
          {c.threshold}: {acceptanceThreshold}
        </p>

        <p className="rounded-2xl border border-amber-300/20 bg-amber-300/10 p-4 text-sm leading-6 text-amber-100">
          {c.disclaimer}
        </p>
      </div>
    </section>
  );
}
