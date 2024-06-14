FROM node:20-alpine as builder
WORKDIR /app
ENV VITE_API_URL='https://api.stage.farmix.io'
ENV VITE_TON_TESTNET_URL='https://testnet.toncenter.com/api/v2/jsonRPC'
ENV VITE_TON_TESTNET_API_KEY='7a71641642649c247073a132e826599f6bb6c06f8af3f30a55bad147a519847d'

COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.25-alpine
WORKDIR /app
COPY --from=builder /app/dist /app
COPY --from=builder /app/nginx.conf /etc/nginx/nginx.conf
