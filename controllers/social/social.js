var http = require("http");
module.exports = {
    init: function (req, res, next) {
        res.render('social/social',
            {
                title: '社情民意',
            }
        );
    },
    submit: function (req, res, next) {
        var tabIndex = req.query.tabIndex
        res.render('social/social-submit',
            {
                title: '信息提交',
                tabIndex: tabIndex
            }
        );
    },
    detail: function (req, res, next) {
        res.render('social/submit-detail',
            {
                title: '信息提交',
            }
        );
    },
    detail1:function (req1, res, next) {
        var sqmy_id = req1.query.id;
        var sqmy_kind = req1.query.sqmy_kind;
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_26.ashx",
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
                    var sqmy_info=body.sqmy_info
                    res.render('social/submit-detail1',
                        {
                            title: '社情民意',
                            sqmy_id:sqmy_id,
                            sqmy_info:sqmy_info
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
    detail2:function (req1, res, next) {
        var sqmy_id = req1.query.id;
        var sqmy_kind = req1.query.sqmy_kind;
        var check = req1.query.check||"";
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_26.ashx",
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
                    var sqmy_info=body.sqmy_info
                    res.render('social/submit-detail2',
                        {
                            title: '社情民意',
                            sqmy_id:sqmy_id,
                            check:check,
                            sqmy_info:sqmy_info
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
    check: function (req, res, next) {
        var tabIndex = req.query.tabIndex
        res.render('social/social-check',
            {
                title: '信息审核',
                tabIndex: tabIndex
            }
        );
    },
    selected:function (req1, res, next) {
        var data = {sqmy_list_kind:4};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_23.ashx",
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
                    var sqmy_list=body.sqmy_list
                    res.render('social/social-selected',
                        {
                            title: '信息选登',
                            sqmy_list:sqmy_list
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
    selectedDetail:function (req1, res, next) {
        var sqmy_id = req1.query.id;
        var sqmy_kind = 3;
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_26.ashx",
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
                    var sqmy_info=body.sqmy_info
                    res.render('social/selected-detail',
                        {
                            title: '信息选登',
                            sqmy_info:sqmy_info
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
    fine:function (req1, res, next) {
        var data = {sqmy_list_kind:5};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_23.ashx",
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
                    var sqmy_list=body.sqmy_list
                    res.render('social/social-fine',
                        {
                            title: '优秀信息',
                            sqmy_list:sqmy_list
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
    fineDetail:function (req1, res, next) {
        var sqmy_id = req1.query.id;
        var sqmy_kind = 3;
        var data = {sqmy_id:sqmy_id,sqmy_kind:sqmy_kind};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_26.ashx",
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
                    var sqmy_info=body.sqmy_info
                    res.render('social/fine-detail',
                        {
                            title: '优秀信息',
                            sqmy_info:sqmy_info
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


