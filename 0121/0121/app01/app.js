const express = require('express');
//创建web服务器
const app = express();
const path = require('path');
//配置静态资源
app.use(express.static(path.join(__dirname, "public")));
app.listen(9000);
console.log('localhost:9000');