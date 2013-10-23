
/**
 * Module dependencies.
 */

var express = require('express');
var params = require('express-params');
var partials = require('express-partials');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var engine = require('ejs-locals');
var flash = require('connect-flash');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(partials());
app.use(flash());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/product', routes.product);
app.get('/product_detail', routes.product_detail);
app.get('/checkout', routes.checkout);
app.get('/cart', routes.cart);
app.get('/contact', routes.contact);
app.get('/login', routes.login);
app.get('/users', user.list);

params.extend(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
