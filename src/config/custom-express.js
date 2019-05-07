const express = require('express'); // importa o express
const app = express();

const rotas = require('../app/rotas/rotas.js'); // importa as rotas
rotas(app); // chama as funções

require('marko/node-require').install(); // importa o marko
require('marko/express');

const sqlite3 = require('sqlite3').verbose(); // cria um arquivo data.db dentro da pasta do nosso projeto
const bd = new sqlite3.Database('data.db');


module.exports = app; // exporta a const app