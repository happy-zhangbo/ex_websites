FROM node
# Create app directory
WORKDIR /home
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]