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
    app.get("/proposalManage1", controlles.proposal.manage1);
    app.get("/proposalManage2", controlles.proposal.manage2);
    app.get("/proposalManage3", controlles.proposal.manage3);
    app.get("/proposalManage4", controlles.proposal.manage4);
    app.get("/proposalManage5", controlles.proposal.manage5);
    app.get("/proposalDetail1", controlles.proposal.detail1);
    app.get("/proposalDetail2", controlles.proposal.detail2);
    app.get("/proposalDetail3", controlles.proposal.detail3);
    app.get("/proposalDetail4", controlles.proposal.detail4);
    app.get("/proposalDetail5", controlles.proposal.detail5);
    app.get("/proposalSubmit2", controlles.proposal.submit2);
    app.get("/proposalSearch", controlles.proposal.search);
    app.get("/proposalCheck1", controlles.proposal.check1);
    app.get("/proposalCheck2", controlles.proposal.check2);
    app.get("/proposalCheck3", controlles.proposal.check3);
    app.get("/proposalCheck4", controlles.proposal.check4);
    app.get("/proposalPublicity", controlles.proposal.publicity);
    app.get("/proposalHonor", controlles.proposal.honor);
    app.get("/honorDetail", controlles.proposal.honorDetail);
    app.get("/proposalKnow", controlles.proposal.know);
    app.get("/knowDetail", controlles.proposal.knowDetail);
    app.get("/proposalLecture", controlles.proposal.lecture);
    app.get("/checkDetail", controlles.proposal.checkDetail);
    app.get("/social", controlles.social.init);
    app.get("/socialManage1", controlles.social.manage1);
    app.get("/socialManage2", controlles.social.manage2);
    app.get("/socialManage3", controlles.social.manage3);
    app.get("/socialManage4", controlles.social.manage4);
    app.get("/submitDetail", controlles.social.detail);
    app.get("/submitDetail1", controlles.social.detail1);
    app.get("/submitDetail2", controlles.social.detail2);
    app.get("/socialCheck1", controlles.social.check1);
    app.get("/socialCheck2", controlles.social.check2);
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
    app.get("/work", controlles.work.work);
    app.get("/workNotices", controlles.work.notices);
    app.get("/noticeDetail", controlles.work.noticeDetail);
    app.get("/startWorkDraft", controlles.work.startWorkDraft);
    app.get("/startWorkPass", controlles.work.startWorkPass);
    app.get("/addWork", controlles.work.addWork);
    app.get("/workDetail1", controlles.work.detail1);
    app.get("/workDetail2", controlles.work.detail2);
    app.get("/todoWork", controlles.work.todoWork);
    app.get("/todoDetail", controlles.work.todoDetail);
    app.get("/doneWork", controlles.work.doneWork);
    app.get("/doneDetail", controlles.work.doneDetail);
    app.get("/searchWork", controlles.work.searchWork);
    app.get("/mineMsg", controlles.mine.msg);
}


