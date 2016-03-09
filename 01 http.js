/**
 * Created by Administrator on 2016/3/1 0001.
 */
var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('<head><meta charset="utf-8" /></head>');
    res.write('你好\n,helloworld');
}).listen(8080,"192.168.89.122");