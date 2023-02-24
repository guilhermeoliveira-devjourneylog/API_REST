import tipos from "../models/Tipo.js";

class TipoController {

  static listarTipos = (req, res) => {
    tipos.find((err, tipos) => {
      res.status(200).json(tipos)
  })
  }

  static listarTipoPorId = (req, res) => {
    const id = req.params.id;

    tipos.findById(id, (err, tipos) => {
      if(err) {
        res.status(400).send({message: `${err.message} - Id do Tipo não localizado.`})
      } else {
        res.status(200).send(tipos);
      }
    })
  }

  static cadastrarTipo = (req, res) => {
    let tipo = new tipos(req.body);

    tipo.save((err) => {

      if(err) {
        res.status(500).send({message: `${err.message} - falha ao cadastrar Tipo.`})
      } else {
        res.status(201).send(tipo.toJSON())
      }
    })
  }

  static atualizarTipo = (req, res) => {
    const id = req.params.id;

    tipos.findByIdAndUpdate(id, {$set: req.body}, (err) => {
      if(!err) {
        res.status(200).send({message: 'Tipos atualizado com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

  static excluirTipo = (req, res) => {
    const id = req.params.id;

    tipos.findByIdAndDelete(id, (err) => {
      if(!err){
        res.status(200).send({message: 'Tipos removido com sucesso'})
      } else {
        res.status(500).send({message: err.message})
      }
    })
  }

}

export default TipoController