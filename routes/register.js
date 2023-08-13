var express = require('express');
var router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

/* GET register page. */
router.get('/', function(req, res, next) {
  res.render('register', { title: 'Register Page' });
});

router.post('/', async (req, res, next)  => {

  const payload = req.body;

  try {
    //Checks if user or email are already in registered
    const existingUser = await User.findOne({
      $or: [{ email: req.body.email }, { username: req.body.username }],
    });
    if(existingUser) {
      payload.error = 'Email or username already is already registered.'
      return res.render('register');
    }
    // Checks if password meets requirements
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordRegex.test(req.body.password)) {
      payload.error = 'Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
      return res.render('register');
    }

    // Hash password for protection
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    console.log('password hashed successfully')

    // Saves user to the database if all requirements are met
    const newUser = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword,
    });

    await newUser.save();
    
    console.log('success');
    return res.render('home', payload);
  }
  catch(error){
    console.log('not a success');
    return res.render('register', payload);
  }   
});

module.exports = router;
