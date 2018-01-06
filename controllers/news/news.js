var http = require("http");
module.exports = {
    init: function (req1, res, next) {
        res.set("Cache-Control","no-cache, no-store, must-revalidate");
        var keyword = req1.query.keyword||'';
        var data = {startid: -1,num:10, start:0};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHostL,
            port: global.reqPortL,
            path: "/ZxApi/m1_02.ashx",
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
                    var sliderList = body.bannerArticle_list;
                    var article_list = body.article_list;
                    res.render('news/news',
                        {
                            title: '政协要闻',
                            type: 1,
                            sliderList: sliderList,
                            article_list: article_list,
                            keyword: keyword
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
        var data = {article_id: id};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHostL,
            port: global.reqPortL,
            path: "/ZxApi/m1_03.ashx",
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
                    res.render('news/news-detail',
                        {
                            title: '政协要闻',
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
    }
}


