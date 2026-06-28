# ADR-0011 — Add Governance Snapshots and Printable Reports

## Status

Accepted

## Context

The method governance panel allows interactive adjustment of synthetic governance parameters.

The next step is to preserve exact parameter configurations so that reviewers can compare them and produce a printable report.

The demo must remain local, synthetic and NDA-safe.

## Decision

Add local governance snapshots and a printable report flow.

The implementation uses:

- local component state;
- browser localStorage;
- a comparison dashboard;
- a print action using the browser print dialog.

## Consequences

The mockup supports a more realistic governance review workflow.

A reviewer can freeze, compare, reapply and remove synthetic parameter configurations.

No backend, database, login, real Ocean data or private operational evidence is introduced.

## Alternatives considered

- Persist snapshots in a backend: deferred.
- Export PDF server-side: rejected for this static demo.
- Store real method values: rejected.
