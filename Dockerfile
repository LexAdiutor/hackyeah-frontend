FROM node:18

WORKDIR /app

ENV VITE_API_BACKEND_URL https://lexadiutor.pl:3000

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

EXPOSE 81

CMD ["npm", "run", "preview", "--", "--port", "81", "--host"]