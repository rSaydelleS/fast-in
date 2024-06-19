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
  const { produto, preco, imagem } = req.body;
  try {
    let data = await prodModel.create({
      nomeProduto: produto,
      precoProduto: preco,
      imgProduto: imagem,
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
