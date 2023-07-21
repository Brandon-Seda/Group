const mongoose = require('mongoose');

const userGroupSchema = new mongoose.Schema({
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true },
  leader: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  description: { type: String },
  isReady: { type: Boolean }, //Determines if all members are ready
});

const UserGroup = mongoose.model('UserGroup', userGroupSchema);

module.exports = UserGroup;
