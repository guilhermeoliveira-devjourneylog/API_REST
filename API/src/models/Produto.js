import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, require: true},
    quantidade: {type: Number}
  }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;
