const mongoose = require('mongoose');
const {MongoClient}=require('mongodb');

const dbURI = 'mongodb+srv://sojung_choi:XhX1jKQX4Qa325WV@cluster0.c7bsg.mongodb.net/<dbname>?retryWrites=true&w=majority';
const client = new MongoClient(dbURI, {useUnifiedTopology:true});

client.connect();


// mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true });
//
// mongoose.connection.on('connected', ()=>{
//   console.log(`Mongoose connected to ${dbURI}`);
// });
// mongoose.connection.on('error', err=>{
//   console.log('Mongoose connection error:', err);
// });
// mongoose.connection.on('disconnected', ()=>{
//   console.log('Mongoose disconnected');
// });
//

const gracefulShutdown = (msg, callback)=> {
    client.close( ()=>{
    console.log(`Mongo disconnected through ${msg}`);
    callback();
  });
};

// For nodemon restarts
process.once('SIGUSR2', ()=> {
  gracefulShutdown('nodemon restart', ()=>{
    process.kill(process.pid, 'SIGUSR2');
  });
});
// For app termination
process.on('SIGINT', ()=>{
  gracefulShutdown('app termination', ()=>{
    process.exit(0);
  });
});
// For Heroku app termination
process.on('SIGTERM', ()=>{
  gracefulShutdown('Heroku app shutdown', ()=>{
    process.exit(0);
  });
});
