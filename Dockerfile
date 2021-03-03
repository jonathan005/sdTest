From python:3.7
ENV PYTHONUNBUFFERED 1
RUN mkdir /app
ADD requirements.txt /app/
RUN pip install -r /app/requirements.txt
RUN mkdir /company
WORKDIR /company