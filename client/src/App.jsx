import React, { useState } from 'react';
import axios from 'axios';
import RecipePreview from './components/RecipePreview/RecipePreview';

function App() {
  const [recipes, setRecipes] = useState([]);
  // const ingredients = "rice, chicken, broccoli, onion"
  const ingredients = "pasta, eggs, bacon, parmesan cheese"

  const fetchRecipes = async (ingredients) => {
    try {
      const response = await axios.post('http://localhost:5001/api/recipes', { ingredients });
      const responseContent = response.data.choices[0].message.content;
      const recipe = JSON.parse(responseContent);
      setRecipes(recipe);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <h1>AI-Powered Recipe Generator</h1>
      <button onClick={() => fetchRecipes(ingredients.split(','))}>Fetch recipe</button>
      <RecipePreview recipe={recipes} />
    </div>
  );
}

export default App;
