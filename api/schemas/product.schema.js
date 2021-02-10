const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  category:{ type: mongoose.Schema.Types.ObjectId, ref: "Categorie", required: true },
  name: { type: String},
  price: {type: String},
  description: {type: String}
  
});


module.exports = mongoose.model("Product", productSchema);