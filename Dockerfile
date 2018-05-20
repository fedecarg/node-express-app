FROM node:9

RUN mkdir -p /usr/app
WORKDIR /usr/app
RUN cd /usr/app
ADD . .
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]