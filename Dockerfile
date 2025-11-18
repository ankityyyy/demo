# 1️⃣ Builder Stage
FROM node:20-alpine AS builder

WORKDIR /build

COPY package*.json ./
RUN npm ci

COPY . .

# 2️⃣ Runner Stage
FROM node:20-alpine AS runner

WORKDIR /app

# install curl for healthcheck
RUN apk add --no-cache curl

HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:5000/docker || exit 1

COPY --from=builder /build ./

EXPOSE 5000
CMD ["node", "server.js"]
