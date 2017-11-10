var express = require('express');
var router = express.Router();
var http = require("http");

module.exports = {
    search: function (req, res) {
        var keyword = req.query.keyword;
        var data = {keyword: keyword};
        var content = JSON.stringify(data);
        var options = {
            host: "114.215.98.96",
            port: "8011",
            path: "/ZxApi/m1_04.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            }
        }
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "",obj;
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    obj = JSON.parse(body);
                    var weiyuan_list=obj.weiyuan_list
                    var tian_list=obj.tian_list
                    var article_list=obj.article_list
                    res.render('search/search',
                        {
                            title: '查询结果',
                            weiyuan_list: weiyuan_list,
                            tian_list: tian_list,
                            article_list: article_list,
                            keyword:keyword

                        });
                });
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