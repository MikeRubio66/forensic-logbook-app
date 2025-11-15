# React Native apps generally don't run in Docker, placeholder only
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm","start"]
