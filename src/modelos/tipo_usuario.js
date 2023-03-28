const mongoose = require('mongoose');
const tipo_usuarioSchema = mongoose.Schema({
    tipo:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Tipo_de_usuario', tipo_usuarioSchema);