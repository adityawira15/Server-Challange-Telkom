var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var BTP = require('../models/bestTalentPerformance')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/btp', (req, res) => {
  let btp = new BTP(req.body)
  btp.save((err) => {
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
        data: btp
      })
    }
  })
})

router.get('/api/btp', (req, res) => {
  BTP.find({}).exec((err, val) => {
    if (err) {
      res.json({
        status: 400,
        message: 'gagal save',
        errMessage: err
      })
    }else{
      res.json({
        status: 200,
        message: 'Data BTP',
        data: val
      })
    }
  })
})

module.exports = router;
