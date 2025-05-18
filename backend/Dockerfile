# backend/Dockerfile

FROM python:3.10

WORKDIR /app

COPY requirements.txt .        # Only copy requirements first
RUN pip install -r requirements.txt

COPY . .                       # Then copy everything else

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
