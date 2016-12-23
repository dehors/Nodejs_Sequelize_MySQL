var express = require('express');
var router = express.Router();
var UsersController = require('./controllers/UsersController.js');


router.use('/api/users',UsersController);

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next();
});

module.exports = router;