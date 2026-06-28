import installationsJson from "../../data/installations.demo.json";
import monitoringEventsJson from "../../data/monitoring-events.demo.json";
import evidenceAssetsJson from "../../data/evidence-assets.demo.json";
import reportsJson from "../../data/reports.demo.json";

import type {
  DemoReport,
  EvidenceAsset,
  Installation,
  MonitoringEvent,
} from "@/types/scientific-evidence";

function required<T>(value: T | undefined, label: string): T {
  if (!value) {
    throw new Error(`Missing required demo data: ${label}`);
  }

  return value;
}

export const installations = installationsJson as Installation[];
export const monitoringEvents = monitoringEventsJson as MonitoringEvent[];
export const evidenceAssets = evidenceAssetsJson as EvidenceAsset[];
export const reports = reportsJson as DemoReport[];

export const primaryInstallation = required(
  installations[0],
  "primaryInstallation",
);

export const latestMonitoringEvent = required(
  monitoringEvents[0],
  "latestMonitoringEvent",
);

export const primaryReport = required(reports[0], "primaryReport");

export const latestEvidenceAssets = evidenceAssets.filter(
  (asset) => asset.monitoringEventId === latestMonitoringEvent.monitoringEventId,
);

export const demoSummary = {
  installationsCount: installations.length,
  monitoringEventsCount: monitoringEvents.length,
  evidenceAssetsCount: evidenceAssets.length,
  exportableReportsCount: reports.length,
  reviewedEventsCount: monitoringEvents.filter(
    (event) => event.reviewStatus === "reviewed",
  ).length,
  partialReviewEventsCount: monitoringEvents.filter(
    (event) => event.reviewStatus === "partial_review",
  ).length,
};
