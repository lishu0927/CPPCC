var express = require('express');
var router = express.Router();
var http = require("http");

module.exports = {
    init: function (req, res) {
        var data = {startid: -1};
        var content = JSON.stringify(data);
        var options = {
            host: "114.215.98.96",
            port: "8011",
            path: "/ZxApi/m1_02.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            }
        }
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                var obj;
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    obj = JSON.parse(body);
                    var sliderList = obj.bannerArticle_list;
                    var articleList = obj.article_list;
                    console.log(sliderList);
                    res.render('news/news',
                        {title: '政协要闻', type: 1, sliderList: sliderList, articleList: articleList}
                    );
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
    },
    detail: function (req, res) {
        var id = req.query.id;
        console.log(id);
        var data = {article_id: id};
        var content = JSON.stringify(data);
        var options = {
            host: "114.215.98.96",
            port: "8011",
            path: "/ZxApi/m1_03.ashx",
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            }
        }
        var req = http.request(options, function (serverFeedback) {
            if (serverFeedback.statusCode == 200) {
                var body = "";
                var obj;
                serverFeedback.setEncoding('utf8');
                serverFeedback.on('data', function (data) {
                    body += data;
                }).on('end', function () {
                    /*obj = JSON.parse(body);*/
                    res.render('news/news-detail', {title: '政协要闻',result:body});
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