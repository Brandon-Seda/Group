var express = require('express');
var router = express.Router();
const User = require('../models/user');


/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register Page' });
});

router.post('/', (req, res, next)  => {
  //Check email registration
  User.findOne({
    email: req.body.email
  }).then((user) => {
    if (user){
      return res.status(400).json({ email: "This email is already registered!"});
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });
      newUser.save();
      return res.status(200).render('/');
    }
  });
});

module.exports = router;
