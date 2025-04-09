import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'MegaSuper API',
    version: '1.0.0',
    description: 'Documentación de la API de MegaSuper',
  },
  servers: [
    {
      url: 'http://localhost:3000',
      description: 'Servidor local',
    },
  ],
};


const options = {
    swaggerDefinition,
    apis: ['./PracticaREST/swagger/swagger-routes.js'], 
  }


/* Otra forma es agregando comentarios en cada endpoint pero enscucia el archivo en el que queremos tener solo las rutas y configuraciones REST
  const options = {
    swaggerDefinition,
    apis: ['./server.js'], 
    // Podemos agregar mas archivos para documentar cada modulo en caso que queramos
  };
*/

const swaggerSpec = swaggerJSDoc(options);

export default {
  serve: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerSpec),
};
