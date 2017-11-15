var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var data = {tian_list_kind:3};
        createRequest(res, data, "/ZxApi/m2_12.ashx", function () {
            body = JSON.parse(body);
            var tian_list=body.tian_list
            console.log(tian_list)
            res.render('proposals/proposal-down',
                {
                    title: '提案表下载',
                    tian_list:tian_list
                }
            );
        });
    },
    manage: function (req, res) {
        var data = {tian_list_kind:1};
        var keyword = req.query.keyword||'';
        createRequest(res, data, "/ZxApi/m2_12.ashx", function () {
            body = JSON.parse(body);
            var tian_list=body.tian_list
            console.log(tian_list)
            res.render('proposals/proposal-manage',
                {
                    title: '提案管理',
                    keyword:keyword,
                    tian_list:tian_list
                }
            );
        });
    },
    detail1:function (req, res) {
        var tian_id = req.query.id;
        var data = {tian_kind:1,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
            console.log(tian_detail_info)
            res.render('proposals/proposal-detail1',
                {
                    title: '提案提交',
                    tian:tian_detail_info
                }
            );
        });
    },
    detail2:function (req, res) {
        var tian_id = req.query.id;
        var data = {tian_kind:4,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
            console.log(tian_detail_info)
            res.render('proposals/proposal-detail2',
                {
                    title: '提案提交',
                    tian:tian_detail_info
                }
            );
        });
    }
}


