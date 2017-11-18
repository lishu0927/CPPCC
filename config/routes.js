/**
 * 映射文件
 * 将请求路由到controllers的对象和方法上
 */
var controlles = require('../controllers');

module.exports = function (app) {
    app.get('/news', controlles.news.init);
    app.get("/newsDetail", controlles.news.detail);
    app.get("/search", controlles.search.search);
    app.get("/membersMd", controlles.members.init);
    app.get("/membersSearch", controlles.members.search);
    app.get("/membersDetail", controlles.members.detail);
    app.get("/membersEdit", controlles.members.edit);
    app.get("/editGroup", controlles.members.editGroup);
    app.get("/editMember", controlles.members.editMember);
    app.get("/mine", controlles.mine.init);
    app.get("/proposalDown", controlles.proposal.init);
    app.get("/proposalManage", controlles.proposal.manage);
    app.get("/proposalDetail1", controlles.proposal.detail1);
    app.get("/proposalDetail2", controlles.proposal.detail2);
    app.get("/proposalDetail3", controlles.proposal.detail3);
    app.get("/proposalDetail4", controlles.proposal.detail4);
    app.get("/proposalDetail5", controlles.proposal.detail5);
    app.get("/proposalSubmit2", controlles.proposal.submit2);
    app.get("/proposalSearch", controlles.proposal.search);
    app.get("/proposalCheck", controlles.proposal.check);
    app.get("/proposalPublicity", controlles.proposal.publicity);
    app.get("/proposalHonor", controlles.proposal.honor);
    app.get("/honorDetail", controlles.proposal.honorDetail);
    app.get("/proposalKnow", controlles.proposal.know);
    app.get("/knowDetail", controlles.proposal.knowDetail);
    app.get("/social", controlles.social.init);
    app.get("/socialSubmit", controlles.social.submit);
    app.get("/submitDetail", controlles.social.detail);
    app.get("/submitDetail1", controlles.social.detail1);
    app.get("/submitDetail2", controlles.social.detail2);
    app.get("/socialCheck", controlles.social.check);
    app.get("/socialSelected", controlles.social.selected);
    app.get("/selectedDetail", controlles.social.selectedDetail);
    app.get("/socialFine", controlles.social.fine);
    app.get("/fineDetail", controlles.social.fineDetail);
    app.get("/mien", controlles.mien.init);
    app.get("/mienDetail", controlles.mien.detail);
    app.get("/study", controlles.study.init);
    app.get("/studyDetail", controlles.study.detail);
    app.get("/video", controlles.video.init);
    app.get("/videoDetail", controlles.video.detail);
    app.get("/workInfo", controlles.work.info);
    app.get("/workOrder", controlles.work.order);
    app.get("/workFiles", controlles.work.files);
    app.get("/fileDetail", controlles.work.fileDetail);
    app.get("/workNotices", controlles.work.notices);
    app.get("/noticeDetail", controlles.work.noticeDetail);
    app.get("/addWork", controlles.work.addWork);
    app.get("/workDetail", controlles.work.detail);
    app.get("/todoWork", controlles.work.todoWork);
    app.get("/doneWork", controlles.work.doneWork);
    app.get("/mineMsg", controlles.mine.msg);
}


