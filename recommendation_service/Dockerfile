FROM python:3.6-jessie

RUN mkdir -p /src
COPY ./recommendation_service/requirements.txt /src

WORKDIR /src
RUN pip3 install -r requirements.txt

EXPOSE 5003

WORKDIR /src/app
CMD gunicorn -w 4 -k gevent -b 0.0.0.0:5003 app:app
