var createRequest = require("../../config/settings");

module.exports = {
    search: function (req, res) {
        var keyword = req.query.keyword||'';
        var data = {keyword: keyword};
        createRequest(res,data,"/ZxApi/m1_04.ashx",function () {
            body = JSON.parse(body);
            var group_list=body.group_list
            var tian_list=body.tian_list
            var article_list=body.article_list
            res.render('search/search',
                {
                    title: '查询结果',
                    group_list: group_list,
                    tian_list: tian_list,
                    article_list: article_list,
                    keyword:keyword
                }
            );
        })
    }
}