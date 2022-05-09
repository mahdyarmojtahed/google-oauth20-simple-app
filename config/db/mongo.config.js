const mongoose = require('mongoose');
require('dotenv').config();

const config = {
   MONGO_URI: process.env.MONGO_URI,
}

async function dbConnect() {
   await mongoose.connect(config.MONGO_URI, {})
      .then(console.log('Connection to db Stablished ...'))
      .catch(err => console.log(err));
}

module.exports = dbConnect;