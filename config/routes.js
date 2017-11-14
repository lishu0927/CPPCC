/**
 * 映射文件
 * 将请求路由到controllers的对象和方法上
 */
var controlles = require('../controllers');

module.exports = function (app) {
    app.get('/news', controlles.news.init);
    app.get("/newsDetail", controlles.news.detail);
    app.get("/search", controlles.search.search);
    app.get("/membersMd", controlles.members.init);
    app.get("/membersSearch", controlles.members.search);
    app.get("/membersDetail", controlles.members.detail);
    app.get("/membersEdit", controlles.members.edit);
    app.get("/editGroup", controlles.members.editGroup);
    app.get("/editMember", controlles.members.editMember);
    app.get("/mine", controlles.mine.init);
}


