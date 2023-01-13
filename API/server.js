const http = require("http")
const port = 3000;

const rotas ={
  '/': 'Dashboard',
  '/Produtos': 'Entrei na pag de produtos',
  '/Produtos_aceitos': 'Listagem de produtos',
  '/Sobre': 'Informações sobre o projeto'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  //res.end('API REST');
  res.end(rotas[req.url]);
})

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})
