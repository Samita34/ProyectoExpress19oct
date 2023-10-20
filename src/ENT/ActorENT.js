const { DataTypes } = require("sequelize");
const sequelize = require("../../database/db");

const ActorENT = sequelize.define(
  "Actor",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.STRING,
    },
    nacionalidad: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "actor",
    timestamps: false,
  }
);

module.exports = ActorENT;
