const express = require('express');
const appRoutes = require('./src/FoodDeliveryApp/routes');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swaggerSpec');

const app = express();

app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/api/v1/fooddeliveryapp", appRoutes);

module.exports = app;
