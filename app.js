const express = require("express");
const mongoose = require("mongoose");
const app = express();

// Trying to connect with the database
mongoose
  .connect(
    "mongodb+srv://pierrot:pbtomongopossible12@exos.uijotis.mongodb.net/ecom?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch((error) => console.log("Connexion à MongoDB échouée !", error));

const stuffs = [
  {
    title: "Samsung Galaxy S10",
    description: "Smartphone de seconde main en bon état",
    prix: 150,
    monnaie: { code: "usd", label: "$" },
  },
  {
    title: "Cable USB-C",
    description:
      "Cable usb-c pour la recharge des appareils et le transfert des données",
    prix: 4500,
    monnaie: { code: "cdf", label: "FC" },
  },
];

app.get("/", (req, res) => {
  res.status(200).json({ stuffs });
});

module.exports = app;
