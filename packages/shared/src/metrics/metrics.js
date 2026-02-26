import fs from "node:fs";
import path from "node:path";

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

export function writeRunMetrics({ framework, startedAt, endedAt, extra = {} }) {
  const durationMs = endedAt - startedAt;
  const outDir = path.resolve(process.cwd(), "reports", "metrics");
  ensureDir(outDir);

  const payload = {
    framework,
    startedAt: new Date(startedAt).toISOString(),
    endedAt: new Date(endedAt).toISOString(),
    durationMs,
    ...extra
  };

  const outFile = path.join(outDir, `${framework}.json`);
  fs.writeFileSync(outFile, JSON.stringify(payload, null, 2) + "\n", "utf8");
  return outFile;
}
