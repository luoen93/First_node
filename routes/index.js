var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Chart Test'});
});

//noinspection JSUnresolvedFunction
router.post('/welcome', function (req, res) {
    if(req.body.name == '123'){
        console.log('success');
        res.render('welcome',{title :'Welcome'});
    } else {
        console.log('fail');
        res.redirect('/');
    }
});

module.exports = router;
