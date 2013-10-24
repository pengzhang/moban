
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', 
  	{ title: '首页',
  	  layout: 'layout' });
};

exports.product = function(req, res){
  res.render('product', 
  	{ title: '产品',
  	  layout: 'layout' });
};

exports.product_detail = function(req, res){
  res.render('product_detail', 
  	{ title: '产品详情',
  	  layout: 'layout' });
};

exports.checkout = function(req, res){
  res.render('checkout', 
  	{ title: '结账',
  	  layout: 'layout' });
};

exports.cart = function(req, res){
  res.render('cart', 
  	{ title: '购物车',
  	  layout: 'layout' });
};

exports.contact = function(req, res){
  res.render('contact', 
  	{ title: '联系我们',
  	  layout: 'layout' });
};

exports.login = function(req, res){
  res.render('login', 
    { title: '登陆',
      layout: 'layout' });
};

exports.register = function(req, res){
  res.render('register', 
    { title: '注册',
      layout: 'layout' });
};

exports.myaccount = function(req, res){
  res.render('myaccount', 
    { title: '注册',
      layout: 'layout' });
};

