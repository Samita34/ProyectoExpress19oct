const express = require("express");
const router = express.Router();
const actorService = require("../services/ActorService");

// Obtener todos los actores
router.get("/", async (req, res) => {
  try {
    const actores = await actorService.getAll();
    res.json(actores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Obtener un actor por ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const actor = await actorService.getById(id);
    res.json(actor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Crear un nuevo actor
router.post("/", async (req, res) => {
  const { nombre, apellido, telefono, nacionalidad } = req.body;
  try {
    const nuevoActor = await actorService.create(nombre, apellido, telefono, nacionalidad);
    res.status(201).json(nuevoActor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar un actor por ID
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, telefono, nacionalidad } = req.body;
  try {
    const actorActualizado = await actorService.update(id, nombre, apellido, telefono, nacionalidad);
    res.json(actorActualizado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Eliminar un actor por ID
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await actorService.remove(id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
