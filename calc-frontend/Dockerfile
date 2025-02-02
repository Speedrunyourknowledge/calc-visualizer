FROM node:23

WORKDIR /app

COPY package*.json .

RUN npm install

# layer 2
COPY . .

ENV PORT=5173
ENV HOST='0.0.0.0'

EXPOSE 5173

# runs when container is started
ENTRYPOINT ["npm", "run", "dev"]
