const express = require('express');
const nutritionApi = require('./nutrition-api');
const app = express();
app.use(express.json());
app.use(nutritionApi);
app.listen(3001, () => console.log('Server running'));