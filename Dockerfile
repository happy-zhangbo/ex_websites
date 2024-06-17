FROM anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/node:16.17.1-nslt-8.6
# Create app directory\
RUN sudo mkdir -p /opt/website
RUN sudo chmod -R 777 /opt/website
WORKDIR /opt/website
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]