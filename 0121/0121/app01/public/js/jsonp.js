function jsonp(props) {
    //点击发送，第一步就是去创建一个script标签
    //动态的创建script标签
    var mysrc = document.createElement("script");
    //props里面的这个success这个函数不是全局的
    //myjsonp就变成了window下的一个全局的属性
    //props.success 是一个局部的函数
    //window.myjsonp 将这个匿名的局部的函数变成全局的函数
    //当有多次非同源的请求的时候，将window的这个全局的属性的命名变成一个随机的
    // 待遇等于0但是小于1的一个小数  0.123456789   myjsonp0123456789
    var fn = "myjsonp" + Math.random().toString().replace(".", "");
    //fn不再是固定的名称而是一个变量
    //window.fn = props.success;
    window[fn] = props.success;
    // http://localhost:9009/testapp3?callback=myjsonp1234569870&uname=zhangsan&uage=18
    //如果有参数的时候，需要将参数进行转换拼接
    var params = "";
    for (const key in props.data) {
        params += "&" + key + "=" + props.data[key];
    }
    mysrc.src = props.url + "?callback=" + fn + params;
    //console.log(fn);
    document.body.appendChild(mysrc);
    //加载完成之后，移除标签
    mysrc.onload = function() {
        document.body.removeChild(mysrc);
    }
}