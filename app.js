const express = require("express");
const mongoose = require("mongoose");
const Product = require("./model/Product");
const app = express();

// Trying to connect with the database
mongoose
  .connect(
    "mongodb+srv://pierrot:pbtomongopossible12@exos.uijotis.mongodb.net/ecom?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));

app.use(express.json());

app.get("/products/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: "Internal error", error });
  }
});

app.post("/products/product", async (req, res) => {
  const product = new Product({ ...req.body });
  // const p = { ...req.body };
  // res.status(201).json({ p });
  try {
    await product.save();
    res.status(201).json({ message: "Product saved" });
  } catch (error) {
    res.status(501).json({ message: "Internal error", error });
  }
});

module.exports = app;
