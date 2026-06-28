# ADR-0009 — Add Synthetic Operational Filter Insights

## Status

Accepted

## Context

The filter cards improved interaction and visual quality, but clicking a filter should also expose a more realistic scientific-operational reading.

The demo must remain NDA-safe and must not include real Ocean Ecostructures data.

## Decision

Add a synthetic operational insight panel driven by the active filter.

The panel shows:

- synthetic operational indicators;
- example records;
- method notes;
- explicit synthetic-data disclaimer.

## Consequences

The mockup becomes closer to a scientist-facing review console while keeping all data synthetic, local, static and auditable.

## Alternatives considered

- Use real client data: rejected.
- Connect to backend or database: deferred.
- Use chart libraries: rejected for this iteration.
