FROM node:16-alpine

WORKDIR /nostra

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD npm run dev