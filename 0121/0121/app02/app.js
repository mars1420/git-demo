const express = require('express');
//创建web服务器
const app = express();
app.get("/testapp", (req, res) => {
    //res.send("testapp");
    //script src来访问的，需要返回的是一个能正常运行的js的代码
    //fn({name:'张三',uage:18}) 返回的是一个函数的调用
    //因为在app.js里面是没有声明fn这个函数的
    //{name:'张三',uage:18} 就是服务器端从数据库取出来的。或者是已经处理好的数据
    //如果当前的数据是一个对象，就需要将当前对象转换为字符串
    let data = { name: '张三', uage: 18 };
    data = JSON.stringify(data);
    //返回的是一个字符串
    data = "fn(" + data + ")";
    res.send(data);

});
app.get("/testapp2", (req, res) => {
    //req.query 接收是所有的参数对象
    //req.params:  /testapp2/:id/:name
    // ?callback=fn  myjsonp
    // fname====fn  myjsonp
    const fname = req.query.callback;
    let data = { name: '张三', uage: 18 };
    data = JSON.stringify(data);
    //  fn({ name: '张三', uage: 18 })
    // myjsonp({ name: '张三', uage: 18 })
    data = fname + "(" + data + ")";
    res.send(data);
});
app.get("/testapp3", (req, res) => {
    //req.query 接收是所有的参数对象
    //req.params:  /testapp2/:id/:name
    // ?callback=fn  myjsonp
    // fname====fn  myjsonp
    // const fname = req.query.callback;
    // let data = { name: '张三', uage: 18 };
    // data = JSON.stringify(data);
    // //  fn({ name: '张三', uage: 18 })
    // // myjsonp({ name: '张三', uage: 18 })
    // data = fname + "(" + data + ")";
    // setTimeout(() => {
    //     res.send(data);
    // }, 1000);
    //res.jsonp底层的实现的原理就是将callback传递的函数当做字符进行封装了拼接并返回了
    console.log(req.query);
    res.jsonp({ name: '张三', uage: 18 });
});
app.listen(9009);
console.log('localhost:9009');