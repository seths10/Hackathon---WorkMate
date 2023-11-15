const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'workmate',
    description: 'Description'
  },
  host: 'localhost:3000'
};

const outputFile = './src/swagger-out.json';
const routes = ['./src/app.ts'];

swaggerAutogen(outputFile, routes, doc);