import { getBoolEnv, getEnv } from "../config/env.js";

export const testrailConfig = {
  enabled: getBoolEnv("TESTRAIL_ENABLED", false),
  url: getEnv("TESTRAIL_URL", ""),
  user: getEnv("TESTRAIL_USER", ""),
  apiKey: getEnv("TESTRAIL_API_KEY", ""),
  projectId: Number(getEnv("TESTRAIL_PROJECT_ID", "0")),
  runId: Number(getEnv("TESTRAIL_RUN_ID", "0"))
};

export function isTestrailReady() {
  const c = testrailConfig;
  return (
    c.enabled &&
    Boolean(c.url) &&
    Boolean(c.user) &&
    Boolean(c.apiKey) &&
    Number.isFinite(c.runId) &&
    c.runId > 0
  );
}
