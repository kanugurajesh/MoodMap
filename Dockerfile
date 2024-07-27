# Use Node.js 14 as the base image
FROM node:20

EXPOSE 3000

# Set the working directory to the root of your Next.js app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

RUN npx prisma generate

# Build the Next.js application
RUN npm run build

# Set the command to run the application
CMD ["npm", "start", "--", "0.0.0.0"]