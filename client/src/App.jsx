import React, { useState } from 'react';
import axios from 'axios';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipePreview from './components/RecipePreview/RecipePreview';

function App() {
  const [recipes, setRecipes] = useState([]);

  const fetchRecipes = async (ingredients) => {
    try {
      const response = await axios.post('http://localhost:5001/api/recipes', { ingredients });
      var responseContent = response.data.choices[0].message.content.trim();
      responseContent = responseContent.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
      const recipe = JSON.parse(responseContent);
      setRecipes(recipe);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <h1>AI-Powered Recipe Generator</h1>
      <RecipeForm onIngredientsSubmit={fetchRecipes} />
      <RecipePreview recipe={recipes} />
    </div>
  );
}

export default App;
