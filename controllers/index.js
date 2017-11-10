/**
 * controller 模块的入口文件
 * 在此,可以将变量映射到处理文件,类似内部的路由
 * @type {{home: *, messages: *, comments: *}}
 */
module.exports = {
    news: require('./news/news'),
    login: require('./login/login')
}