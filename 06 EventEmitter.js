/**
 * Created by Administrator on 2016/3/2 0002.
 */
/**
 * 事件处理event模块，定义了一个EventEmitter类。所有触发事件的对象是继承了EventEmitter类的子类的实例对象。
 * addListener(event,listener) 绑定事件
 * on(event,listener)绑定事件
 * onece（event,listener）执行一次
 * removeListener(event,listener)解除绑定
 * removeAllListener([event])解除所有绑定
 * setMaxListener(n) 设置事件最大处理的函数数量
 * listeners(event) 获取指定事件的所有处理函数
 * emit(event,[arg1],[arg2])  手工触发指定事件
 */

var http = require('http');
var server = http.createServer();
//为server服务器在接收到客户端时触发的request事件就绑定事件处理函数
server.on('request',function(req,res){
    if(req.url !=="/favicon.ico"){
        console.log(req.url);
    }
    res.end();
});
server.on('request',function(req,res){
    if(req.url !=="/favicon.ico"){
        console.log("发送相应完毕");
    }
    res.end();
});
server.listen(1333,"192.168.89.122")