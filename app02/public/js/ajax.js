function ajax(objAjax) {
    //定义一个默认的对象
    let defaults = {
        type: 'get',
        url: "",
        data: {},
        header: {
            "content-type": "application/x-www-form-urlencoded" // application/json
        },
        success: function() {}, //成功的回调函数
        error: function() {} //请求失败的时候的回调函数
    };
    //将实参里面的有的内容赋值给defaults这个对象
    //objAjax中的属性值来覆盖defaults对象中属性值
    Object.assign(defaults, objAjax);
    //1.创建一个对象
    let xhr = new XMLHttpRequest();
    //请求的参数  uname=zhangsan&uage=18
    //2.将参数进行拼接     data: {},
    //  data:{  uname: zhangsan ,uage :18}  
    //  uname=zhangsan&uage=18
    let params = "";
    for (const key in defaults.data) {
        //参数拼接   key就是uname 对象属性名  
        params += key + "=" + defaults.data[key] + "&";
    }
    // uname=zhangsan&uage=18&
    //console.log(params);
    params = params.substring(0, params.length - 1);
    //console.log(params);
    if (defaults.type == "get") {
        xhr.open(defaults.type, defaults.url + "?" + params);
        xhr.send();
    } else {
        xhr.open(defaults.type, defaults.url);
        //设定头部  content-type
        let contenttype = defaults.header['content-type'];
        xhr.setRequestHeader('content-type', contenttype);
        if (contenttype == "application/x-www-form-urlencoded")
        //uname=zhangsan&uage=18
            xhr.send(params);
        else {
            //json   将对象转换为json的字符串
            xhr.send(JSON.stringify(defaults.data));
        }
    }

    xhr.onload = function() {
        //响应完成之后，去调用实参里面的回调函数,将执行的结果当做参数传递回去
        //响应的数据如果是一个对象字符串，需要将对象字符串转换为对象
        if (xhr.status == 200)
            objAjax.success(xhr.responseText);
        else
            objAjax.error('当前数据请求失败');
    }
}