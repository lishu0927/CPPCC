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
                    title: '政协领导',
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
    addWork: function (req, res) {
        res.render('work/add-work',
            {
                title: '添加',
            }
        );
    },
    detail: function (req, res) {
        var type = req.query.type;
        var data = {dailywork_id: req.query.id};
        createRequest(res, data, "/ZxApi/m3_06.ashx", function () {
            body = JSON.parse(body);
            var work=body.dailywork_detail_info
            var attach_list=work.dailyworkattach_list
            var user_list=work.dailyworkuser_list
            console.log(work)
            console.log(attach_list)
            console.log(user_list)
            res.render('work/work-detail',
                {
                    title: '详情',
                    type: type,
                    work: work,
                    attach_list: attach_list,
                    user_list: user_list
                }
            );
        });
    },
    todoWork: function (req, res) {
        var data = {dailywork_list_kind: 3};
        createRequest(res, data, "/ZxApi/m3_05.ashx", function () {
            body = JSON.parse(body);
            var dailywork_list=body.dailywork_list
            console.log(dailywork_list)
            res.render('work/todo-work',
                {
                    title: '待办流传',
                    dailywork_list: dailywork_list
                }
            );
        });
    },
    doneWork: function (req, res) {
        var data = {dailywork_list_kind: 4};
        createRequest(res, data, "/ZxApi/m3_05.ashx", function () {
            body = JSON.parse(body);
            var dailywork_list=body.dailywork_list
            console.log(dailywork_list)
            res.render('work/done-work',
                {
                    title: '已办流传',
                    dailywork_list: dailywork_list
                }
            );
        });
    },
}