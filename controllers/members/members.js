var http = require("http");
module.exports = {
    init: function (req1, res ,next) {
        var keyword = req1.query.keyword || '';
        var search_type = 'member';
        var data = {};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_01.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        };
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    body = JSON.parse(body);
                    var group_list = body.group_list
                    res.render('members/members-md',
                        {
                            title: '委员名单',
                            keyword: keyword,
                            search_type: search_type,
                            group_list: group_list
                        }
                    );
                })
            } else {
                res.send(500, "error");
            }
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        // write data to request body
        req.write(content);
        req.end();
    },
    search: function (req1, res,next) {
        var keyword = req1.query.keyword || '';
        var search_type = "member";
        var data = {keyword: keyword};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_02.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        };
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    body = JSON.parse(body);
                    var group_list = body.group_list
                    res.render('members/members-search',
                        {
                            title: '查询结果',
                            group_list: group_list,
                            search_type: search_type,
                            keyword: keyword,
                        }
                    );
                })
            } else {
                res.send(500, "error");
            }
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        // write data to request body
        req.write(content);
        req.end();
    },
    detail: function (req1, res, next) {
        var id = req1.query.id;
        var data = {user_id: id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_03.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        };
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    body = JSON.parse(body);
                    var member = body.user_info
                    var name = body.user_info.user_name
                    res.render('members/members-detail',
                        {
                            title: name,
                            member: member
                        }
                    );
                })
            } else {
                res.send(500, "error");
            }
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        // write data to request body
        req.write(content);
        req.end();
    },
    edit: function (req1, res, next) {
        var data = {};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_01.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        };
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    body = JSON.parse(body);
                    var group_list = body.group_list
                    res.render('members/members-edit',
                        {
                            title: '编辑信息',
                            group_list: group_list
                        }
                    );
                })
            } else {
                res.send(500, "error");
            }
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        // write data to request body
        req.write(content);
        req.end();
    },
    editGroup: function (req, res, next) {
        var id = req.query.id;
        res.render('members/edit-group',
            {
                title: '编辑组',
                groupid: id
            }
        );
    },
    editMember: function (req1, res, next) {
        var id = req1.query.id;
        var data = {user_id: id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_03.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            }
        };
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    body = JSON.parse(body);
                    var member = body.user_info
                    res.render('members/edit-member',
                        {
                            title: "编辑成员信息",
                            member: member
                        }
                    );
                })
            } else {
                res.send(500, "error");
            }
        });
        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });
        // write data to request body
        req.write(content);
        req.end();
    }
}


