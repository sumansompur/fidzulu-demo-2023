FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Define environment variables for the three URLs
ENV PORT=3021
ENV HOST_BIKES=http://bikeService:3031/bikes
ENV HOST_FOOD=http://foodService:3034/food
ENV HOST_TOYS=http://toyService:3033/toys

# Expose the port your Express.js application will run on (change as needed)
EXPOSE 3021

# Start your Express.js application
CMD ["node", "./src/server.js"]