import express from "express";

const app = express();

const produtos = [
  {id: 1, "nome": "beterraba"},
  {id:2, "nome": "Maçã"}
]

app.get('/', (req, res) => {
  res.status(200).send('Dashboard');
})

app.get('/Produtos', (req, res) => {
  res.status(200).json(produtos)
})

export default app