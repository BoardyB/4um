#!/bin/bash
set -xe
: "${API_URL?Need an environment variable called API_URL}"

: "${EMBEDDED_REPORTS_URL?Need an environment variable called EMBEDDED_REPORTS_URL}"

sed -i "s|__API_URL_REPLACE__|${API_URL}|g" /usr/share/nginx/html/main*.js

sed -i "s|__EMBEDDED_REPORTS_URL_REPLACE__|${EMBEDDED_REPORTS_URL}|g" /usr/share/nginx/html/main*.js

exec "$@"
