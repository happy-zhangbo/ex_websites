FROM node
# Create app directory
WORKDIR ./
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]