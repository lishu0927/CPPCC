var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var keyword = req.query.keyword||'';
        var data = {};
        createRequest(res,data,"/ZxApi/m2_01.ashx",function () {
            body = JSON.parse(body);
            console.log(body)
            var group_list=body.group_list
            console.log(group_list)
            res.render('members/members-md',
                {
                    title: '委员名单',
                    rightText: '编 辑',
                    keyword:keyword,
                    group_list: group_list
                }
            );
        });
    },
    search: function (req, res) {
        var keyword = req.query.keyword||'';
        var data = {keyword: keyword};
        createRequest(res,data,"/ZxApi/m2_02.ashx",function () {
            body = JSON.parse(body);
            console.log(keyword);
            var group_list=body.group_list
            /* var tian_list=body.tian_list
            var article_list=body.article_list*/
            res.render('members/members-search',
                {
                    title: '查询结果',
                    group_list: group_list,
                    /* tian_list: tian_list,
                    article_list: article_list,*/
                    keyword:keyword,
                    rightText:'编辑'
                }
            );
        })
    }
}


