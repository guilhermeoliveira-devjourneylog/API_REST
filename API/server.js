import app from "./src/app.js";

//port do ambiente de produção ou desenvolvimento
const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`)
})

