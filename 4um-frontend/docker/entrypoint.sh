#!/bin/bash
set -xe
: "${API_URL?Need an environment variable called API_URL}"

sed -i "s|__API_URL_REPLACE__|${API_URL}|g" /usr/share/nginx/html/main*.js

exec "$@"
