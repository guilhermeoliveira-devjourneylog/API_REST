import express from "express";
import db from "./config/dbConnect.js";
import produtos from "./models/Produto.js";

db.on("error", console.log.bind(console, 'Erro de conexão'))
db.once("open", () => {
  console.log('conexão com banco feita com sucesso')
})


const app = express();

app.use(express.json())

/* const produtos = [
  {id: 1, "nome": "beterraba"},
  {id:2, "nome": "maçã"}
] */

app.get('/', (req, res) => {
  res.status(200).send('Dashboard');
})

app.get('/Produtos', (req, res) => {
  produtos.find((err, produtos) => {
    res.status(200).json(produtos)
  })

})

app.get('/Produtos/:id', (req, res) => {
  let index = buscaProduto(req.params.id);
  res.json(produtos[index]);
})

app.post('/Produtos', (req, res) => {
  produtos.push(req.body);
  res.status(201).send('Produto foi cadastrado com sucesso')
})

app.put('/Produtos/:id', (req, res) => {
  let index = buscaProduto(req.params.id);
  produtos[index].nome = req.body.nome;
  res.json(produtos);
})

app.delete('/Produtos/:id', (req, res) => {
  let {id} = req.params;
  let index = buscaProduto(id);
  produtos.splice(index, 1);
  res.send(`Produto ${id} removido com sucesso`);
})


function buscaProduto(id) {
  return produtos.findIndex(produto => produto.id == id)
}

export default app