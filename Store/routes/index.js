'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (err, req, res, next) {
    //res.render('index', { title: 'Express' });
    res.sendfile('./views/index.html'); // <--- This works just fine :)
    req.next();
});

router.get('/button', function (err, req, res, next) {
    Console.log('GET /button...');
    res.write('you clicked me');
    res.end();
    req.next();
});
router.post('/button', function (err, req, res, next) {
    Console.log('POST /button...');
    res.write('you clicked me');
    res.end();
    req.next();
});



module.exports = router;
