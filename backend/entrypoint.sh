#!/bin/sh
set -e

echo "Выполняем миграции..."

python3 manage.py makemigrations --noinput
python3 manage.py migrate --noinput

echo "Запуск сервера..."
exec "$@"