FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

WORKDIR /app/frontend
RUN npm install && npm run build

WORKDIR /app
ENV NODE_ENV=production
ENV PORT=8080
EXPOSE 8080
CMD ["npm", "start"]




