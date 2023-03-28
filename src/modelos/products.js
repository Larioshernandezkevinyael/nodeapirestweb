const mongoose = require('mongoose');
const ProductoSchema = mongoose.Schema({
    nombre:{
        type: 'string',
        required: true,
        unique : true
    },
    descripcion:{
        type: 'string',
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    categoria:{
        type: mongoose.Schema.Types.ObjectId, ref:'categoria_productos'
   
    },
    disponibles:{
        type: mongoose.Schema.Types.ObjectId, ref:'diponibilidads'

    },   
    presentacion:{
        type: mongoose.Schema.Types.ObjectId, ref:'presentacions'

    }
    

});
module.exports = mongoose.model('Producto', ProductoSchema);