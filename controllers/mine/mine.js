var http = require("http");
module.exports = {
    init: function (req, res,next) {
        res.render('mine/mine',
            {
                title: '我',
                type: 4
            }
        );
    },
    msg: function (req1, res, next) {
        var data = {startid: -1};
        var content = JSON.stringify(data);
        var options = {
            host: global.reqHost,
            port: global.reqPort,
            path: "/ZxApi/m4_03.ashx",
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
                    var list = body.message_list;
                    res.render('mine/mine-msg',
                        {
                            title: '留言反馈',
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
    }
}


