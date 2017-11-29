var http = require("http");
module.exports = {
    init: function (req1, res, next) {
        var data = {
            tian_list_kind:3,
            num:20,
            start:0,
            startid:-1
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_12.ashx",
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
                    var tian_list=body.tian_list
                    res.render('proposals/proposal-down',
                        {
                            title: '提案表下载',
                            tian_list:tian_list
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
    manage: function (req, res, next) {
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
    search: function (req1, res, next) {
        var keyword = req1.query.keyword || '';
        var search_type = "proposal";
        var data = {keyword: keyword};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_17.ashx",
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
    detail1:function (req1, res, next) {
        var tian_id = req1.query.id;
        var data = {tian_kind:1,tian_id:tian_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_13.ashx",
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
                    var tian_detail_info=body.tian_detail_info
                    res.render('proposals/proposal-detail1',
                        {
                            title: '提案提交',
                            tian:tian_detail_info
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
        var tian_id = req1.query.id;
        var type=req1.query.type;
        var data = {tian_kind:2,tian_id:tian_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_13.ashx",
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
                    var tian_detail_info=body.tian_detail_info
                    res.render('proposals/proposal-detail2',
                        {
                            title: '提案详情',
                            type:type,
                            tian:tian_detail_info
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
    detail3:function (req1, res, nex) {
        var tian_id = req1.query.id;
        var type=req1.query.type;
        var data;
        if(type==2){
            data = {tian_id:tian_id};
            var content = JSON.stringify(data);
            var options = {
                host: global.reqHost,
                port: global.reqPort,
                path: "/ZxApi/m2_14.ashx",
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

        }else if(type==1){
            data = {tian_kind:3,tian_id:tian_id};
            var content = JSON.stringify(data);
            var options = {
                host: global.reqHost,
                port: global.reqPort,
                path: "/ZxApi/m2_13.ashx",
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
                        var tian_detail_info=body.tian_detail_info
                        res.render('proposals/proposal-detail3',
                            {
                                title: '提案详情',
                                type:type,
                                tian:tian_detail_info
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
    },
    detail4:function (req1, res, next) {
        var tian_id = req1.query.id;
        var type=req1.query.type;
        var data = {tian_kind:4,tian_id:tian_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_13.ashx",
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
                    var tian_detail_info=body.tian_detail_info
                    res.render('proposals/proposal-detail4',
                        {
                            title: '提案详情',
                            type:type,
                            tian:tian_detail_info
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
    detail5:function (req1, res, next) {
        var tian_id = req1.query.id;
        var zhuangtai = req1.query.zhuangtai;
        var type=req1.query.type;
        var data;
        if(zhuangtai=="退回"){
            data = {tian_kind:5,tian_id:tian_id};
            var content = JSON.stringify(data);
            var options = {
                host: global.reqHost,
                port: global.reqPort,
                path: "/ZxApi/m2_13.ashx",
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
                        var tian_detail_info=body.tian_detail_info
                        res.render('proposals/proposal-detail5',
                            {
                                title: '提案详情',
                                type:type,
                                tian:tian_detail_info
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

        }else if(zhuangtai=="不同意修改"){
            data = {tian_id:tian_id};
            var content = JSON.stringify(data);
            var options = {
                host: global.reqHost,
                port: global.reqPort,
                path: "/ZxApi/m2_14.ashx",
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
    },
    checkDetail:function (req1, res, next) {
        var tian_id = req1.query.id;
        var type=req1.query.type;
        var data = {tian_id:tian_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_14.ashx",
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
    submit2:function (req1, res, next) {
        var tian_id = req1.query.id;
        var data = {tian_kind:4,tian_id:tian_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_13.ashx",
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
                    var tian_detail_info=body.tian_detail_info
                    res.render('proposals/submit2-proposal',
                        {
                            title: '提案提交',
                            tian:tian_detail_info
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
    check:function (req, res, next) {
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
    publicity: function (req1, res, next) {
        var data = {
            tian_list_kind:6,
            startid: -1,
            num: 20,
            start: 0
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_12.ashx",
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
                    var tian_list=body.tian_list
                    res.render('proposals/proposal-publicity',
                        {
                            title: '提案公示',
                            tian_list:tian_list
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
    honor: function (req1, res, next) {
        var data = {
            tian_list_kind:7,
            startid: -1,
            num: 20,
            start: 0
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_12.ashx",
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
                    var tian_list=body.tian_list
                    res.render('proposals/proposal-honor',
                        {
                            title: '提案表彰',
                            tian_list:tian_list
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
    honorDetail:function (req1, res, next) {
        var tian_id = req1.query.id;
        var data = {tian_kind:4,tian_id:tian_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_13.ashx",
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
                    var tian_detail_info=body.tian_detail_info
                    res.render('proposals/honor-detail',
                        {
                            title: '详情',
                            tian:tian_detail_info
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
    know: function (req1, res, next) {
        var data = {
            article_kind:1,
            startid:-1,
            num:20,
            start:0
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_21.ashx",
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
                    var article_list=body.article_list
                    res.render('proposals/proposal-know',
                        {
                            title: '提案知识',
                            article_list:article_list
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
    knowDetail:function (req1, res, next) {
        var article_id = req1.query.id;
        var data = {article_id:article_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_22.ashx",
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
                    res.render('proposals/know-detail',
                        {
                            title: '详情',
                            article:body
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
    lecture: function (req1, res, next) {
        var data = {startid:-1,article_kind:5};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m2_21.ashx",
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
                    var article_list=body.article_list
                    res.render('proposals/proposal-lecture',
                        {
                            title: '提案讲座',
                            article_list:article_list
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


