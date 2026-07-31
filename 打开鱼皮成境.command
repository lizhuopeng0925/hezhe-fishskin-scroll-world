#!/bin/zsh
set -euo pipefail

PROJECT_DIR="${0:A:h}"
PORT="4173"
URL="http://127.0.0.1:${PORT}/"
LABEL="com.codex.hezhe-fishskin.server"
DOMAIN="gui/$(id -u)"
PYTHON="$(command -v python3)"

mkdir -p "$PROJECT_DIR/output"

if ! curl --connect-timeout 1 --fail --silent "$URL" >/dev/null 2>&1; then
  if launchctl print "$DOMAIN/$LABEL" >/dev/null 2>&1; then
    launchctl remove "$LABEL"
  fi

  launchctl submit \
    -l "$LABEL" \
    -o "$PROJECT_DIR/output/server.stdout.log" \
    -e "$PROJECT_DIR/output/server.stderr.log" \
    -- "$PYTHON" -m http.server "$PORT" \
      --bind 127.0.0.1 \
      --directory "$PROJECT_DIR"

  for _ in 1 2 3 4 5; do
    curl --connect-timeout 1 --fail --silent "$URL" >/dev/null 2>&1 && break
    sleep 1
  done
fi

if ! curl --connect-timeout 2 --fail --silent "$URL" >/dev/null; then
  echo "网页服务启动失败，请查看：$PROJECT_DIR/output/server.stderr.log"
  read -r "?按回车键关闭…"
  exit 1
fi

open "$URL"
