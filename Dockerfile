FROM node:10-alpine

RUN npm install -g ember-cli

RUN \
  echo http://dl-3.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories  && \
  apk add chromium

WORKDIR /myapp

COPY . /myapp/

RUN yarn

CMD ["ember", "test"]
