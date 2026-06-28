# ADR-0006 — Use Controlled UI Language Switch

## Status

Accepted

## Context

Browser-level automatic translation modified the server-rendered HTML and caused React hydration mismatch warnings.

At the same time, the mockup benefits from showing English, Catalan and Spanish language support in a controlled and client-safe way.

## Decision

We will keep browser translation disabled at the document level and implement a controlled UI language switch inside the application.

The UI supports:

- English;
- Catalan;
- Spanish.

The codebase, file names, routes, variables and implementation language remain English.

## Consequences

The app can demonstrate Catalan and Spanish client-facing language support without relying on browser translation.

React hydration remains stable because the initial render is controlled by the application.

## Alternatives considered

- Use browser translation: rejected because it caused hydration mismatch.
- Remove Catalan support: rejected because Catalan documentation and client proximity are strategic.
- Make Catalan the default UI language: rejected because the main project language is English.
