const express = require('express');
const disponibilidadSchema = require("../modelos/disponibilidad");

const dispo= express.Router();

dispo.post('/disponibilidad', (req, res) => {
const disponibilidad = disponibilidadSchema(req.body);

disponibilidad
.save()
.then((data) =>res.json(data))
.catch((error) => res.json({ message:error}));
});

module.exports = dispo;