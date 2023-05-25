# run app in development
FROM node:20.2.0 AS development

WORKDIR /var/app

COPY --chown=deploy:deploy package*.json .
COPY yarn.lock .

RUN npm ci

COPY --chown=deploy:deploy . .

RUN npm run start:dev

# build app for production
FROM node:20.2.0 AS build

USER deploy

WORKDIR /var/app

COPY --chown=deploy:deploy package*.json .
COPY --chown=deploy:deploy --from=development /var/app/node_modules .
COPY --chown=deploy:deploy . .

RUN npm run build

ENV NODE_ENV production

RUN npm ci --only=production && npm cache clean --force

# run app in production
FROM node:20.2.0 AS production

COPY --chown=node:node --from=build /var/app/node_modules ./node_modules
COPY --chown=node:node --from=build /var/app/dist ./dist