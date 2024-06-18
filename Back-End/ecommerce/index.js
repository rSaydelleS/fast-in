const express = require("express");
const app = express();
const port = 5173;
const routes = require("./src/routes/routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`servidor operacional na porta: ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "servidor no ar",
    status: "Ok",
  });
});

app.use("/home", routes);
