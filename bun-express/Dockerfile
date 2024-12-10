# Use the official Bun image as the base
FROM oven/bun:1 as builder

# Set the working directory in the container
WORKDIR /app

# Copy the package files and Bun lockfile
COPY bun.lockb package.json tsconfig.json ./

# Install dependencies using Bun
RUN bun install --frozen-lockfile

# Copy the rest of the application source code
COPY src src

# run the app
USER bun
EXPOSE 3000
ENTRYPOINT [ "bun", "start" ]