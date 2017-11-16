/**
 * controller 模块的入口文件
 * 在此,可以将变量映射到处理文件,类似内部的路由
 * @type {{home: *, messages: *, comments: *}}
 */
module.exports = {
    news: require('./news/news'),
    login: require('./login/login'),
    search: require('./search/search'),
    members: require('./members/members'),
    mine: require('./mine/mine'),
    proposal: require('./proposal/proposal'),
    social: require('./social/social'),
    mien: require('./mien/mien'),
    study: require('./study/study'),
    video: require('./video/video')
}