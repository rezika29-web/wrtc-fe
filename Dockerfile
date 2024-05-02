FROM node:18.17.0-alpine as builder
ARG API_URL
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build
FROM derit/static-srv
COPY --from=builder /app/out /app
CMD ["app","-a",":3000", "-d", "/app"]

