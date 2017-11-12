var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '政协要闻'});
});
router.get('/members', function (req, res) {
    res.render('members/members', {title: '政协委员',keyword:'', type: 2});
});
router.get('/work', function (req, res) {
    res.render('work/work', {title: '政协工作',keyword:'', type: 3});
});
router.get('/mine', function (req, res) {
    res.render('mine/mine', {title: '我', keyword:'',type: 4});
});
router.get('/login', function (req, res) {
    res.render('login/login', {title: '登录'});
});
router.get('/editMember', function (req, res) {
    res.render('members/edit-member', {title: '编辑成员信息'});
});
router.get('/workInfo', function (req, res) {
    res.render('work/work-info', {title: '政协简介'});
});
router.get('/workOrder', function (req, res) {
    res.render('work/work-order', {title: '政协领导'});
});
router.get('/workFiles', function (req, res) {
    res.render('work/work-files', {title: '政协文件'});
});
router.get('/fileDetail', function (req, res) {
    res.render('work/file-detail', {title: '政协文件'});
});
router.get('/workNotices', function (req, res) {
    res.render('work/work-notices', {title: '通知'});
});
router.get('/noticeDetail', function (req, res) {
    res.render('work/notice-detail', {title: '通知'});
});

module.exports = router;
