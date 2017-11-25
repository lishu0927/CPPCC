var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '政协要闻'});
});
router.get('/members', function (req, res) {
    res.render('members/members', {title: '政协委员', keyword: '', type: 2});
});
router.get('/work', function (req, res) {
    res.render('work/work', {title: '政协工作', keyword: '', type: 3});
});
router.get('/login', function (req, res) {
    res.render('login/login', {title: '登录'});
});
router.get('/addMember', function (req, res) {
    res.render('members/add-member', {title: '添加成员'});
});
router.get('/proposals', function (req, res) {
    res.render('proposals/proposals', {title: '政协提案'});
});
router.get('/proposalSubmit', function (req, res) {
    res.render('proposals/proposal-submit', {title: '提案提交'});
});
router.get('/submitProposal', function (req, res) {
    res.render('proposals/submit-proposal', {title: '提案提交'});
});
router.get('/workFlow', function (req, res) {
    res.render('work/work-flow', {title: '文件流传'});
});
router.get('/minePwd', function (req, res) {
    res.render('mine/mine-pwd', {title: '修改密码'});
});

module.exports = router;
