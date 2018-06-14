FROM node:10.2.1-alpine

# create app directory
RUN mkdir -p /usr/src/api
WORKDIR /usr/src/api

# install app dependencies
COPY package.json /usr/src/api 
RUN cd /usr/src/api 
RUN npm install 
RUN node --version 

# bundle app source
COPY data /usr/src/api/data
COPY . /usr/src/api

EXPOSE 3003 
CMD ["npm", "start"]