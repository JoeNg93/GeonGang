FROM node:8

RUN npm install -g nodemon

RUN mkdir -p /src
COPY ./back-end/package.json /src

WORKDIR /src
RUN npm install && npm cache clean --force

ENV PATH /src/node_modules/.bin:$PATH

EXPOSE 5001

WORKDIR /src/app
CMD nodemon index.js
