/**
 * @narai/gcp-agent-connector — read-only GCP connector.
 *
 * Public API:
 *   - `fetch(action, params)` — run an action, get a JSON envelope.
 *   - `VALID_ACTIONS` — the set of supported action names.
 *   - `GcpClient` — lower-level client backed by `gcloud` / `bq`.
 */
export {
  fetch,
  main,
  VALID_ACTIONS,
  type FetchResult,
  type FetchOptions,
} from "./cli.js";

export {
  GcpClient,
  detectGcloudAvailable,
  type GcpClientOptions,
  type GcpResult,
} from "./lib/gcp_client.js";
