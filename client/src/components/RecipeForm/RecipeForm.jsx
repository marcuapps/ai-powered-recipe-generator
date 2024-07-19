import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  padding: 16px 32px 16px 32px;
  margin: 16px 0;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
  text-align: center;
`;

const Input = styled.input`
  padding: 8px;
  margin-bottom: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SubmitButton = styled.button`
  padding: 8px;
  border: none;
  background-color: #007BFF;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Error = styled.p`
  color: red;
  margin-top: 8px;
`;

const RecipeForm = ({ onIngredientsSubmit }) => {
  const [ingredients, setIngredients] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredients.trim() === '') {
      setError('Ingredients cannot be empty');
      return;
    }
    onIngredientsSubmit(ingredients.split(',').map(ingredient => ingredient.trim()));
    setIngredients('');
    setError(null);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="ingredients">Enter ingredients (comma-separated):</Label>
      <Input
        type="text"
        id="ingredients"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="e.g., chicken, broccoli, rice"
      />
      <SubmitButton type="submit">Submit</SubmitButton>
      {error && <Error>{error}</Error>}
    </Form>
  );
};

export default RecipeForm;
