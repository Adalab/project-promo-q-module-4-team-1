// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({ limit: '10mb' }));
server.set('view engine', 'ejs');

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});
const savedCard = [];
// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
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
      id: uuidv4(),
      ...req.body,
    };
    savedCard.push(newCard);

    const responseSuccess = {
      cardURL: `localhost:4000/card/${newCard.id}`,
      success: true,
    };
    res.json(responseSuccess);
  }
});

server.get('/card/84821662378443174', (req, res) => {
  res.json({
    url: 'https://awesome-profile-cards.herokuapp.com/card/84821662378443174',
  });
});

server.get('/prueba', (req, res) => {
  res.render('detailCard', { palette: 2 });
});

const staticServer = './src/public-react';
server.use(express.static(staticServer));

const staticServerCss = './src/public-css';
server.use(express.static(staticServerCss));
