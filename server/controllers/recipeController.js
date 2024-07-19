const { OpenAI } = require('openai');
const Recipe = require('../models/recipeModel');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const generateRecipe = async (req, res) => {
  const { ingredients } = req.body;
  const prompt = `Create a detailed recipe with the following ingredients: ${ingredients.join(', ')}. Please format the response as JSON with the following fields: { "title": "Recipe Title", "ingredients": ["ingredient1", "ingredient2", ...], "instructions": ["Step 1", "Step 2", ...], "prepTime": "15 mins", "cookTime": "30 mins", "difficulty": "Easy" }`;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          "role": "user",
          "content": [
            {
              "type": "text",
              "text": prompt
            }
          ]
        },
      ],
      temperature: 1,
      max_tokens: 512,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });

    res.json(response);
  } catch (error) {
    console.error('Error fetching recipes:', error);
    res.status(500).json({ error: 'Failed to fetch recipe. Please try again later.' });
  }
};

module.exports = { generateRecipe };
