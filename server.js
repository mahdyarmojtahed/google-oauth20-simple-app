const http = require('http');
const app = require('./app');
const dbConnect = require('./config/db/mongo.config')
const server = http.createServer(app);

require('dotenv').config();

const config = {
   PORT: process.env.PORT,
}

async function createServer() {
   await dbConnect();
   server.listen(config.PORT, () => {
      console.log(`Listening to port ${config.PORT}`)
   });
}

createServer();