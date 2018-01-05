var http = require("http");
module.exports = {
    search: function (req1, res, next) {
        var keyword = req1.query.keyword||'';
        var data = {keyword: keyword};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHostL,
            port: global.reqPortL,
            path: "/ZxApi/m1_04.ashx",
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
                    var group_list=body.group_list
                    var tian_list=body.tian_list
                    var article_list=body.article_list
                    res.render('search/search',
                        {
                            title: '查询结果',
                            group_list: group_list,
                            tian_list: tian_list,
                            article_list: article_list,
                            keyword:keyword
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