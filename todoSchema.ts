import mongoose, { Document, Schema } from "mongoose";

interface Todo extends Document {
  title: String;
  discription: String;
  done: Boolean;
}

const todoSchema: Schema = new Schema({
  title: String,
  discription: String,
  done: Boolean
});

module.exports = mongoose.model<Todo>("Todo", todoSchema);