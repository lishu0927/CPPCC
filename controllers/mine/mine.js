var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        res.render('mine/mine',
            {
                title: '我',
                type: 4
            }
        );
    },
    msg: function (req, res) {
        var data = {startid: -1};
        createRequest(res, data, "/ZxApi/m4_03.ashx", function () {
            body = JSON.parse(body);
            var list = body.message_list;
            res.render('mine/mine-msg',
                {
                    title: '留言反馈',
                    result: list
                }
            );
        });
    }
}


