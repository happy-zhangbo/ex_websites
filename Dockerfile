FROM registry.cn-beijing.aliyuncs.com/happy_zhangbo/node-website:0.0.1
# Create app directory\
WORKDIR /opt
COPY . .
RUN npm install
EXPOSE 3000

CMD [ "node", "bin/www" ]