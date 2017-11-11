var http = require("http");
var createRequest=function  (res,data,path,callback){
    var content = JSON.stringify(data);
    var options = {
        host: "114.215.98.96",
        port: "8011",
        path: path,
        method: "POST",
        headers: {
            "Content-Type": 'application/json',
        }
    }
    var req = http.request(options, function (serverFeedback) {
        if (serverFeedback.statusCode == 200) {
            body = "";
            serverFeedback.setEncoding('utf8');
            serverFeedback.on('data', function (data) {
                body += data;
            }).on('end', callback);
        } else {
            res.send(500, "error");
        }
    });
    req.on('error', function (e) {
        console.log('problem with request: ' + e.message);
    });
    // write data to request body
    req.write(content);
    req.end();
}
module.exports = createRequest;


