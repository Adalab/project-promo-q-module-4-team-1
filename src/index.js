// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
// Creamos el servidor
const server = express();
const Database = require('better-sqlite3');

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '10mb' }));
server.set('view engine', 'ejs');

// indicar qué base de datos vamos a usar con la ruta relativa a la raíz del proyecto
const db = new Database('./data/database.db', {
  // con verbose le decimos que muestre en la consola todas las queries que se ejecuten
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  req.body;
  if (
    req.body.palette === '' &&
    req.body.name === '' &&
    req.body.job === '' &&
    req.body.email === '' &&
    req.body.phone === '' &&
    req.body.linkedin === '' &&
    req.body.gitHub === '' &&
    req.body.photo === ''
  ) {
    const responseError = {
      success: false,
      error: 'falta completar',
    };
    res.json(responseError);
  } else {
    const newCard = {
      ...req.body,
    };
    savedCard.push(newCard);

    const responseSuccess = {
      cardURL: `http://localhost:4000/card/${newCard.id}`,
      success: true,
    };
    res.json(responseSuccess);
  }
});

server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM cards');
  /*   const userCard = savedCard.find((card) => card.id === req.params.id); */
  const userCard = query.get();
  res.render('detailCard', userCard);
});

/* server.get('/prueba', (req, res) => {
  res.render('detailCard', { palette: 2 });
}); */

const staticServer = './src/public-react';
server.use(express.static(staticServer));

const staticServerCss = './src/public-css';
server.use(express.static(staticServerCss));
