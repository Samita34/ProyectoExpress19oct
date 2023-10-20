const ActorENT = require("../ENT/ActorENT");
const ActorDTO = require("../DTO/ActorDTO");

const getAll = async () => {
  try {
    const actores = await ActorENT.findAll();
    const actoresDTO = actores.map((actor) => new ActorDTO(actor.id, actor.nombre, actor.apellido, actor.telefono, actor.nacionalidad));
    return actoresDTO;
  } catch (error) {
    throw new Error("Error al obtener todos los actores");
  }
};

const getById = async (id) => {
  try {
    const actor = await ActorENT.findByPk(id);
    if (!actor) {
      throw new Error(`Actor con ID: ${id} no encontrado`);
    }
    const actorDTO = new ActorDTO(actor.id, actor.nombre, actor.apellido, actor.telefono, actor.nacionalidad);
    return actorDTO;
  } catch (error) {
    throw new Error(`Error al obtener el actor con ID: ${id}`);
  }
};

const create = async (nombre, apellido, telefono, nacionalidad) => {
  try {
    const nuevoActor = await ActorENT.create({ nombre, apellido, telefono, nacionalidad });
    const actorDTO = new ActorDTO(nuevoActor.id, nuevoActor.nombre, nuevoActor.apellido, nuevoActor.telefono, nuevoActor.nacionalidad);
    return actorDTO;
  } catch (error) {
    throw new Error("Error al crear el actor");
  }
};

const update = async (id, nombre, apellido, telefono, nacionalidad) => {
  try {
    const actor = await ActorENT.findByPk(id);
    if (!actor) {
      throw new Error(`Actor con ID: ${id} no encontrado`);
    }
    actor.nombre = nombre;
    actor.apellido = apellido;
    actor.telefono = telefono;
    actor.nacionalidad = nacionalidad;
    await actor.save();
    const actorDTO = new ActorDTO(actor.id, actor.nombre, actor.apellido, actor.telefono, actor.nacionalidad);
    return actorDTO;
  } catch (error) {
    throw new Error(`Error al actualizar el actor con ID: ${id}`);
  }
};

const remove = async (id) => {
  try {
    const actor = await ActorENT.findByPk(id);
    if (!actor) {
      throw new Error(`Actor con ID: ${id} no encontrado`);
    }
    await actor.destroy();
  } catch (error) {
    throw new Error(`Error al eliminar el actor con ID: ${id}`);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
