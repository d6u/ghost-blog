FROM nodesource/vivid:4.4.0

RUN mkdir /app
WORKDIR /app
ADD package.json /app/
RUN npm install
ADD config /app/config
ADD content /app/content
ADD config.js /app/
ADD index.js /app/

CMD ["node", "index.js"]
