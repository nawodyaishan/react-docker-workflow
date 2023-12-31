# Stage 1: Node.js build environment
# Use a specific version of node on Alpine Linux as the base image
FROM node:18-alpine3.17 as builder

# Set environment variables for PNPM's installation location and update PATH
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

# Enable Corepack to manage package managers like pnpm, yarn, etc.
RUN corepack enable

# Set the working directory in the container to /app
WORKDIR '/app'

# Copy package.json and pnpm-lock.yaml into the container's working directory
COPY package.json pnpm-lock.yaml ./

# Install project prod dependencies using pnpm
RUN pnpm install --prod

# Copy the rest of the application's code into the container
COPY . .

# Build the application - this command is for building the app and will be used if this image is run standalone
CMD ["pnpm","build"]

# Stage 2: NGINX to serve the built application
# Use the official NGINX image as a parent image
FROM nginx:alpine

# Copy built application from the 'builder' stage to NGINX host directory
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 on which NGINX listens
EXPOSE 80
