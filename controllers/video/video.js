var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        console.log("视频")
        var data = {startid:-1,article_kind:4};
        createRequest(res, data, "/ZxApi/m2_21.ashx", function () {
            body = JSON.parse(body);
            var article_list=body.article_list
            console.log(body)
            res.render('video/video',
                {
                    title: '视频点播',
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
            res.render('video/video-detail',
                {
                    title: '视频点播',
                    article:body
                }
            );
        });
    }
}


