var http = require("http");
module.exports = {
    init: function (req, res, next) {
        res.render('social/social',
            {
                title: '社情民意',
            }
        );
    },
    manage1: function (req1, res, next) {
        var pageType=req1.query.pageType
        var data = {
            sqmy_list_kind:1,
            startid:-1,
            num:20,
            start:0
        };
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
                    res.render('social/social-manage',
                        {
                            title: '信息提交',
                            sqmy_list:sqmy_list,
                            pageType:pageType
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
    manage2: function (req1, res, next) {
        var pageType=req1.query.pageType
        var data = {
            sqmy_list_kind:2,
            startid:-1,
            num:20,
            start:0
        };
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
                    res.render('social/social-manage',
                        {
                            title: '信息提交',
                            sqmy_list:sqmy_list,
                            pageType:pageType
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
    manage3: function (req1, res, next) {
        var pageType=req1.query.pageType
        var data = {
            sqmy_list_kind:3,
            startid:-1,
            num:20,
            start:0
        };
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
                    res.render('social/social-manage',
                        {
                            title: '信息提交',
                            sqmy_list:sqmy_list,
                            pageType:pageType
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
    manage4: function (req1, res, next) {
        var pageType=req1.query.pageType
        var data = {
            sqmy_list_kind:6,
            startid:-1,
            num:20,
            start:0
        };
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
                    res.render('social/social-manage',
                        {
                            title: '信息提交',
                            sqmy_list:sqmy_list,
                            pageType:pageType
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
        var back = req1.query.back||"";
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
                            back:back,
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
    check1: function (req1, res, next) {
        var pageType=req1.query.pageType
        var data = {
            sqmy_list_kind:2,
            startid:-1,
            num:20,
            start:0
        };
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
                    res.render('social/social-check',
                        {
                            title: '信息审核',
                            sqmy_list:sqmy_list,
                            pageType:pageType
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
    check2: function (req1, res, next) {
        var pageType=req1.query.pageType
        var data = {
            sqmy_list_kind:3,
            startid:-1,
            num:20,
            start:0
        };
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
                    res.render('social/social-check',
                        {
                            title: '信息审核',
                            sqmy_list:sqmy_list,
                            pageType:pageType
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
    selected:function (req1, res, next) {
        var data = {
            sqmy_list_kind:4,
            startid:-1,
            num:20,
            start:0
        };
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


