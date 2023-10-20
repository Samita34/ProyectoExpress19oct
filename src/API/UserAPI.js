const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../services/UserServices'); // Reemplaza con tu modelo de usuario
const authenticate = require('../middleware/authenticate');

// Registrar un nuevo usuario
router.post('/register', async (req, res) => {
  const { usuario, passw } = req.body;

  try {
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await User.findOne({ where: { usuario } });
    if (existingUser) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    // Hash de la contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(passw, saltRounds);

    // Crear un nuevo usuario con la contraseña hasheada
    const newUser = await User.create({ usuario, passw: hashedPassword });

    // Generar un token JWT
    const token = jwt.sign({ user: newUser.usuario }, 'tu_secreto_secreto', { expiresIn: '1h' }); // Reemplaza con tu propia clave secreta

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar sesión de usuario
router.post('/login', async (req, res) => {
  const { usuario, passw } = req.body;

  try {
    // Buscar al usuario por su nombre de usuario en la base de datos
    const user = await User.findOne({ where: { usuario } });

    if (!user) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Verificar la contraseña hasheada
    const passwordMatch = await bcrypt.compare(passw, user.passw);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Generar un token JWT
    const token = jwt.sign({ user: user.usuario }, 'tu_secreto_secreto', { expiresIn: '1h' }); // Reemplaza con tu propia clave secreta

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Ruta protegida: ejemplo de uso de autenticación
router.get('/protected', authenticate, (req, res) => {
  res.json({ message: 'Ruta protegida, usuario autenticado' });
});

module.exports = router;
