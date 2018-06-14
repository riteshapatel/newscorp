#### React Book Store - A mom-pop book store

*Author: Ritesh Patel*

*Date: 06/14/2018*

---

**Description**

React Book Store is a simple application built with React / Redux. Data used in the app is static in nature. Core idea with this application is to display "also viewed" items for any given book.

**Dependencies**

Nothing fancy. React and Redux with BootStrap. 


**Front End**

Run npm start to fire up the app in development.

```
npm start
```

Access app via browser on port 3000.

```
http://localhost:3000
```

**Docker image (app)**

If you wish to create a docker container for the app, then run the ```Dockerfile``` under the root directory. I am using node-apline as a base image.

```
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
```

**Docker image (api)**

And here is the docker image for the api.

```
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
```

**Docker Compose (production deployment)**

Above mentioned docker files are good for running individual containers. Use the docker compose file below for production deployment.

```
version: '3'

services:
  newscorp:
    build: ./newscorp
    volumes:
      - ./newscorp:/usr/src/app
    ports:
      - "3000:3000"
  api:
    build: ./newscorp/api 
    volumes:
      - ./newscorp/api:/usr/src/app
    ports:
      - "3003:3003"
```

Voila! React Book Store is dockerized!

```
# run the command below to start the app
docker-compose up
```

```
# app location
http://localhost:3000/
```

**Static Data**

Data resides under api/data directory. 

**Bugs / Issues**

Gimme a holler if you find one :) All ears!

Fork & Enjoy!

Cheers :)


