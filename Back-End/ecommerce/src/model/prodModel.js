const mongoose = require("mongoose");
const conn = require("../connection/bdconect");

conn();
const prodSchema = mongoose.Schema(
  {
    nomeProduto: { type: String, required: true },
    precoProduto: { type: String, required: true },
    imgProduto: { type: String, required: true },
    categoria: { type: String },
  },
  {
    timestamps: true,
  }
);

const prodModel = mongoose.model("produto", prodSchema);
module.exports = prodModel;
