/* app 11 */

const mongoose = require('mongoose');
const cnn = process.env.MONGODB_CNN;

const dbConetion = async() => {


    try{

        await mongoose.connect(cnn ,{
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
    dbConetion
}