FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 81

CMD ["npm", "run", "preview", "--", "--port", "81"]