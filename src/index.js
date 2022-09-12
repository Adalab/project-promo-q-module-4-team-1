


const express = require('express');
const cors = require('cors');


const server = express();
const Database = require('better-sqlite3');

server.use(cors());
server.use(express.json({ limit: '10mb' }));
server.set('view engine', 'ejs');

const db = new Database('./data/database.db', {
  verbose: console.log,
});

const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});


server.post('/card', (req, res) => {

  if (
    req.body.palette === '' &&
    req.body.name === '' &&
    req.body.job === '' &&
    req.body.email === '' &&
    req.body.phone === '' &&
    req.body.linkedin === '' &&
    req.body.github === '' &&
    req.body.photo === ''
  ) {
    const responseError = {
      success: false,
      error: 'falta completar',
    };
    res.json(responseError);
  } else {
    const query = db.prepare(
      'INSERT INTO cards ( palette, name, job, email,phone, linkedin, github, photo) VALUES (?,?,?,?,?,?,?,?)'
    );
    const result = query.run(
      req.body.palette,
      req.body.name,
      req.body.job,
      req.body.email,
      req.body.phone,
      req.body.linkedin,
      req.body.github,
      req.body.photo
    );
    if (result != undefined) {
      const responseSuccess = {
        cardURL: `http://localhost:4000/card/${result.lastInsertRowid}`,
        success: true,
      };
      res.json(responseSuccess);
    }
  }
});

server.get('/card/:id', (req, res) => {
  const query = db.prepare('SELECT * FROM cards WHERE id=?');
  const userCard = query.get(req.params.id);
  res.render('detailCard', userCard);
});

const staticServer = './src/public-react';
server.use(express.static(staticServer));

const staticServerCss = './src/public-css';
server.use(express.static(staticServerCss));
