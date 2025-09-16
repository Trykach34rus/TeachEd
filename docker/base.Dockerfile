# Общий базовый образ для всех сервисов
FROM python:3.12-slim

WORKDIR /app

# Установка системных пакетов, нужных всем сервисам
RUN apt-get update && apt-get install -y \
    gcc \
    libpq-dev \
    ffmpeg \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Установка pip-tools для сборки зависимостей
RUN pip install --no-cache-dir pip-tools

# Можно скопировать общий requirements.common.in
COPY requirements.common.in /app/

# Собираем общий requirements.txt для всех сервисов (необязательно, можно отдельно для каждого)
# RUN pip-compile requirements.common.in && pip install --no-cache-dir -r requirements.txt

# Базовый образ готов
