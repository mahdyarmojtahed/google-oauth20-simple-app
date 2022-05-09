const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
   id: {
      type: String,
      trim: true,
      required: true,
   },
   createdAt: {
      type: Date,
      required: true,
   },
   name:{
      type: String,
      trim: true,
      required: true,
   },
   email:{
      type: String,
      trim: true,
      required: true,
      unique: true,
      lowercase: true
   },
   photoURL:{
      type: String,
      trim: true,
   },
   status:{
      type: String,
      required: true,
      values: ['Pending', 'Active'],
      default: 'Pending'
   },
});

const User = mongoose.model('users', userSchema);
module.exports = User;