FROM teached-base:latest

WORKDIR /app

COPY . /app/

RUN pip-compile requirements.in && pip install --no-cache-dir -r requirements.txt

EXPOSE 8080

CMD ["python", "main.py"]
