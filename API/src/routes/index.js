import  express  from "express";
import produtos from "./produtosRoutes.js"
import tipos from "./tiposRoutes.js";

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({titulo: "Dashboard"})
  })

  app.use(
    express.json(),
    produtos,
    tipos
  )
}

export default routes;