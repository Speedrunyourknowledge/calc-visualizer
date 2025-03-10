FROM node:23

WORKDIR /app

COPY package*.json .

RUN npm ci --production

# layer 2
COPY requirements.txt .

RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-pip \
    python3-venv

RUN python3 -m venv .venv

RUN .venv/bin/python -m pip install --no-cache-dir -r requirements.txt

# layer 3
COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npm run build

# runs when container is started
ENTRYPOINT ["npm", "start"]
