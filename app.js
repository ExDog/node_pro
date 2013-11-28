
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var ejs  = require('ejs');

/**
 *加载推送模块
 */
var mqtt = require('./routes/yx_mqtt');
/**
 *加载数据库模块
 *
 */
var db  =require('./routes/yx_db');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));

//设置view 为html 引擎加载 @authre:Mr.xia
app.engine('.html',ejs.__express);
app.set('view engine', 'html');

//app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.mqtt);
app.get("/mqtt",routes.mqtt);
app.post('/mqtt', mqtt.doPublish);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
