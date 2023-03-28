const mongoose = require('mongoose');
const categoriaSchema = mongoose.Schema({
    categoria: {
        type: String,
        require: true,
        unique : true
    }

});

module.exports = mongoose.model('Categoria_producto', categoriaSchema);