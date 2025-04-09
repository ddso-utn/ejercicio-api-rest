//Creamos un servidor:
import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola desde Express!');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});

//Corremos:
//CD PracticaREST
//node example-server.js

//En navegador:
//http://localhost:3000/