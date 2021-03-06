/*
File Name: index.js
Student's Name: Zhengliang Ding
Student Id: 301222388
Date: Oct 9, 2021
*/
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET about me page. */
router.get('/About', function(req, res, next) {
  res.render('about', { title: 'About Me' });
});

/* GET project page. */
router.get('/Project', function(req, res, next) {
  res.render('project', { title: 'Project Page' });
});

/* GET serves page. */
router.get('/Services', function(req, res, next) {
  res.render('service', { title: 'Services Page' });
});

/* GET contact me page. */
router.get('/Contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});


module.exports = router;
