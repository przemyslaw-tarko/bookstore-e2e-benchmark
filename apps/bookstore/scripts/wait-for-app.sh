#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:8080}"
URL="${BASE_URL%/}/wp-login.php"
TIMEOUT_SECONDS="${TIMEOUT_SECONDS:-180}"

echo "Czekam na aplikację: $URL (timeout: ${TIMEOUT_SECONDS}s)"

start_ts=$(date +%s)

while true; do
  if curl -fsS "$URL" >/dev/null 2>&1; then
    echo "OK: aplikacja odpowiada."
    exit 0
  fi

  now_ts=$(date +%s)
  elapsed=$((now_ts - start_ts))
  if [ "$elapsed" -ge "$TIMEOUT_SECONDS" ]; then
    echo "BŁĄD: timeout po ${TIMEOUT_SECONDS}s. Aplikacja nie wstała."
    exit 1
  fi

  sleep 2
done
