var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/users')
var Project = require('../models/projects')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/users', (req, res) => {
  let user = new User(req.body)
  user.save((err) => {
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
        data: user
      })
    }
  })
})

router.get('/api/users', (req, res) => {
  User.find({}).exec((err, val) => {
    if (err) {
      res.json({
        status: 400,
        message: 'gagal save',
        errMessage: err
      })
    } else {
      res.json({
        status: 200,
        message: 'Data User',
        data: val
      })
    }
  })
})

router.get('/api/users/:id', (req, res) => {
  User.findById(req.params.id).exec((err, val) => {
    if (err) {
      res.json({
        status: 400,
        message: 'Error Get Users by id',
        messageErr: err
      })
    } else {
      if (val.length === 0) {
        res.json({
          status: 200,
          message: 'Tidak ada user dengan id tersebut',
        })
      } else {
        res.json({
          status: 200,
          message: 'Data Users by id',
          data: val
        })
      }
    }
  })
})

router.get('/api/projects', (req, res) => {
  Project.find({}).exec((err, val) => {
    if (err) {
      res.json({
        status: 400,
        message: 'Error Get projects',
        messageErr: err
      })
    } else {
      res.json({
        status: 200,
        message: 'Data Project',
        data: val
      })
    }
  })
})

router.get('/api/projects/:id', (req, res) => {
  Project.findById(req.params.id).exec((err, val) => {
    if (err) {
      res.json({
        status: 400,
        message: 'Error Get Proejcts by id',
        messageErr: err
      })
    } else {
      if (val.length === 0) {
        res.json({
          status: 200,
          message: 'Tidak ada id yang di temukan',
        })
      } else {
        res.json({
          status: 200,
          message: 'Data Project by id',
          data: val
        })
      }
    }
  })
})

router.post('/api/projects', (req, res) => {
  let project = new Project(req.body)
  project.save(err => {
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
        data: project
      })
    }
  })
})

router.post('/api/projects/:id', (req, res) => {
  Project.findById(req.params.id).exec((err, project) => {
    project.set({
      name: req.body.name,
      unit: req.body.unit,
      stakeHolder: req.body.stakeHolder,
      sprint: req.body.sprint,
      status: req.body.status,
      description: req.body.description,
      starDate: req.body.starDate,
      endDate: req.body.endDate
    })
    project.save(err => {
      if(err){
        res.json({
          status: 400,
          message: 'Gagal Edit!',
          messageErr: err
        })
      }else{
        res.json({
          status: 200,
          message: 'Success Edit!',
          data: project
        })
      }
    })
  })
})

router.delete('/api/projects/:id', (req, res) => {
  Project.remove({_id: req.params.id}).exec(err => {
    if(err){
      res.json({
        status: 400,
        message: 'Gagal Delete!',
        messageErr: err
      })
    }else{
      res.json({
        status: 200,
        message: 'Success Delete!'
      })
    }
  })
})

module.exports = router;
