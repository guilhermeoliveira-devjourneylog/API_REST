import mongoose, { Mongoose } from "mongoose";

const produtoSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome_do_produto: {type: String, required: true},
    tipo: {type: mongoose.Schema.Types.ObjectId, ref: 'tipos', required: true},
    quantidade: {type: Number}
  }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;
