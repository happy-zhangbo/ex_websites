FROM anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/node:16.17.1-nslt-8.6
# Create app directory
WORKDIR /home
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]