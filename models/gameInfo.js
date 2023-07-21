const mongoose = require('mongoose');

const gameInfoSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the user
  game: { type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: true }, // Reference to the game
  usernameInGame: { type: String }, // User's username for this specific game
  competitiveRank: { type: String }, // User's rank for competitive games in this specific game
});

const GameInfo = mongoose.model('GameInfo', gameInfoSchema);

module.exports = GameInfo;
