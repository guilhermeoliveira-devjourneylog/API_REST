import  express  from "express";
import ProdutoController from "../controllers/produtosController.js";

const router = express.Router();

router
  .get("/produtos", ProdutoController.listarProdutos)
  .get("/produtos/busca", ProdutoController.listarProdutoPorTipo)
  .get("/produtos/:id", ProdutoController.listarProdutoPorId)
  .post("/produtos", ProdutoController.cadastrarProduto)
  .put("/produtos/:id", ProdutoController.atualizarProduto)
  .delete("/produtos/:id", ProdutoController.excluirProduto)

export default router;