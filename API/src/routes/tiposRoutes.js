import express from "express";
import TipoController from "../controllers/tiposController.js";

const router = express.Router();

router
  .get("/tipos", TipoController.listarTipos)
  .get("/tipos/:id", TipoController.listarTipoPorId)
  .post("/tipos", TipoController.cadastrarTipo)
  .put("/tipos/:id", TipoController.atualizarTipo)
  .delete("/tipos/:id", TipoController.excluirTipo)

export default router;   