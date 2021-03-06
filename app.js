var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs=require('fs');
var querystring=require('querystring');
var  history=require('connect-history-api-fallback');


var index = require('./routes/index');
var adminlogin = require('./routes/users');
var test=require('./routes/test');
var db=require('./routes/db');
var db1=require('./routes/123');
var db2=require('./routes/getpro');
var admin=require('./routes/admin');
var MTadmin=require('./routes/MTadmin');
var goods=require('./routes/goods');

var wechat  = require('./weixin/weichat'); 
var config = require('./config');
//引入配置文件
var app = express();
var wechatApp = new wechat(config); //实例wechat 模块
//跨域问题
app.all('*', function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(history())
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//
 app.post('/goods',goods);
 app.post('/MTadmin',MTadmin);
 app.post('/admin',admin);
 app.post('/123',db);
 app.post('/125',db2);
 app.post('/124',db1);
app.post('/123.html',test);
//

//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
 wechatApp.accesstaken()
 wechatApp.sentmenus()
app.get('/sign',function(req,res){ 
    wechatApp.sign(req,res); 
 })
app.post('/sign',function(req,res){ 
    wechatApp.handleMsg(req,res); 
 })


  


app.use('/', index);
app.use('/adminlogin', adminlogin);
//post 方法


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

module.exports = app;
