var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '政协要闻'});
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
router.get('/search', function (req, res, next) {
    res.render('search/search', {title: '我', type: 4});
});
router.get('/login', function (req, res, next) {
    res.render('login/login', {title: '登录'});
});

module.exports = router;
