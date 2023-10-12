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
ENV PORT=3022
ENV HOST_BOOKS=http://bookService:3032/books
ENV HOST_DVD=http://dvdService:3035/dvds
ENV HOST_LAPTOPS=http://laptopService:3036/laptops

# Expose the port your Express.js application will run on (change as needed)
EXPOSE 3022

# Start your Express.js application
CMD ["node", "./src/server.js"]