FROM node:23

WORKDIR /app

# install python to the machine
RUN apt-get update && apt-get install -y --no-install-recommends \
    python3-pip \
    python3-venv \

    && python3 -m venv .venv

# layer 2 - python libraries
COPY requirements.txt .

RUN .venv/bin/python -m pip install --no-cache-dir -r requirements.txt

# layer 3 - node packages
COPY package*.json .

RUN npm ci

# layer 4 - entire app
COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npm run build \

    && npm prune --production

# runs when container is started
ENTRYPOINT ["npm", "start"]
