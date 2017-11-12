var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '政协要闻'});
});
router.get('/members', function (req, res, next) {
    res.render('members/members', {title: '政协委员',keyword:'', type: 2});
});
router.get('/work', function (req, res, next) {
    res.render('work/work', {title: '政协工作',keyword:'', type: 3});
});
router.get('/mine', function (req, res, next) {
    res.render('mine/mine', {title: '我', keyword:'',type: 4});
});
router.get('/login', function (req, res, next) {
    res.render('login/login', {title: '登录'});
});
router.get('/editMember', function (req, res, next) {
    res.render('members/edit-member', {title: '编辑成员信息'});
});

module.exports = router;
