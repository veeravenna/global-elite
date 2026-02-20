// Tournament Model
const mongoose = require('mongoose');

const tournamentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  game: { type: String, required: true }, // BGMI, Valorant, Free Fire
  description: String,
  prizePool: { type: Number, required: true },
  entryFee: { type: Number, default: 0 },
  maxParticipants: Number,
  registeredParticipants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  status: { type: String, enum: ['upcoming', 'live', 'completed'], default: 'upcoming' },
  startDate: Date,
  endDate: Date,
  bracket: String, // squad, duo, solo
  mode: String, // TPP, FPP, BO1, BO3
  rules: String,
  winner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  image: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Tournament', tournamentSchema);
