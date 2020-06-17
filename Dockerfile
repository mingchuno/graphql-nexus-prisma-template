# Install production depns stage
FROM node:12.16 as installer

WORKDIR /svc
ENV NOYARNPOSTINSTALL=1

# Installing production dependencies
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile

# Build stage
FROM installer as builder

RUN yarn install --frozen-lockfile

# Copying source files
COPY . .

RUN yarn build

# Run stage
FROM installer

# Copy static files from builder stage to be service by node server
COPY --from=builder /svc/dist dist
COPY --from=builder /svc/node_modules/.prisma/client/ node_modules/.prisma/client/

ENV NODE_ENV=production

CMD [ "yarn", "start" ]