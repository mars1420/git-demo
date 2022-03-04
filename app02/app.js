const express = require('express');
const app = express();
const path = require('path');
app.get("/testapp", (req, res) => {
    let data = {
        name: '张三',
        uage: 18
    };
    data = JSON.stringify(data);
    data = "fn(" + data + ")";
    res.send(data);
});
app.get("/testapp2", (req, res) => {
    const fname = req.query.callback;
    let data = {
        name: '张三',
        uage: 18
    };
    data = JSON.stringify(data);
    data = fanme + "(" + data + ")";
    res.send(data);
})

app.listen('9009');
console.log('localhost://9009');