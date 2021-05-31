const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DailySteps = new Schema({
  steps: { type: Number, default: 0 },
  date: { type: Date, default: new Date() },
});

module.exports = mongoose.model("dailySteps", DailySteps);
