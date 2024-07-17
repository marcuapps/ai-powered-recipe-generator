const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5001;

const recipeRoutes = require('./routes/recipes');
app.use('/api', recipeRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
