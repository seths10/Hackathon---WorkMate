const swaggerAutogen = require('swagger-autogen')();

// const doc = {
//   info: {
//     title: 'workmate',
//     description: 'Description'
//   },
//   host: 'localhost:3000'
// };

const doc = {
  info: {
    version: '1.0.0',
    title: 'workmate',
    description: 'Future of Education and Smart Technology'
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'development server'
    },
    { 
      url: 'https://workmate-u6j3.onrender.com',
      description: 'production server'
    }
  ],
  tags: [
    {
      name: 'User',
      description: 'Endpoints'
    },
    {
      name: 'Desk',
      description: 'Endpoints'
    },
    {
      name: 'Booking',
      description: 'Endpoints'
    },
    {
      name: 'Community',
      description: 'Endpoints'
    }  
  ],
  components: {}
};

const outputFile = './src/swagger-out.json';
const routes = ['./src/app.ts'];

swaggerAutogen(outputFile, routes, doc);