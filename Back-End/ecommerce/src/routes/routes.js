const express = require("express");
const router = express.Router();
const prodModel = require("../model/prodModel");

router.get("/", async (req, res) => {
  try {
    let response = await prodModel.find({});
    res.json({
      status: "ok",
      data: response,
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/novo", async (req, res) => {
  try {
    let data = await prodModel.create({
      nomeProduto: req.body.produto,
      precoProduto: req.body.preco,
      imgProduto: req.body.imagem,
    });

    res.json({
      status: "ok",
      data: data,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
