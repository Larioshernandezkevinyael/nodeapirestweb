const express = require('express');
const presentacionSchema = require("../modelos/presentacion");

const route = express.Router();
//insertar nueva presentacion
route.post('/presentacion', (req, res) => {
    const presentacion = presentacionSchema(req.body);

    presentacion 
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = route;