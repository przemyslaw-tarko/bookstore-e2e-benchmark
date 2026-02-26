export function getEnv(name, fallback = undefined) {
  const value = process.env[name] ?? fallback;
  return value;
}

export function getBoolEnv(name, fallback = false) {
  const raw = process.env[name];
  if (raw == null) return fallback;
  return ["1", "true", "yes", "y", "on"].includes(String(raw).toLowerCase());
}
