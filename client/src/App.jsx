import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RecipeForm from './components/RecipeForm/RecipeForm';
import RecipePreview from './components/RecipePreview/RecipePreview';

const AppWrapper = styled.div`
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex-column;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const ErrorMessage = styled.p`
  background-color: #f8d7da;
  color: #721c24;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchRecipes = async (ingredients) => {
    setIsLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/api/recipes', { ingredients });
      var responseContent = response.data.choices[0].message.content.trim();
      responseContent = responseContent.replace(/,\s*}/g, '}').replace(/,\s*]/g, ']');
      const recipe = JSON.parse(responseContent);
      setRecipes(recipe);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppWrapper>
      <Title>AI-Powered Recipe Generator</Title>
      <RecipeForm onIngredientsSubmit={fetchRecipes} />
      <RecipePreview isLoading={isLoading} recipe={recipes} />
    </AppWrapper>
    // <div className="App">
    //   <h1>AI-Powered Recipe Generator</h1>
    //   <RecipeForm onIngredientsSubmit={fetchRecipes} />
    //   <RecipePreview recipe={recipes} />
    // </div>
  );
};

export default App;
