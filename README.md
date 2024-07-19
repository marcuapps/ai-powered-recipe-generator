# AI Recipe Generator

## Overview

The AI Recipe Generator is a web application that allows users to input a list of ingredients and generate a detailed recipe using the OpenAI GPT-3.5-turbo model. The application is built with a React frontend and an Express backend. The project demonstrates the integration of external APIs, proper error handling, and a structured project setup.

## Features

- Input ingredients to generate a recipe
- Display generated recipe with details like title, ingredients, instructions, preparation time, cooking time, and difficulty
- Handle loading states and errors gracefully
- Responsive design with styled-components

## Technologies Used

- Frontend: React, Axios, Styled-components
- Backend: Node.js, Express, Axios, Morgan
- AI: OpenAI GPT-3.5-turbo

## Setup and Installation

### Prerequisites

- Node.js and npm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/ai-recipe-generator.git
cd ai-recipe-generator
```

2. **Setup the server**

```bash
cd server
npm install
```

3. **Setup the client**

```bash
cd ../client
npm install
```

4. **Create a .env file in the server directory by copying env.example and putting your own OpenAI API key**

```bash
PORT=5001
OPENAI_API_KEY=your-openai-api-key
```

5. **Start the server**

```bash
cd server
npm start
```

6. **Start the client**

```bash
cd client
npm start
```

7. **Open the application in your browser**

Navigate to http://localhost:3000 to use the AI Recipe Generator.
