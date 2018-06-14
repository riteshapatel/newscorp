FROM node:10.2.1-alpine

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app
RUN cd /usr/src/app
RUN npm install 
RUN node --version 

RUN npm install -g serve

# bundle app source
COPY build/ /usr/src/app/build

EXPOSE 3000

CMD ["serve", "-s", "build"]