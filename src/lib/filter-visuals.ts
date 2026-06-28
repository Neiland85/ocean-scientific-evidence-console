import type { ScientificFilterKey } from "@/lib/scientific-filters";

export const filterMiniChartBars: Record<ScientificFilterKey, number[]> = {
  all: [58, 78, 46, 68],
  reviewed: [42, 84, 74, 58],
  partial_review: [32, 62, 48, 36],
  with_evidence: [72, 88, 64, 80],
  with_uncertainty: [84, 38, 72, 52],
  exportable: [48, 64, 78, 90],
};
