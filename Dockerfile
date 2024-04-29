FROM node:20.2.0-alpine

ARG USER_ID
ARG GROUP_ID

ARG CHOKIDAR_USEPOLLING=true

RUN apk update && apk add --no-cache bash git

RUN mkdir /app
WORKDIR /app

COPY package.json ./
COPY pnpm-lock.yaml ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm i -g pnpm
RUN pnpm i

COPY . .

EXPOSE 9000

CMD pnpm dev
