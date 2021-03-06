var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var routes      = require('./config/routes');

var app = express();

routes(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

global.reqHostL='114.215.98.96';  //node
global.reqPortL='8011';

global.reqHost='114.215.98.96';
global.reqPort='8011';


app.locals["navList"] = [{item_rul:'/news',item_text:'政协要闻',item_pic:'index1'},
    {item_rul:'/members',item_text:'政协委员',item_pic:'index2'},
    {item_rul:'/work',item_text:'政协工作',item_pic:'index3'},
    {item_rul:'/mine',item_text:'我',item_pic:'index4'}
];


module.exports = app;
