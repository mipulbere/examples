var express = require('express'),
  router = express.Router(),
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
});

router.get('/route2', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Route 2!',
      articles: articles
    });
});


router.get('/route3', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Route 3!',
      articles: articles
    });
});


router.get('/user/:id', function (req, res, next) {
  res.send('the ip address is - ' + req.ip);
});
