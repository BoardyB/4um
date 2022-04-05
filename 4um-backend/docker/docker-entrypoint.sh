#!/bin/sh
set -e

if [ "$1" = '4um-backend' ]; then
    # custom configuration code that gets executed before java is spinned up
    echo "configuring 4um-backend"
fi

exec "$@"