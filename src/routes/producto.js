const express = require('express');
const multer = require('multer');
const cloudinary = require("cloudinary").v2;
const path = require('path');
const ProductoSchema = require("../modelos/products");
const product = express.Router();
const upload = multer({dest: 'uploads/' })
// Configurar multer para manejar la carga de archivos


product.post("/Producto", upload.single('imagen'), (req, res) => {
  
  const producto= ProductoSchema(req.body);

  if (req.file) {
    // Si se subió una imagen, cargarla a Cloudinary
    cloudinary.uploader.upload(req.file.path, { folder: 'imagenes' })
      .then(result => {
        // Agregar la URL de la imagen a las propiedades del producto
        producto.imagen = result.secure_url;

        // Guardar el producto en la base de datos
        producto.save()
          .then(data => res.json(data))
          .catch(error => res.json({ message: error }));
      })
      .catch(error => {
        // Manejar el error
        console.log(error);
        res.status(500).send(error);
      });
  } else {
    // Si no se subió una imagen, simplemente guardar el producto en la base de datos
    producto.save()
      .then(data => res.json(data))
      .catch(error => res.json({ message: error }));
  }
});


//get all productos
 product.get('/Producto', (req, res) => {
    ProductoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
}); 
//get id producto buscar
product.get("/Producto/:nombre", (req, res) => {
    const { nombre } = req.params;
    ProductoSchema
        .findById(nombre)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});




module.exports = product;