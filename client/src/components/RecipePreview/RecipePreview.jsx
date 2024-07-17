import React from 'react';
import './RecipePreview.css'; // Import the CSS file for styling

const RecipePreview = ({ recipe }) => {
  if (recipe.length === 0) {
    return <div>No recipe to display</div>;
  }

  return (
    <div className="recipe-preview">
      <h2 className="recipe-title">{recipe.title}</h2>
      <div className="recipe-details">
        <div>
          <strong>Prep Time:</strong> {recipe.prepTime}
        </div>
        <div>
          <strong>Cook Time:</strong> {recipe.cookTime}
        </div>
        <div>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </div>
      </div>
      <div className="recipe-section">
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>
      <div className="recipe-section">
        <h3>Instructions</h3>
        <ul>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipePreview;
