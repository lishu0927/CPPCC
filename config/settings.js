var path       = require('path');

var settings = {
  path       : path.normalize(path.join(__dirname, '..')),
  port       : process.env.NODE_PORT || 3000,
  server_host: "localhost",
  database   : {
    protocol : "mysql", 
    query    : { pool: true },
    host     : "59.110.42.180",
    database : "qds210482651_db",
    user     : "root",
    uid: "qds210482651",
    pwd : "drop1234"
  }
};

module.exports = settings;
