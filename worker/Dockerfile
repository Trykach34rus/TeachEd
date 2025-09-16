FROM teached-base:latest

WORKDIR /app

COPY . /app/

RUN pip-compile requirements.in && pip install --no-cache-dir -r requirements.txt

CMD ["celery", "-A", "core", "worker", "-l", "info"]
