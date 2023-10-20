const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql', 
  host: 'localhost', 
  username: 'root', 
  password: '1234', 
  database: 'sakila', 
  port: 3306, 
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });

module.exports = sequelize;
