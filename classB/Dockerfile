FROM node:18-alpine

 

# Set the working directory in the container
WORKDIR /classA

 

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

 

# Install application dependencies
RUN npm install

 

# Copy the rest of the application code to the container
COPY . .

 

# Set environment variables (example)
ENV NODE_ENV=production
ENV PORT=3021
ENV HOST_BIKES=http://localhost:3031/bikes
ENV HOST_FOOD=http://localhost:3034/foods
ENV HOST_TOYS=http://localhost:3036/toys

 

 

# Expose the port that your Express app is listening on
EXPOSE 3021

 

# Define the command to run your Express app
CMD ["node", "./src/server.js"]