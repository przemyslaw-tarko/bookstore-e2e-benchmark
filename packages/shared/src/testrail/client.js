import { testrailConfig, isTestrailReady } from "./testrailConfig.js";

function basicAuthHeader(user, apiKey) {
  const token = Buffer.from(`${user}:${apiKey}`).toString("base64");
  return `Basic ${token}`;
}

async function httpJson(method, url, body) {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: basicAuthHeader(testrailConfig.user, testrailConfig.apiKey)
    },
    body: body ? JSON.stringify(body) : undefined
  });

  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`TestRail HTTP ${res.status}: ${text}`);
  }
  return res.json();
}

export async function addResultForCase({ runId, caseId, statusId, comment }) {
  if (!isTestrailReady()) return { skipped: true };

  const base = testrailConfig.url.replace(/\/$/, "");
  const endpoint = `${base}/index.php?/api/v2/add_result_for_case/${runId}/${caseId}`;

  return httpJson("POST", endpoint, {
    status_id: statusId,
    comment: comment ?? ""
  });
}
