
var router = require('express').Router();

router.get('/', function(req, res) {
	res.sendfile('./views/index.html');
});

router.get('/signin', function(req, res) {
	res.sendfile('./views/signin.html');
});

router.get('/signup', function(req, res) {
	res.sendfile('./views/signup.html');
});

router.get('/sanpham', function(req, res) {
	res.sendfile('./views/sanpham.html');
});

export default router;