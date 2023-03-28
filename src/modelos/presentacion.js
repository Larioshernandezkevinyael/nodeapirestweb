const mongoose = require('mongoose');
const presentacionSchema = mongoose.Schema({
    presentacion: {
        type: String,
        requiere: true,
        unique : true
    }
});
module.exports = mongoose.model('Presentacion', presentacionSchema);