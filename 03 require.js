/**
 * Created by Administrator on 2016/3/2 0002.
 */
var test = require('./test.js');
test.testVar = "你好";
test.output();
/**
 * require.resolve();用来查询完引用模块的绝对路径和文件名,并不会加载这个模块
 */
var testUrl = require.resolve('./test.js');
console.log(testUrl);

/**
 *require.cache;缓存中已经被加载缓存区
 */
console.log(require.cache);
