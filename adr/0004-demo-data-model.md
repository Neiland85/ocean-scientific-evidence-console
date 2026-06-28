# ADR-0004 — Demo Data Model for Scientific Evidence Console

## Status

Accepted

## Context

The first functional mockup must demonstrate scientific-operational traceability without using real Ocean Ecostructures data.

The demo must show how a scientist can move from an installation to a monitoring event, then to evidence, measurements, review status, uncertainty and exportable report metadata.

## Decision

We will use local JSON demo fixtures for the first version:

- `data/installations.demo.json`
- `data/monitoring-events.demo.json`
- `data/evidence-assets.demo.json`
- `data/reports.demo.json`

The application imports these fixtures through `src/lib/demo-data.ts` and uses typed structures from `src/types/scientific-evidence.ts`.

## Consequences

The mockup remains fast, NDA-safe, reproducible and easy to review.

No backend, real database, real sensors, real coordinates, real reviewers or real Ocean data are introduced in this phase.

## Alternatives considered

- Real database: rejected for the first mockup because it adds unnecessary operational overhead.
- Real Ocean data: rejected because this phase must remain synthetic and NDA-safe.
- Hardcoded UI-only values: rejected because fixtures provide better traceability and a clearer upgrade path.
