/**
 * Created by Administrator on 2016/3/1 0001.
 */
function testFunction(msg){
    console.log(msg);
}
var timer = setTimeout(testFunction,5000,"this is a parameter")
timer.unref();//取消回调函数的调用
timer.ref();//调用会掉函数