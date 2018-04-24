# use the latest node LTS release
FROM node:carbon
#WORKDIR /usr/src/app

# copy package.json and package-lock.json and install packages. we do this
# separate from the application code to better use docker's caching
# `npm install` will be cached on future builds if only the app code changed
COPY package*.json /usr/src/app
RUN npm install
RUN npm update

# copy the app
COPY app.js /usr/src/app
COPY lib /usr/src/app/lib

# expose port 3000 and start the app
EXPOSE 3000
#CMD [ "npm", "start" ]
CMD [ "node", "app.js" ]

