import type {
  DemoReport,
  EvidenceAsset,
  MonitoringEvent,
} from "@/types/scientific-evidence";

export type ScientificFilterKey =
  | "all"
  | "reviewed"
  | "partial_review"
  | "with_evidence"
  | "with_uncertainty"
  | "exportable";

export const scientificFilterOrder: ScientificFilterKey[] = [
  "all",
  "reviewed",
  "partial_review",
  "with_evidence",
  "with_uncertainty",
  "exportable",
];

export function filterMonitoringEvents(
  events: MonitoringEvent[],
  evidenceAssets: EvidenceAsset[],
  reports: DemoReport[],
  filter: ScientificFilterKey,
): MonitoringEvent[] {
  const evidenceEventIds = new Set(
    evidenceAssets.map((asset) => asset.monitoringEventId),
  );

  const exportableEventIds = new Set(
    reports.flatMap((report) => report.includedMonitoringEvents),
  );

  return events.filter((event) => {
    if (filter === "all") return true;
    if (filter === "reviewed") return event.reviewStatus === "reviewed";
    if (filter === "partial_review") {
      return event.reviewStatus === "partial_review";
    }
    if (filter === "with_evidence") {
      return evidenceEventIds.has(event.monitoringEventId);
    }
    if (filter === "with_uncertainty") {
      return event.uncertaintyNotes.trim().length > 0;
    }
    if (filter === "exportable") {
      return exportableEventIds.has(event.monitoringEventId);
    }

    return true;
  });
}

export function getMonitoringFilterCount(
  events: MonitoringEvent[],
  evidenceAssets: EvidenceAsset[],
  reports: DemoReport[],
  filter: ScientificFilterKey,
): number {
  return filterMonitoringEvents(events, evidenceAssets, reports, filter).length;
}
