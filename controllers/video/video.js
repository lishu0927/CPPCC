var http = require("http");
module.exports = {
    init: function (req1, res, next) {
        var data = {
            article_kind:4,
            startid:-1,
            num:20,
            start:0
        };
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHostL,
            port: global.reqPortL,
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
                    res.render('video/video',
                        {
                            title: '视频点播',
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
    detail:function (req1, res, next) {
        var article_id = req1.query.id;
        var data = {article_id:article_id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHostL,
            port: global.reqPortL,
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
                    res.render('video/video-detail',
                        {
                            title: '视频点播',
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
    }
}


