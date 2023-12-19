# Use Python 3.11 on Alpine Linux
FROM python:3.11-alpine

# Use python unbuffered logging
ENV PYTHONUNBUFFERED 1

# Install system requirements
RUN apk update \
  # Pythonv3 dev dependencies
  && apk add --virtual build-deps gcc git make linux-headers python3-dev \
  musl-dev libffi-dev g++ postgresql-libs postgresql-dev \
  # Upgrade pip
  && pip install --upgrade pip

# Set the workdir as /app
WORKDIR /app

# copy the requirements.txt
COPY requirements.txt /app/requirements.txt

# install python dependencies
RUN pip install -r requirements.txt

# copy the entire src for the application
COPY app.py /app/app.py

EXPOSE 5000

CMD [ "python3", "-m" , "flask", "run", "--host=0.0.0.0"]
