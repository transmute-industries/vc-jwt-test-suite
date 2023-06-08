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

COPY --from=build /home/node/api/credential.js ./api/credential.js
COPY --from=build /home/node/api/presentation.js ./api/presentation.js
COPY --from=build /home/node/api/controller.js ./api/controller.js

COPY --from=build /home/node/commands/controller.js ./commands/controller.js
COPY --from=build /home/node/commands/credential.js ./commands/credential.js
COPY --from=build /home/node/commands/presentation.js ./commands/presentation.js

COPY --from=build /home/node/bin.js ./bin.js

ENTRYPOINT [ "node", "bin.js" ]