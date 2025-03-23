const swaggerJSDoc = require('swagger-jsdoc');
const port = process.env.PORT || 3000;
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Buffet API',
      version: '1.0.0',
      description: 'API for Buffet Project',
    },

  },
  apis: ['./app/docs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
