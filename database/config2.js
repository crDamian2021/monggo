const mongoose = require('mongoose');

const dbConnection = async() => {


    try{

        await mongoose.connect(process.env.MONGODB_CNN,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        });
        console.log('Baces de datos online');
    }
    catch(error){
        console.log(error);
        throw new Error('El error en ala hora de iniciar la bace de datos');
    }
}

module.exports = {
    dbConnection
}
/* 
const MongoClient = require('mongodb').MongoClient;

const uri = 'your-mongodb-atlas-connection-string';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB Atlas:', err);
    return;
  }

  console.log('Connected to MongoDB Atlas');

  const db = client.db('your-database-name');
  // Aquí puedes realizar operaciones en la base de datos

  client.close();
}); */