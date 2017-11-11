var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var data = {startid: -1};
        createRequest(res,data,"/ZxApi/m1_02.ashx",function () {
            body = JSON.parse(body);
            var sliderList = body.bannerArticle_list;
            var articleList = body.article_list;
            res.render('news/news',
                {title: '政协要闻', type: 1, sliderList: sliderList, articleList: articleList}
            );
        });
    },
    detail: function (req, res) {
        var id = req.query.id;
        var data = {article_id: id};
        createRequest(res,data,"/ZxApi/m1_03.ashx",function () {
            body = JSON.parse(body);
            res.render('news/news-detail',
                {title: '政协要闻', result: body});
        });
    }
}


