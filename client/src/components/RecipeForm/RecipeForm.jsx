import React, { useState } from 'react';
import './RecipeForm.css'; // Optionally, add some styles

const RecipeForm = ({ onIngredientsSubmit }) => {
  const [ingredients, setIngredients] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredients.trim() === '') {
      setError('Ingredients cannot be empty');
      return;
    }
    onIngredientsSubmit(ingredients.split(',').map(ingredient => ingredient.trim()));
    setIngredients('');
    setError('');
  };

  return (
    <form className="recipe-form" onSubmit={handleSubmit}>
      <label htmlFor="ingredients">Enter ingredients (comma-separated):</label>
      <input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="e.g., chicken, broccoli, rice"
      />
      <button type="submit">Submit</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default RecipeForm;
