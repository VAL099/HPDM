# Stage 1: Build
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build the application
RUN npm run build

# Stage 2: Production
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy built application and Prisma Client from the build stage
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules/.prisma ./node_modules/.prisma
COPY --from=builder /app/prisma ./prisma

ENV DATABASE_URL="postgresql://postgres:postgres@host.docker.internal:5432/hpdm_db?schema=public"

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
# CMD ["node", "dist/main"]
CMD [ "sh", "-c", "npx prisma migrate deploy && node dist/main"]

# docker build -t hpdm_app .
