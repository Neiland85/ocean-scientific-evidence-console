# ADR-0005 — Prevent Browser Translation Hydration Mismatch

## Status

Accepted

## Context

During local development, the browser translation layer modified the server-rendered HTML before React hydration.

The mismatch appeared as:

- server HTML using `lang="en"`;
- client/browser-modified HTML using `lang="ca"`;
- injected attributes such as `data-moz-translations-id`.

The project language policy remains:

1. English as the main UI and code language.
2. Documentation sections in English, Catalan and Spanish.

## Decision

We explicitly mark the root HTML and body as non-translatable using:

- `lang="en"`;
- `translate="no"`;
- `className="notranslate"`;
- `suppressHydrationWarning`;
- metadata hint `google: notranslate`.

## Consequences

The UI remains stable for React hydration.

The documentation can still include English, Catalan and Spanish sections, but browser-level automatic translation should not mutate the rendered application shell.

## Alternatives considered

- Change the application language to Catalan: rejected because the main UI language is intentionally English.
- Ignore the warning: rejected because this mockup requires clean technical evidence.
- Remove Catalan documentation: rejected because Catalan documentation is part of the client-positioning strategy.
