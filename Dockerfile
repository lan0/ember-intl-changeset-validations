FROM node:10-alpine

RUN npm install -g ember-cli

RUN \
  echo http://dl-3.alpinelinux.org/alpine/edge/main >> /etc/apk/repositories  && \
  apk add chromium

# Testem looks for google-chrome
RUN ln -s /usr/bin/chromium-browser /usr/bin/google-chrome

WORKDIR /myapp

COPY . /myapp/

RUN yarn

CMD ["ember", "test"]
