FROM alibaba-cloud-linux-3-registry.cn-hangzhou.cr.aliyuncs.com/alinux3/node:16.17.1-nslt
# Create app directory
WORKDIR /home
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]