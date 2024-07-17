import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [recipes, setRecipes] = useState([]);
  const ingredients = "rice, chicken, broccoli, onion"

  const fetchRecipes = async (ingredients) => {
    try {
      const response = await axios.post('http://localhost:5001/api/recipes', { ingredients });
      const responseContent = response.data.choices[0].message.content;
      const recipe = JSON.parse(responseContent.trim());
      setRecipes(JSON.stringify(recipe));
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  return (
    <div className="App">
      <h1>AI-Powered Recipe Generator</h1>
      <button onClick={() => fetchRecipes(ingredients.split(','))}>Fetch recipe</button>
      <div>{recipes}</div>
    </div>
  );
}

export default App;
