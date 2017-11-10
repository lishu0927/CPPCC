var express = require('express');
var router = express.Router();
var http = require('http');

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '政协要闻'});
});
router.get('/news', function (req, res) {
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
                var sliderList=obj.bannerArticle_list;
                var articleList=obj.article_list;
                console.log(sliderList);
                res.render('news/news',
                    {title: '政协要闻', type: 1,sliderList: sliderList,articleList: articleList}
                );
            });
        }else {
            res.send(500, "error");
        }
    });
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.write(content);
    req.end();
});
router.get('/members', function (req, res, next) {
    res.render('members/members', {title: '政协委员', type: 2});
});
router.get('/work', function (req, res, next) {
    res.render('work/work', {title: '政协工作', type: 3});
});
router.get('/mine', function (req, res, next) {
    res.render('mine/mine', {title: '我', type: 4});
});
router.get('/login', function (req, res, next) {
    res.render('login/login', {title: '登录'});
});
router.get('/news-detail', function (req, res, next) {
    res.render('news/news-detail', {title: '政协要闻'});
});

module.exports = router;
