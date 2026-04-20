# @narai/gcp-agent-connector

Read-only GCP connector. Shells out to `gcloud` / `bq` under Application Default Credentials. Ships a JSON-envelope CLI and a library API. No doc-wiki coupling, no diagram decoration.

## Install

```bash
npm install @narai/gcp-agent-connector
```

You need the [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed so that `gcloud` and `bq` are on `PATH`. Authenticate with:

```bash
gcloud auth application-default login
```

Node 20+.

## CLI

```bash
npx gcp-agent-connector --action <name> --params '<json>'
```

### Supported actions

| Action | Required params |
|---|---|
| `list_services` | `project_id` |
| `describe_db` | `project_id`, `instance_id`, optional `database` |
| `list_topics` | `project_id` |
| `query_logs` | `project_id`, `filter`, optional `hours` (default 24, max 168), optional `max_results` (default 100, max 1000) |

Example:

```bash
gcp-agent-connector --action list_services --params '{"project_id":"acme-prod-123"}'
```

Output is a JSON envelope on stdout.

## Library

```ts
import { fetch, VALID_ACTIONS } from "@narai/gcp-agent-connector";
const result = await fetch("list_services", { project_id: "acme-prod-123" });
```

## What's not here

- No write operations.
- No wiki, documentation, or diagramming — output is a pure JSON envelope.
- The connector never invokes `gcloud config set` or anything that mutates local state.

## Claude Code plugin

A ready-to-install Claude Code plugin lives at [`plugin/`](./plugin). It adds a `gcp-agent` skill and a `/gcp-agent <action> <params-json>` slash command, wrapping this connector. The plugin is excluded from the npm tarball via `.npmignore`; Claude Code marketplaces point directly at the `plugin/` subdirectory of this repo.

## License

MIT
