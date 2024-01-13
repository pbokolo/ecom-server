const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: Object, required: true },
});

// Exports the model to make it usable
module.exports = mongoose.model("Products", productSchema);
