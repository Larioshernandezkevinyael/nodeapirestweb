const express = require('express');
const userSchema = require("../modelos/user");

const tipo_usuarioSchema = require("../modelos/tipo_usuario");
const route = express.Router();

route.post('/users', (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});
// get all users
route.get('/users', (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
route.get("/users/:id", (req, res) => {
  const { id } = req.params;
  userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

route.post('/users', async (req, res) => {
  try {
    const {Correo,password} = req.body;
  const user = await userSchema.findOne({Correo,password})
  if (!user) return res.status(404).json({
    message:"correo o password incorrectos"
  })
  return res.send(user)
  } catch (error) {
    return res.status(404).json({
      message:error.message
    })
  } 
});

//Log
route.post('/login', async (req, res) => {
  try {
    const {Correo,password} = req.body;
    const user = await userSchema.findOne({Correo,password})
    if (!user) {
      return res.status(404).json({
        message:"correo o password incorrectos"
      })
    } else {
      return res.json({ token: 'your_jwt_token_here' }); // Esto es solo un ejemplo, debes generar un token JWT real
    }
  } catch (error) {
    return res.status(404).json({
      message:error.message
    })
  } 
});

// Registrar un nuevo usuario
route.post('/users', async (req, res) => {
  try {
    const { Nombre, Apellido, Correo, password, telefono } = req.body;
    const tipoUsuario = await tipo_usuarioSchema.findOne({ tipo: 'cliente' });
    const user = new userSchema({
      Nombre,
      Apellido,
      Correo,
      password,
      telefono,
      tipo_id: tipoUsuario._id
    });
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    res.json({ message: error });
  }
});
route.post('/users/check-email', async (req, res) => {
  const { email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({ message: 'El correo ya está registrado' });
    }
    return res.json({ message: 'El correo no está registrado' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Ha ocurrido un error' });
  }
});
module.exports = route;
