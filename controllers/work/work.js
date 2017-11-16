var createRequest = require("../../config/settings");

module.exports = {
    info: function (req, res) {
        createRequest(res, "", "/ZxApi/m3_01.ashx", function () {
            body = JSON.parse(body);
            res.render('work/work-info',
                {
                    title: '政协简介',
                    type: 1,
                    result: body
                }
            );
        });
    },
    order: function (req, res) {
        createRequest(res, "", "/ZxApi/m3_01.ashx", function () {
            body = JSON.parse(body);
            res.render('work/work-info',
                {
                    title: '政协简介',
                    type: 1,
                    result: body
                }
            );
        });
    },
    files: function (req, res) {
        var data = {startid: -1};
        createRequest(res, data, "/ZxApi/m3_03.ashx", function () {
            body = JSON.parse(body);
            var list = body.article_list;
            res.render('work/work-files',
                {
                    title: '政协文件',
                    type: 1,
                    result: list
                }
            );
        });
    },
    fileDetail: function (req, res) {
        var data = {article_id: req.query.article_id};
        createRequest(res, data, "/ZxApi/m3_04.ashx", function () {
            body = JSON.parse(body);
            res.render('work/file-detail',
                {
                    title: '政协文件',
                    type: 1,
                    result: body
                }
            );
        });
    },
    notices: function (req, res) {
        createRequest(res, '', "/ZxApi/m3_11.ashx", function () {
            body = JSON.parse(body);
            var list = body.article_list;
            res.render('work/work-notices',
                {
                    title: '通知',
                    type: 1,
                    result: list
                }
            );
        });
    },
    noticeDetail: function (req, res) {
        var data = {article_id: req.query.article_id};
        createRequest(res, data, "/ZxApi/m3_12.ashx", function () {
            body = JSON.parse(body);
            res.render('work/notice-detail',
                {
                    title: '通知',
                    type: 1,
                    result: body
                }
            );
        });
    },
}