FROM node:lts-alpine3.16 as build

USER node
WORKDIR /home/node

COPY package*.json ./
COPY --chown=node:node . .

RUN npm ci --only=production

FROM node:lts-alpine3.16 as cli

WORKDIR /home/node

COPY --from=build /home/node/node_modules ./node_modules
COPY --from=build /home/node/package.json ./package.json
COPY --from=build /home/node/cli.js ./cli.js
COPY --from=build /home/node/bin.js ./bin.js

ENTRYPOINT [ "node", "bin.js" ]