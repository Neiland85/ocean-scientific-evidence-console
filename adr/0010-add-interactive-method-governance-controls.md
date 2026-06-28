# ADR-0010 — Add Interactive Method Governance Controls

## Status

Accepted

## Context

The console now has filters, pseudo-3D filter cards and synthetic operational insights.

The next governance layer is to let a scientist or reviewer change synthetic method parameters and visually inspect whether the filtered dataset is ready for interpretation or export.

The demo must remain static, local and NDA-safe.

## Decision

Add an interactive method governance panel with synthetic parameters, red/green gate status and an overall governance score.

Parameters:

- Method visibility
- Evidence traceability
- Uncertainty clarity
- Review completeness
- Sensor calibration
- Export readiness

## Consequences

The mockup becomes closer to a governed scientific review console.

The implementation remains local, synthetic, auditable and free of real Ocean Ecostructures data.

## Alternatives considered

- Use real project thresholds: rejected.
- Persist governance parameters: deferred.
- Add backend decisioning: deferred.
- Use chart libraries: rejected for this iteration.
