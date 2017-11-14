var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var keyword = req.query.keyword || '';
        var data = {};
        createRequest(res, data, "/ZxApi/m2_01.ashx", function () {
            body = JSON.parse(body);
            var group_list = body.group_list
            res.render('members/members-md',
                {
                    title: '委员名单',
                    keyword: keyword,
                    group_list: group_list
                }
            );
        });
    },
    search: function (req, res) {
        var keyword = req.query.keyword || '';
        var data = {keyword: keyword};
        createRequest(res, data, "/ZxApi/m2_02.ashx", function () {
            body = JSON.parse(body);
            console.log(keyword);
            var group_list = body.group_list
            /* var tian_list=body.tian_list
            var article_list=body.article_list*/
            res.render('members/members-search',
                {
                    title: '查询结果',
                    group_list: group_list,
                    keyword: keyword,
                }
            );
        })
    },
    detail: function (req, res) {
        var id = req.query.id;
        var data = {user_id: id};
        createRequest(res, data, "/ZxApi/m2_03.ashx", function () {
            body = JSON.parse(body);
            var member = body.user_info
            var name = body.user_info.user_name
            res.render('members/members-detail',
                {
                    title: name,
                    member: member
                }
            );
        });
    },
    edit: function (req, res) {
        var data = {};
        createRequest(res, data, "/ZxApi/m2_01.ashx", function () {
            body = JSON.parse(body);
            var group_list = body.group_list
            console.log(group_list)
            res.render('members/members-edit',
                {
                    title: '编辑信息',
                    group_list: group_list
                }
            );
        });
    },
    editGroup: function (req, res) {
        var id = req.query.id;
        res.render('members/edit-group',
            {
                title: '编辑组',
                groupid: id
            }
        );
    },
    editMember: function (req, res) {
        var id = req.query.id;
        var data = {user_id: id};
        createRequest(res, data, "/ZxApi/m2_03.ashx", function () {
            body = JSON.parse(body);
            var member = body.user_info
            var name = body.user_info.user_name
            console.log(member);
            console.log(name);
            res.render('members/edit-member',
                {
                    title: "编辑成员信息",
                    member: member
                }
            );
        });
    }
}


