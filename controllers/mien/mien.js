var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var data = {startid:-1,article_kind:2};
        createRequest(res, data, "/ZxApi/m2_21.ashx", function () {
            body = JSON.parse(body);
            var article_list=body.article_list
            console.log(body)
            res.render('mien/mien',
                {
                    title: '委员风采',
                    article_list:article_list
                }
            );
        });
    },
    detail:function (req, res) {
        var article_id = req.query.id;
        var data = {article_id:article_id};
        createRequest(res, data, "/ZxApi/m2_22.ashx", function () {
            body = JSON.parse(body);
            console.log(body)
            res.render('mien/mien-detail',
                {
                    title: '委员风采',
                    article:body
                }
            );
        });
    }
}


