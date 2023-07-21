const mongoose = require('mongoose');
const UserGroup = require('./userGroup');

const gameSchema = new mongoose.Schema({
  title: { type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  publisher: { type: String },
  description: { type: String },
  coverImage: { type: String }, // URL or path to the cover image
  players: { type: Number },
  userGroups: [{ type: mongoose.Schema.Types.ObjectId, ref: 'UserGroup' }],
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
