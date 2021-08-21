FROM node:current

WORKDIR /code

COPY package.json /code/package.json

RUN npm install

COPY . /code

RUN npm run dev