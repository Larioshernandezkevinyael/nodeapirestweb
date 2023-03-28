const express = require('express');
const tipo_usuarioSchema = require("../modelos/tipo_usuario");

const tipou = express.Router();
//insert nuevo tipo usuario
tipou.post('/tipousuario', (req, res) => {
    const tipousuario =  tipo_usuarioSchema(req.body);

    tipousuario 
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
module.exports = tipou;