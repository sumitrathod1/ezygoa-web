# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source
COPY . .

# NEXT_PUBLIC_* values are baked into the bundle during `npm run build`, so they
# must exist at build time. The host passes them as build args; without these
# ARG lines Docker ignores them and the bundle is built with empty values.
ARG NEXT_PUBLIC_ADS_LABEL_FORM
ARG NEXT_PUBLIC_ADS_LABEL_WHATSAPP
ARG NEXT_PUBLIC_ADS_LABEL_CALL
ENV NEXT_PUBLIC_ADS_LABEL_FORM=$NEXT_PUBLIC_ADS_LABEL_FORM \
    NEXT_PUBLIC_ADS_LABEL_WHATSAPP=$NEXT_PUBLIC_ADS_LABEL_WHATSAPP \
    NEXT_PUBLIC_ADS_LABEL_CALL=$NEXT_PUBLIC_ADS_LABEL_CALL

# Build the application
RUN npm run build

# Stage 2: Run
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built files
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]
