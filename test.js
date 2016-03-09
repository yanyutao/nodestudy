/**
 * Created by Administrator on 2016/3/2 0002.
 */
var testVar = "This is a variable from testModule.js";
var outPutTest = function outputTestVar(){
    console.log(testVar)
}
exports.testVar = testVar;
exports.output = outPutTest;

