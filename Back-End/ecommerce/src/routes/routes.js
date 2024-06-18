const express = require(express);
const router = express.Router();
const prodModel = require("../model/prodModel");

router.get("/home", async (req, res) => {
  let response = await prodModel.find({});
  res.json({
    status: "ok",
    data: response,
  });
});

router.post("/novo", async (req, res) => {
  let data = await prodModel.create({
    nomeProduto: req.body.produto,
    precoProduto: req.body.preco,
    imgProduto: req.body.imagem,
  });

  res.json({
    status: "ok",
    data: data,
  });
});

module.exports = router;
