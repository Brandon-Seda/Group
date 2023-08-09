const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minLength: 8 },
  age: { type: Number, min: 0, max: 120 },
  gamesPlayed: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Game' }],
  photo: { type: String, default: '../images/user.png' },
  role: { type: String, enum: ['user', 'leader', 'admin'], default: 'user' },
}, { autoCreate: false, autoIndex: false });

const User = mongoose.model('User', userSchema);

User.createCollection();

module.exports = User;