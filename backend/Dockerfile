FROM teached-base:latest

WORKDIR /app

COPY . /app/

RUN pip-compile requirements.in && \ 
    pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

RUN chmod +x /app/entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

WORKDIR /app/core

CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8000"]
