var createRequest = require("../../config/settings");

module.exports = {
    init: function (req, res) {
        res.render('mine/mine',
            {
                title: '我',
                type: 4
            }
        );
    }
}


