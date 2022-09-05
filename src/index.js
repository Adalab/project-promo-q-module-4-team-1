// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require('express');
const cors = require('cors');

// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(express.json({limit: '25mb'}));

// Arrancamos el servidor en el puerto 3000
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Escribimos los endpoints que queramos
server.post('/card', (req, res) => {
  const responseSuccess = { cardURL: " https://awesome-profile-cards.herokuapp.com/card/84821662378443174",
  success : true
  };
  const responseError = { success: false, error: "falta completar"}
  res.json(responseSuccess);
});

server.get('/card/84821662378443174', (req, res)=>{ 
    res.json( {url: "https://awesome-profile-cards.herokuapp.com/card/84821662378443174"})
} )