var http = require("http");
module.exports = {
    info: function (req1, res, next) {
        var data={} ;
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_01.ashx",
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
                    res.render('work/work-info',
                        {
                            title: '政协简介',
                            type: 1,
                            result: body
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
    order: function (req1, res, next) {
        var data={} ;
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_01.ashx",
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
                    res.render('work/work-info',
                        {
                            title: '政协领导',
                            type: 1,
                            result: body
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
    files: function (req1, res, next) {
        var data = {startid: -1};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_03.ashx",
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
                    var list = body.article_list;
                    res.render('work/work-files',
                        {
                            title: '政协文件',
                            type: 1,
                            result: list
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
    fileDetail: function (req1, res, next) {
        var data = {article_id: req1.query.article_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_04.ashx",
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
                    res.render('work/file-detail',
                        {
                            title: '政协文件',
                            type: 1,
                            result: body
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
    notices: function (req1, res, next) {
        var data = {startid: -1, num: 20, start: 0};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_11.ashx",
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
                    var list = body.article_list;
                    res.render('work/work-notices',
                        {
                            title: '通知',
                            type: 1,
                            result: list
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
    noticeDetail: function (req1, res, next) {
        var data = {article_id: req1.query.article_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_12.ashx",
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
                    res.render('work/notice-detail',
                        {
                            title: '通知',
                            type: 1,
                            result: body
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
    startWorkDraft: function (req, res, next) {
        res.render('work/start-work-draft',
            {
                title: '发起流传',
            }
        );
    },
    startWorkPass: function (req, res, next) {
        res.render('work/start-work-pass',
            {
                title: '发起流传',
            }
        );
    },
    addWork: function (req, res, next) {
        res.render('work/add-work',
            {
                title: '添加'
            }
        );
    },
    detail1: function (req1, res, next) {
        var data = {dailywork_id: req1.query.id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_06.ashx",
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
                    var work=body.dailywork_detail_info
                    var attach_list=work.dailyworkattach_list
                    var user_list=work.dailyworkuser_list
                    var leaders=JSON.stringify(user_list)
                    res.render('work/work-detail1',
                        {
                            title: '详情',
                            work: work,
                            attach_list: attach_list,
                            user_list: user_list,
                            leaders:leaders
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
    detail2: function (req1, res, next) {
        var data = {dailywork_id: req1.query.id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_06.ashx",
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
                    var work=body.dailywork_detail_info
                    var attach_list=work.dailyworkattach_list
                    var user_list=work.dailyworkuser_list
                    var leaders=JSON.stringify(user_list)
                    res.render('work/work-detail2',
                        {
                            title: '详情',
                            work: work,
                            attach_list: attach_list,
                            user_list: user_list,
                            leaders:leaders
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
    todoWork: function (req1, res, next) {
        var user_id=req1.query.id;
        var manager_id=req1.query.manager_id;
        var role_type=req1.query.role_type;
        var data = {
            dailywork_list_kind: 3,
            manager_id: manager_id,
            role_type: role_type,
            user_id:user_id
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_05.ashx",
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
                    var dailywork_list=body.dailywork_list
                    res.render('work/todo-work',
                        {
                            title: '待办流传',
                            dailywork_list: dailywork_list
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
    todoDetail:function (req1, res, next) {
        var data = {dailywork_id: req1.query.id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_06.ashx",
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
                    var work=body.dailywork_detail_info
                    var attach_list=work.dailyworkattach_list
                    var user_list=work.dailyworkuser_list
                    var leaders=JSON.stringify(user_list)
                    res.render('work/todo-detail',
                        {
                            title: '详情',
                            work: work,
                            attach_list: attach_list,
                            user_list: user_list,
                            leaders: leaders
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
    doneWork: function (req1, res, next) {
        var user_id=req1.query.id;
        var manager_id=req1.query.manager_id;
        var role_type=req1.query.role_type;
        var data = {
            dailywork_list_kind: 4,
            manager_id: manager_id,
            role_type: role_type,
            user_id:user_id
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_05.ashx",
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
                    var dailywork_list=body.dailywork_list
                    res.render('work/done-work',
                        {
                            title: '已办流传',
                            dailywork_list: dailywork_list
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
    doneDetail:function (req1, res, next) {
        var data = {dailywork_id: req1.query.id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_06.ashx",
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
                    var work=body.dailywork_detail_info
                    var attach_list=work.dailyworkattach_list
                    var user_list=work.dailyworkuser_list
                    var leaders=JSON.stringify(user_list)
                    res.render('work/done-detail',
                        {
                            title: '详情',
                            work: work,
                            attach_list: attach_list,
                            user_list: user_list,
                            leaders: leaders
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
    searchWork: function (req1, res, next) {
        var data = {dailywork_list_kind: 4};
        var keyword="";
        var search_type="work";
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m3_05.ashx",
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
                    var dailywork_list=body.dailywork_list
                    res.render('work/search-work',
                        {
                            title: '查询流传',
                            keyword:keyword,
                            search_type:search_type,
                            dailywork_list: dailywork_list
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