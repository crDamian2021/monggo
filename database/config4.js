const mongoose = require('mongoose');


const dbConnection = async()=>{


    try{

        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
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