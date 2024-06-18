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

module.exports = router;
