FROM node:20-alpine as builder
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
