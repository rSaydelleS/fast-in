require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const routes = require("./src/routes/routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

var corsOptions = {
  origin: "https://fast-in-iy4x.vercel.app",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.listen(port, () => {
  console.log(`servidor operacional na porta: ${port}`);
});
app.get("/", (req, res) => {
  res.status(200).json({
    mensagem: "servidor no ar",
    status: "Ok",
  });
});

app.use("/home", cors(corsOptions), routes);
