FROM node:4.4.6-wheezy

ADD . .

RUN npm install

EXPOSE 4007

CMD ["node", "app.js"]