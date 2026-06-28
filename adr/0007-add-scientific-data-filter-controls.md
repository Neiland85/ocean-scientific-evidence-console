# ADR-0007 — Add Scientific Data Filter Controls

## Status

Accepted

## Context

The v0.1 mockup demonstrated scientific-operational traceability, but the visible workflow was still mostly static.

A scientist reviewing operational evidence needs to filter records by review status, evidence availability, uncertainty and exportability.

## Decision

We will add controlled client-side filters over the synthetic monitoring dataset.

The first filter set includes:

- All
- Reviewed
- Partial review
- With evidence
- With uncertainty
- Exportable

## Consequences

The mockup becomes more interactive and closer to a scientific review workflow while remaining lightweight, static, local and NDA-safe.

No backend, database, search engine, real Ocean data or private evidence is introduced.

## Alternatives considered

- Full search engine: rejected as premature.
- Backend filtering: rejected for v0.2 because the dataset is synthetic and local.
- Map/geospatial filters: deferred to a later version.
- Date range filters: deferred to a later version.
