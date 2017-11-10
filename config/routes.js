/**
 * 映射文件
 * 将请求路由到controllers的对象和方法上
 */
var controlles = require('../controllers');

module.exports = function (app) {
    app.get('/news', controlles.news.init);
    app.get("/newsDetail", controlles.news.detail);
}


