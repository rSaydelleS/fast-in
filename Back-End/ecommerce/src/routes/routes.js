const express = require("express");
const router = express.Router();
const prodModel = require("../model/prodModel");
const salvar = require("../../config/multer");

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

router.post("/novo", salvar.single("file"), async (req, res) => {
  const { produto, preco } = req.body;
  const file = req.file;
  console.log(produto, preco);
  console.log(file);

  // try {
  //   let data = await prodModel.create({
  //     nomeProduto: produto,
  //     precoProduto: preco,
  //     imgProduto: file.path,
  //   });

  //   res.json({
  //     status: "ok",
  //     data: data,
  //   });
  // } catch (error) {
  //   console.log(error);
  // }
});

module.exports = router;
