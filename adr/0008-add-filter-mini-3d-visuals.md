# ADR-0008 — Add Filter Mini 3D Visuals

## Status

Accepted

## Context

The v0.2 filter controls made the mockup operationally more useful, but the filter section still looked like a standard button group.

The demo benefits from a more modern scientific-console appearance while keeping the implementation lightweight and NDA-safe.

## Decision

Add pseudo-3D SVG microcharts to each scientific filter control.

The implementation uses:

- React components;
- inline SVG;
- Tailwind/CSS classes;
- static synthetic visual values.

No real 3D engine, charting library, canvas rendering, backend or real Ocean data is introduced.

## Consequences

The filter controls become more visually expressive and easier to scan during a demo.

The implementation remains static, local, lightweight and auditable.

## Alternatives considered

- Three.js: rejected as too heavy for this mockup.
- Chart library: rejected as unnecessary for six small visual controls.
- Canvas rendering: rejected because SVG is enough and easier to audit.
