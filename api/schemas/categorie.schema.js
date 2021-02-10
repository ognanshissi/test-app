const mongoose = require("mongoose");

const categorieSchema = mongoose.Schema({
  name: { type: String}
});


module.exports = mongoose.model("Categorie", categorieSchema);