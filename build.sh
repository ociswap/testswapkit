#!/usr/bin/env bash
set -o errexit nounset pipefail verbose

# If the branch being build contains "stag" then build in Vite staging mode
if [[ $CF_PAGES_BRANCH = *stag* ]]; then
    NODE_OPTIONS=--max-old-space-size=8192 vite build --mode staging
else
    NODE_OPTIONS=--max-old-space-size=8192 vite build --mode production
fi