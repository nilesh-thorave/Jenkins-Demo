#Define image we want to build from
FROM nodejs:6.0

#Setup the directory structure for our app
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#we need to make sure rest of our dependencies are installed ( express, etc)
COPY package.json /usr/src/app/
RUN npm install

#Copy all our app source code sitting locally inside the docker image
COPY . /usr/src/app

#What port we want to expost
EXPOSE 8080

#Next we need to start our server so we can reach it (i.e. server.js)
CMD ["npm", "start"]