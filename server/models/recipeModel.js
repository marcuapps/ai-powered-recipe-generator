const mongoose = require('mongoose');

const RecipeSchema = new mongoose.Schema({
  ingredients: [String],
  recipe: String,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
