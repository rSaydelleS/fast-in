const mongoose = require("mongoose");
const conn = require("../connection/bdconect");

conn();
const prodSchema = mongoose.Schema(
  {
    nomeProduto: String,
    precoProduto: Number,
    imgProduto: String,
  },
  {
    timestemp: true,
  }
);

const prodModel = mongoose.model("produto", prodSchema);
module.exports = prodModel;
