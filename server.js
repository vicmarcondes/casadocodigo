const http = require('http')

const server = http.createServer((req, resp) => 
resp.end(`<html><body><a href="http://www.alura.com.br">Site da Alura</a></body></html>`));

console.log('Servidor rodando na porta: 3000');
server.listen(3000);