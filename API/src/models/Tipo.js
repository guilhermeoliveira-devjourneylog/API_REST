import mongoose from "mongoose";

const tipoSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome_do_tipo: {type: String, required: true}
  },
  {
    versionKey: false
  }
)

const tipos = mongoose.model("tipos", tipoSchema)

export default tipos;