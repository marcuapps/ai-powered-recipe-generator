import React from 'react';
import styled from 'styled-components';

const RecipePreviewContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 32px 16px 32px;
  margin-top: 16px;
  background-color: #f9f9f9;
`;

const RecipeDetails = styled.div`
  margin-bottom: 16px;

  div {
    margin-bottom: 4px;
  }
`;

const RecipeSection = styled.div`
  margin-bottom: 16px;

  h3 {
    margin-bottom: 8px;
    font-weight: bold;
  }

  ul {
    padding-left: 20px;
  }

  li {
    margin-bottom: 4px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
`;

const Label = styled.div`
  text-align: center;
`;

const RecipePreview = ({ isLoading, recipe }) => {
  if (!isLoading && recipe.length === 0) {
    return <Label>No recipe to display</Label>;
  } else if (isLoading) {
    return <Label>We are generating your recipe...</Label>
  }

  return (
    <RecipePreviewContainer>
      <Title>{recipe.title}</Title>
      <RecipeDetails>
        <div>
          <strong>Prep Time:</strong> {recipe.prepTime}
        </div>
        <div>
          <strong>Cook Time:</strong> {recipe.cookTime}
        </div>
        <div>
          <strong>Difficulty:</strong> {recipe.difficulty}
        </div>
      </RecipeDetails>
      <RecipeSection>
        <h3>Ingredients</h3>
        <ul>
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </RecipeSection>
      <RecipeSection>
        <h3>Instructions</h3>
        <ul>
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </RecipeSection>
    </RecipePreviewContainer>
  );
};

export default RecipePreview;
