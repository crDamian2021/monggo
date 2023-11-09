const {Schema,model} = require('mongoose');

const RolesSchema = Schema({
    rol:{
        type: 'string',
        required: [true,'el rol no existe']
    }
});


module.exports = model('Role',RolesSchema);