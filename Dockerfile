FROM registry.cn-beijing.aliyuncs.com/happy_zhangbo/node-website
# Create app directory\
WORKDIR /opt
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]