export function uniqueId(prefix = "e2e") {
  const ts = Date.now();
  const rnd = Math.random().toString(16).slice(2, 10);
  return `${prefix}-${ts}-${rnd}`;
}

export function uniqueEmail(domain = "example.test") {
  return `${uniqueId("user")}@${domain}`;
}

export function uniqueUsername() {
  return uniqueId("user");
}
