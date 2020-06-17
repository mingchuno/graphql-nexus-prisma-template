# graphql-nexus-prisma-starter

## Get started

### Prerequisite

* `node` >= 12
* `yarn`
* `docker` and `docker-compose`

### Development

```
yarn install
# start database
docker-compose up -d
# migrate schema
yarn migrate:up
# seed the database
yarn seed
# start development server
yarn dev
# production build
yarn build
```

## Update schema

1. Make change to `prisma/schema.prisma`
2. Run `yarn migrate:save && yarn migrate:up`
3. Run `yarn generate` to generate client

## Docker support

```bash
# build docker image
docker build -t graphql-nexus-prisma-starter .
# run in local with config mount as volume
docker run -it --rm -p "127.0.0.1:4000:4000" \
graphql-nexus-prisma-starter
# test the server
curl -vL http://localhost:3000/
```
