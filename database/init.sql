
CREATE TABLE actor (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(45) NOT NULL,
  apellido VARCHAR(45) NOT NULL,
  telefono VARCHAR(20),
  nacionalidad VARCHAR(45)
);
CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario VARCHAR(255) NOT NULL,
  passw VARCHAR(255) NOT NULL
);

INSERT INTO actor (nombre, apellido, telefono, nacionalidad) VALUES ('John', 'Doe', '123-456-7890', 'Estadounidense');
INSERT INTO actor (nombre, apellido, telefono, nacionalidad) VALUES ('Jane', 'Smith', '987-654-3210', 'Canadiense');
INSERT INTO actor (nombre, apellido, telefono, nacionalidad) VALUES ('Michael', 'Johnson', '555-123-4567', 'Británico');
INSERT INTO actor (nombre, apellido, telefono, nacionalidad) VALUES ('Emily', 'Brown', '111-222-3333', 'Australiana');
INSERT INTO actor (nombre, apellido, telefono, nacionalidad) VALUES ('David', 'Lee', '222-333-1111', 'Sudafricana');

