export type ReviewStatus = "reviewed" | "partial_review" | "pending_review";

export type Installation = {
  installationId: string;
  locationName: string;
  coordinates: string;
  structureType: string;
  deploymentDate: string;
  status: string;
  monitoringStatus: string;
  baselineReference: string;
  controlSite: string;
  lastUpdated: string;
};

export type MonitoringEvent = {
  monitoringEventId: string;
  installationId: string;
  monitoringDate: string;
  method: string;
  dataSource: string;
  speciesObserved: string[];
  speciesRichness: number;
  biodiversityIndex: {
    type: string;
    value: number;
  };
  biomassEstimateKg: number;
  sensorReading: {
    temperatureCelsius: number;
    dissolvedOxygenMgL: number;
    ph: number;
    chlorophyllUgL: number;
  };
  reviewStatus: ReviewStatus;
  confidenceLevel: string;
  uncertaintyNotes: string;
  reviewedBy: string;
  evidenceHash: string;
  lastUpdated: string;
};

export type EvidenceAsset = {
  evidenceAssetId: string;
  monitoringEventId: string;
  type: "photo" | "video" | "sensor" | "document";
  label: string;
  rawDataReference: string;
  captureMethod: string;
  captureDate: string;
  evidenceHash: string;
  reviewStatus: ReviewStatus;
};

export type DemoReport = {
  reportId: string;
  installationId: string;
  includedMonitoringEvents: string[];
  reportStatus: string;
  exportVersion: string;
  generatedAt: string;
  disclaimer: string;
};
