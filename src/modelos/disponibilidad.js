const mongoose = require('mongoose');
const disponibilidadSchema = mongoose.Schema({
    disponibles: {
        type: Number,
        require: true
    }
});
module.exports = mongoose.model('Disponibilidad',disponibilidadSchema);