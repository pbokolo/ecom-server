const express = require("express");

const app = express();
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
