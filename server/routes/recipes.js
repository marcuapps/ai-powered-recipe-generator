const express = require('express');
const router = express.Router();
const { generateRecipe } = require('../controllers/recipeController');

router.post('/recipes', generateRecipe);

module.exports = router;
