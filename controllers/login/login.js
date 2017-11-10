var express = require('express');

/* 登录*/

module.exports = {

    loginQuery:function(request, response, next){
        var username = request.body.real_name;
        var password = request.body.pwd;
        var data = {
            login_code: username,
            pwd:password,
            time: new Date().getTime()};//这是需要提交的数据
        var content = qs.stringify(data);
        var options = {
            hostname:settings.server_host,
            port: 8080,
            path: '/admin/doGetUserLogin.service',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
            }
        };
        var req = http.request(options, function (res) {
            res.setEncoding('utf8');
            var str = "";
            res.on('data', function (chunk) {
                str += chunk;
            });
            res.on('end',function(){
                var obj = JSON.parse(str);
                console.log(obj);
                if(obj.status==500){
                    response.render('login',{
                        title: '登录',
                        result:obj.msg
                    })
                }else {
                    //用户名密码全部匹配后，将用户名存入session
                    var user = {
                        login_code:obj.data.login_code,
                        pwd:obj.data.pwd,
                        user_level:obj.data.user_level,
                        real_name:obj.data.real_name
                    };
                    request.session.user = user;
                    response.redirect('/index?page=1');
                }
            })
        });

        req.on('error', function (e) {
            console.log('problem with request: ' + e.message);
        });

        // write data to request body
        req.write(content);

        req.end();


    }
}
