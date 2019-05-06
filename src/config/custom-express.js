const express = require('express'); // importa o express
const app = express();

const rotas = require('../app/rotas/rotas.js'); // importa as rotas
rotas(app); // chama as funções

require('marko/node-require').install(); // importa o marko
require('marko/express');


module.exports = app; // exporta a const app