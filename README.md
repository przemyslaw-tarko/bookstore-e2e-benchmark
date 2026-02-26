# bookstore-e2e-benchmark

Monorepo do porównania frameworków E2E w JS/Node:
- Playwright
- Cypress
- Selenium WebDriver

Aplikacja testowa: WordPress + WooCommerce uruchamiana w Dockerze.

## Quick start (wkrótce)
1) `npm ci`
2) `npm run env:up`
3) `npm run test:playwright`

## Struktura
- `apps/bookstore/` – docker-compose i skrypty środowiska
- `packages/shared/` – wspólne helpery i integracje (TestRail, metryki)
- `tests/*/` – testy per framework
- `reports/` – artefakty raportów (ignorowane w git)
