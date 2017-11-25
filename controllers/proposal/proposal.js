var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var data = {
            tian_list_kind:3,
            num:20,
            start:0,
            startid:-1
        };
        createRequest(res, data, "/ZxApi/m2_12.ashx", function () {
            body = JSON.parse(body);
            var tian_list=body.tian_list
            res.render('proposals/proposal-down',
                {
                    title: '提案表下载',
                    tian_list:tian_list
                }
            );
        });
    },
    manage: function (req, res) {
        var keyword = req.query.keyword||'';
        var tabIndex = req.query.tabIndex;
        var search_type = "proposal";
        res.render('proposals/proposal-manage',
            {
                title: '提案管理',
                keyword: keyword,
                search_type: search_type,
                tabIndex: tabIndex,
            }
        );
    },
    search: function (req, res) {
        var keyword = req.query.keyword || '';
        var search_type = "proposal";
        var data = {keyword: keyword};
        createRequest(res, data, "/ZxApi/m2_17.ashx", function () {
            body = JSON.parse(body);
            var tian_list = body.tian_list
            res.render('proposals/proposal-search',
                {
                    title: '查询结果',
                    search_type: search_type,
                    keyword: keyword,
                    tian_list:tian_list
                }
            );
        })
    },
    detail1:function (req, res) {
        var tian_id = req.query.id;
        var data = {tian_kind:1,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
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
        var type=req.query.type;
        var data = {tian_kind:2,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
            res.render('proposals/proposal-detail2',
                {
                    title: '提案详情',
                    type:type,
                    tian:tian_detail_info
                }
            );
        });
    },
    detail3:function (req, res) {
        var tian_id = req.query.id;
        var type=req.query.type;
        var data;
        if(type==2){
            data = {tian_id:tian_id};
            createRequest(res, data, "/ZxApi/m2_14.ashx", function () {
                body = JSON.parse(body);
                var confirm=body.tian_confirm_info
                var repeat=body.tian_repeat_info
                res.render('proposals/proposal-detail3',
                    {
                        title: '提案详情',
                        type:type,
                        confirm:confirm,
                        repeat:repeat
                    }
                );
            });
        }else if(type==1){
            data = {tian_kind:3,tian_id:tian_id};
            createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
                body = JSON.parse(body);
                var tian_detail_info=body.tian_detail_info
                res.render('proposals/proposal-detail3',
                    {
                        title: '提案详情',
                        type:type,
                        tian:tian_detail_info
                    }
                );
            });
        }
    },
    detail4:function (req, res) {
        var tian_id = req.query.id;
        var type=req.query.type;
        var data = {tian_kind:4,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
            res.render('proposals/proposal-detail4',
                {
                    title: '提案详情',
                    type:type,
                    tian:tian_detail_info
                }
            );
        });
    },
    detail5:function (req, res) {
        var tian_id = req.query.id;
        var zhuangtai = req.query.zhuangtai;
        var type=req.query.type;
        var data;
        if(zhuangtai=="退回"){
            data = {tian_kind:5,tian_id:tian_id};
            createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
                body = JSON.parse(body);
                var tian_detail_info=body.tian_detail_info
                res.render('proposals/proposal-detail5',
                    {
                        title: '提案详情',
                        type:type,
                        tian:tian_detail_info
                    }
                );
            });
        }else if(zhuangtai=="不同意修改"){
            data = {tian_id:tian_id};
            createRequest(res, data, "/ZxApi/m2_14.ashx", function () {
                body = JSON.parse(body);
                var confirm=body.tian_confirm_info
                var repeat=body.tian_repeat_info
                res.render('proposals/proposal-detail5-2',
                    {
                        title: '提案详情',
                        type:type,
                        confirm:confirm,
                        repeat:repeat
                    }
                );
            });
        }
    },
    checkDetail:function (req, res) {
        var tian_id = req.query.id;
        var data = {tian_id:tian_id};
        var type=req.query.type;
        createRequest(res, data, "/ZxApi/m2_14.ashx", function () {
            body = JSON.parse(body);
            var confirm=body.tian_confirm_info
            var repeat=body.tian_repeat_info
            res.render('proposals/proposal-detail5',
                {
                    title: '提案详情',
                    type:type,
                    confirm:confirm,
                    repeat:repeat
                }
            );
        });
    },
    submit2:function (req, res) {
        var tian_id = req.query.id;
        var data = {tian_kind:4,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
            res.render('proposals/submit2-proposal',
                {
                    title: '提案提交',
                    tian:tian_detail_info
                }
            );
        });
    },
    check:function (req, res) {
        var keyword = req.query.keyword||'';
        var tabIndex = req.query.tabIndex;
        var search_type="proposal";
        res.render('proposals/proposal-check',
            {
                title: '审核提案',
                tabIndex:tabIndex,
                keyword:keyword,
                search_type:search_type
            }
        );
    },
    publicity: function (req, res) {
        var data = {tian_list_kind:6};
        createRequest(res, data, "/ZxApi/m2_12.ashx", function () {
            body = JSON.parse(body);
            var tian_list=body.tian_list
            res.render('proposals/proposal-publicity',
                {
                    title: '提案公示',
                    tian_list:tian_list
                }
            );
        });
    },
    honor: function (req, res) {
        var data = {tian_list_kind:7};
        createRequest(res, data, "/ZxApi/m2_12.ashx", function () {
            body = JSON.parse(body);
            var tian_list=body.tian_list
            res.render('proposals/proposal-honor',
                {
                    title: '提案表彰',
                    tian_list:tian_list
                }
            );
        });
    },
    honorDetail:function (req, res) {
        var tian_id = req.query.id;
        var data = {tian_kind:4,tian_id:tian_id};
        createRequest(res, data, "/ZxApi/m2_13.ashx", function () {
            body = JSON.parse(body);
            var tian_detail_info=body.tian_detail_info
            res.render('proposals/honor-detail',
                {
                    title: '详情',
                    tian:tian_detail_info
                }
            );
        });
    },
    know: function (req, res) {
        var data = {startid:-1,article_kind:1};
        createRequest(res, data, "/ZxApi/m2_21.ashx", function () {
            body = JSON.parse(body);
            var article_list=body.article_list
            res.render('proposals/proposal-know',
                {
                    title: '提案知识',
                    article_list:article_list
                }
            );
        });
    },
    knowDetail:function (req, res) {
        var article_id = req.query.id;
        var data = {article_id:article_id};
        createRequest(res, data, "/ZxApi/m2_22.ashx", function () {
            body = JSON.parse(body);
            res.render('proposals/know-detail',
                {
                    title: '详情',
                    article:body
                }
            );
        });
    }
}


