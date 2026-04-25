# Changelog

## 3.2.0 — 2026-04-25

### Added
- `@narai/connector-config@^1.1.0` dep + a CLI bootstrap that loads the GCP slice from `~/.connectors/config.yaml` (or `NARAI_CONFIG_BLOB` when injected by `@narai/connector-hub`) and applies its options to `process.env` before `connector.main` runs. Existing `GCP_*` env exports take precedence — the bootstrap only fills in undefined entries. Mapping: `project_id → GCP_PROJECT_ID`, `region → GCP_REGION`, `credentials → GOOGLE_APPLICATION_CREDENTIALS`.

## 3.1.0 — 2026-04-23

### Added
- Usage tracking via `@narai/connector-toolkit@^3.1.0`. Installs three plugin hooks (`PostToolUse`, `SessionEnd`, `SessionStart` stale-check) that record per-call response bytes and estimated tokens to `.claude/connectors/gcp/usage/<session>.jsonl` and summarize at session end.

### Changed
- `@narai/connector-toolkit` dep bumped from `^3.0.0-rc.1` to `^3.1.0`.

## 3.0.1 — 2026-04-22

### Added
- `scope(ctx)` now returns `${defaultProjectId}/${defaultRegion}` when both are configured, and `null` otherwise. Hardships and patterns.yaml are now keyed by GCP project + region.
- `GcpClient` accepts optional `defaultProjectId` and `defaultRegion` constructor fields.
- `GcpClient` exposes `defaultProjectId: string | null` and `defaultRegion: string | null` getters.
- `defaultSdk` reads `GCP_PROJECT_ID` and `GCP_REGION` env vars via a new internal `loadGcpDefaults()` helper.

## 3.0.0 — 2026-04-22

### BREAKING

- Requires `@narai/connector-toolkit@^3.0.0-rc.1`. See toolkit 3.0 changelog for `Decision`, `ExtendedEnvelope`, and `HardshipEntry` breaking changes (most do not affect this connector; documented for downstream awareness).

### Added

- `scope(ctx)` callback added (global-only pending project/region lookup). Hardships and patterns.yaml live in the global tier. TODO: ideal key is `${projectId}/${region}` — once `GcpClient` stores a default project (e.g. from `gcloud config get-value project`) and region, switch to `scope: (ctx) => \`${ctx.sdk.projectId}/${ctx.sdk.region}\``. (See toolkit design doc at `connector-toolkit/docs/plans/2026-04-22-self-improvement-loop-design.md`.)
