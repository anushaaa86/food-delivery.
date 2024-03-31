const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Food Delivery API',
      version: '1.0.0',
      description: 'API for calculating delivery costs for food items based on various factors.',
    },
    servers : [{
      url : 'http://localhost:3000'
    }]
  },
  apis: ['src/FoodDeliveryApp/routes.js'], // Path to the API routes
};

const specs = swaggerJsdoc(options);

module.exports = specs;
