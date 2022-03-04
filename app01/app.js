const express = require('express');
const app = express();
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')), () => {});


app.use('testapp', (req, res) => {
    const data = "fn({uname:'张三',uage:18})"
    res.send(data);
})


app.listen('9000');
console.log('localhost://9000');