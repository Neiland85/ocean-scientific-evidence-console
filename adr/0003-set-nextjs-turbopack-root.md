# ADR-0003 — Set Next.js Turbopack Root

## Status

Accepted

## Context

During the bootstrap verification build, Next.js detected multiple lockfiles and inferred a workspace root outside the project directory.

The project must remain self-contained inside:

`/Users/estudio/Projects/GITHUB-PROJECTS-2026/GOVERNANZA_ORGANIZATIVA/WebApp/ocean-scientific-evidence-console`

## Decision

We explicitly set `turbopack.root` in `next.config.ts` using `process.cwd()`.

## Consequences

The build process should resolve the project root consistently from the repository directory and avoid accidental workspace inference from unrelated lockfiles outside the repository.

## Alternatives considered

- Remove the external lockfile: rejected because it may belong to another workspace.
- Ignore the warning: rejected because this project requires clean technical evidence.
- Move the repository: rejected because the current governance directory is correct.
