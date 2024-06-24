const express = require("express");
const router = express.Router();
const prodModel = require("../model/prodModel");
const upload = require("../../config/multer");
router.use(express.json());

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

router.post("/novo", upload.single("productImage"), async (req, res) => {
  const { produto, preco } = req.body;
  const imgProduto = req.file.path;
  try {
    let data = await prodModel.create({
      nomeProduto: produto,
      precoProduto: preco,
      imgProduto: imgProduto,
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
