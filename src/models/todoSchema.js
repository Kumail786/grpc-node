const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: String,
  discription: String,
  done: Boolean
});

module.exports  = mongoose.model("Todo", todoSchema);