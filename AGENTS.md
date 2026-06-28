# Project Agent Instructions

## Project

Ocean Scientific Evidence Console

NDA-safe scientific-operational mockup for exploring how a scientist could query marine installation data, monitoring evidence, biodiversity measurements, uncertainty, review status and exportable reports.

## Confidentiality

This project is developed under the confidentiality framework:

`OE-CLARITY-20260624-NDA-001`

Do not add, infer, expose or fabricate real, private, internal or confidential Ocean Ecostructures data.

Only synthetic demo data is allowed.

## Main language

The main language of the codebase, UI labels, routes, components, types and technical implementation is English.

## Documentation language policy

All strategic and documentary sections must be written in this order:

1. English
2. Catalan
3. Spanish

This order is intentional: international technical clarity first, Catalan institutional proximity second, and Spanish operational accessibility third.

## Product principle

A scientist does not need a pretty screen first.

A scientist needs reliable data, visible method, traceable evidence, uncertainty notes, review status and exportable reports.

## Strict rules

- Do not use real Ocean Ecostructures data.
- Do not use real client data.
- Do not use real coordinates unless explicitly authorized.
- Do not use real scientist names as reviewers.
- Do not claim scientific validation.
- Do not claim ecological certification.
- Do not claim carbon certification.
- Do not present this as an official Ocean Ecostructures system.
- Do not replace or assume anything about Ocean internal systems.
- Do not use AI claims unless explicitly justified and documented.

## ADR policy

Use ADR files under `/adr` for meaningful decisions related to:

- architecture;
- data model;
- privacy;
- NDA boundaries;
- evidence traceability;
- export format;
- UX flow;
- scientific uncertainty;
- synthetic data policy.

## Before coding

Before implementing a feature, verify:

1. Does it use only synthetic data?
2. Does it support traceability?
3. Does it expose method, date, evidence, uncertainty or review status?
4. Does it avoid unsupported claims?
5. Does it respect EN / CA / ES documentation order?
