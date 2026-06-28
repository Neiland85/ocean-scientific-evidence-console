# Packaging Notes

## English

This repository contains an NDA-safe scientific-operational mockup.

Current packaging status:

- Build: OK
- Lint: OK
- npm audit: 0 vulnerabilities on the feature branch
- Data policy: synthetic demo data only
- NDA framework: OE-CLARITY-20260624-NDA-001
- Main UI language: English
- Documentation order: English / Catalan / Spanish

## Browser translation warning

If Firefox automatic translation is enabled, React may show a hydration mismatch warning because the browser modifies the server-rendered HTML before React hydrates.

This does not indicate a data or build failure.

For professional presentation, the recommended approach is:

- use English UI by default;
- provide controlled Catalan/Spanish documentation;
- avoid relying on browser automatic translation during the live demo;
- optionally implement an internal EN / CA / ES switch later.

## Català

Aquest repositori conté un mockup científic-operatiu segur sota NDA.

Estat actual d'empaquetat:

- Build: OK
- Lint: OK
- npm audit: 0 vulnerabilitats a la branca de funcionalitat
- Política de dades: només dades sintètiques de demostració
- Marc NDA: OE-CLARITY-20260624-NDA-001
- Idioma principal de la UI: anglès
- Ordre de documentació: anglès / català / castellà

## Avís de traducció del navegador

Si la traducció automàtica de Firefox està activada, React pot mostrar un avís d'hidratació perquè el navegador modifica l'HTML renderitzat pel servidor abans que React hidrati.

Això no indica una fallada de dades ni de build.

Per a una presentació professional, l'enfocament recomanat és:

- utilitzar la UI en anglès per defecte;
- aportar documentació controlada en català i castellà;
- evitar dependre de la traducció automàtica del navegador durant la demo;
- implementar més endavant un selector intern EN / CA / ES si cal.

## Español

Este repositorio contiene un mockup científico-operativo seguro bajo NDA.

Estado actual de empaquetado:

- Build: OK
- Lint: OK
- npm audit: 0 vulnerabilidades en la rama de funcionalidad
- Política de datos: solo datos sintéticos de demostración
- Marco NDA: OE-CLARITY-20260624-NDA-001
- Idioma principal de la UI: inglés
- Orden de documentación: inglés / catalán / español

## Aviso de traducción del navegador

Si la traducción automática de Firefox está activada, React puede mostrar un aviso de hidratación porque el navegador modifica el HTML renderizado por el servidor antes de que React hidrate.

Esto no indica un fallo de datos ni de build.

Para una presentación profesional, el enfoque recomendado es:

- utilizar la UI en inglés por defecto;
- aportar documentación controlada en catalán y español;
- evitar depender de la traducción automática del navegador durante la demo;
- implementar más adelante un selector interno EN / CA / ES si hace falta.
