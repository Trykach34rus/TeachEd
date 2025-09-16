# Наследуемся от базового образа
FROM project-root/docker/base:latest

WORKDIR /app

COPY backend/ /app/

RUN pip-compile requirements.in && pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
