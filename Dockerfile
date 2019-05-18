FROM node:8

WORKDIR /app
COPY . .
RUN npm install --production

EXPOSE 3001

CMD ["node", "server.js"]