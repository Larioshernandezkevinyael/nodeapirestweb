const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
    Nombre:{
        type: String,
        required: true
    },
    Apellido:{
        type: String,
        required: true
    },
    Correo:{
        type: String,
        required: true,
        unique : true
    },
    password:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    tipo_id:{
        type: mongoose.Schema.Types.ObjectId, ref: 'tipo_de_usuarios',
        required: true
    }
});


module.exports = mongoose.model('Usuario', userSchema);

 