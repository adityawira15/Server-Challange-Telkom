var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Performance = require('../models/performances')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/performance', (req, res) => {
  let performance = new Performance(req.body)
  performance.save((err) => {
    if (err) {
      res.json({
        status: 400,
        message: 'gagal save',
        errMessage: err
      })
    } else {
      res.json({
        status: 200,
        message: 'Create Success!',
        data: performance
      })
    }
  })
})

router.get('/api/performance', (req, res) => {
  Performance.find({}).exec((err, val) => {
    if (err) {
      res.json({
        status: 400,
        message: 'gagal save',
        errMessage: err
      })
    }else{
      res.json({
        status: 200,
        message: 'Data Performance',
        data: val
      })
    }
  })
})

module.exports = router;
