const express = require('express');
const { ObjectId } = require('mongodb');
const categoriaSchema = require("../modelos/categoria_producto");

const cate = express.Router();

cate.post('/categoria', (req, res) => {
    const categoria = categoriaSchema(req.body);
    categoria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

cate.get("/categoria", (req, res) => {

    categoriaSchema.
    aggregate([
        {
            $lookup:{
                from:"productos",
                localField:"categoria",
                foreignField:"_id",
                as:"categoria"
            }
        }
    ])
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));

});

module.exports = cate;