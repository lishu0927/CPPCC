var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        res.render('social/social',
            {
                title: '社情民意',
            }
        );
    },
    submit: function (req, res) {
        var tabIndex = req.query.tabIndex
        res.render('social/social-submit',
            {
                title: '信息提交',
                tabIndex: tabIndex
            }
        );
    },
    detail: function (req, res) {
        res.render('social/submit-detail',
            {
                title: '信息提交',
            }
        );
    },
    detail1:function (req, res) {
        var sqmy_id = req.query.id;
        var sqmy_kind = req.query.sqmy_kind;
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        createRequest(res, data, "/ZxApi/m2_26.ashx", function () {
            body = JSON.parse(body);
            var sqmy_info=body.sqmy_info
            res.render('social/submit-detail1',
                {
                    title: '社情民意',
                    sqmy_id:sqmy_id,
                    sqmy_info:sqmy_info
                }
            );
        });
    },
    detail2:function (req, res) {
        var sqmy_id = req.query.id;
        var sqmy_kind = req.query.sqmy_kind;
        var check = req.query.check||"";
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        createRequest(res, data, "/ZxApi/m2_26.ashx", function () {
            body = JSON.parse(body);
            var sqmy_info=body.sqmy_info
            res.render('social/submit-detail2',
                {
                    title: '社情民意',
                    sqmy_id:sqmy_id,
                    check:check,
                    sqmy_info:sqmy_info
                }
            );
        });
    },
    check: function (req, res) {
        var tabIndex = req.query.tabIndex
        res.render('social/social-check',
            {
                title: '信息审核',
                tabIndex: tabIndex
            }
        );
    },
    selected:function (req, res) {
        var data = {sqmy_list_kind:4};
        createRequest(res, data, "/ZxApi/m2_23.ashx", function () {
            body = JSON.parse(body);
            var sqmy_list=body.sqmy_list
            res.render('social/social-selected',
                {
                    title: '信息选登',
                    sqmy_list:sqmy_list
                }
            );
        });
    },
    selectedDetail:function (req, res) {
        var sqmy_id = req.query.id;
        var sqmy_kind = 3;
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        createRequest(res, data, "/ZxApi/m2_26.ashx", function () {
            body = JSON.parse(body);
            var sqmy_info=body.sqmy_info
            res.render('social/selected-detail',
                {
                    title: '信息选登',
                    sqmy_info:sqmy_info
                }
            );
        });
    },
    fine:function (req, res) {
        var data = {sqmy_list_kind:5};
        createRequest(res, data, "/ZxApi/m2_23.ashx", function () {
            body = JSON.parse(body);
            var sqmy_list=body.sqmy_list
            res.render('social/social-fine',
                {
                    title: '优秀信息',
                    sqmy_list:sqmy_list
                }
            );
        });
    },
    fineDetail:function (req, res) {
        var sqmy_id = req.query.id;
        var sqmy_kind = 3;
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        createRequest(res, data, "/ZxApi/m2_26.ashx", function () {
            body = JSON.parse(body);
            var sqmy_info=body.sqmy_info
            res.render('social/fine-detail',
                {
                    title: '优秀信息',
                    sqmy_info:sqmy_info
                }
            );
        });
    }
}


