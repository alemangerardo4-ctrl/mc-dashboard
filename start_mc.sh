#!/usr/bin/env bash
set -euo pipefail

PORT="${PORT:-3000}"
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "🔧 Public Works — Mission Control"
echo "=================================="
echo "Port: $PORT"
echo ""

# Install deps if needed
if [ ! -d "$DIR/node_modules" ]; then
  echo "📦 Installing dependencies..."
  cd "$DIR" && npm install
fi

# Start dev server in background
echo "🚀 Starting MC dashboard..."
cd "$DIR" && npm run dev &
DEV_PID=$!

# Wait for port to open
echo "⏳ Waiting for server..."
for i in {1..30}; do
  if lsof -iTCP:"$PORT" -sTCP:LISTEN -P >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

URL="http://localhost:$PORT"
echo ""
echo "✅ Mission Control is live at: $URL"
echo ""
open "$URL"

echo "PID: $DEV_PID  |  Stop with: kill $DEV_PID"
wait $DEV_PID
