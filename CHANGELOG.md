# Changelog

## 3.0.0 — 2026-04-22

### BREAKING

- Requires `@narai/connector-toolkit@^3.0.0-rc.1`. See toolkit 3.0 changelog for `Decision`, `ExtendedEnvelope`, and `HardshipEntry` breaking changes (most do not affect this connector; documented for downstream awareness).

### Added

- `scope(ctx)` callback added (global-only pending project/region lookup). Hardships and patterns.yaml live in the global tier. TODO: ideal key is `${projectId}/${region}` — once `GcpClient` stores a default project (e.g. from `gcloud config get-value project`) and region, switch to `scope: (ctx) => \`${ctx.sdk.projectId}/${ctx.sdk.region}\``. (See toolkit design doc at `connector-toolkit/docs/plans/2026-04-22-self-improvement-loop-design.md`.)
