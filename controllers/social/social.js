var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        var data = {startid:-1,article_kind:2};
        createRequest(res, data, "/ZxApi/m2_21.ashx", function () {
            body = JSON.parse(body);
            var article_list=body.article_list
            console.log(body)
            res.render('social/social',
                {
                    title: '社情民意',
                    article_list:article_list
                }
            );
        });
    },
}


