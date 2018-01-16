#Define image we want to build from
FROM node:latest

#Setup the directory structure for our app
RUN mkdir -p /app
WORKDIR /usr/src/app

#we need to make sure rest of our dependencies are installed ( express, etc)
COPY package.json /app
RUN npm install

#Copy all our app source code sitting locally inside the docker image
COPY . /app

#What port we want to expost
EXPOSE 3000

#Next we need to start our server so we can reach it (i.e. server.js)
CMD ["npm", "start"]
