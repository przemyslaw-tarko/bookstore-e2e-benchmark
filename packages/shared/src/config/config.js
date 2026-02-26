import { getEnv } from "./env.js";

export const config = {
  baseUrl: getEnv("BASE_URL", "http://localhost:8080"),
  timeouts: {
    defaultMs: Number(getEnv("E2E_TIMEOUT_MS", "30000")),
    navigationMs: Number(getEnv("E2E_NAV_TIMEOUT_MS", "30000"))
  },
  retries: {
    // Frameworki mają swoje retry, to jest wspólna “intencja” do dokumentacji/ujednolicenia
    default: Number(getEnv("E2E_RETRIES", "1"))
  }
};
