import express from 'express';
import bodyParser from 'body-parser';
import Producto from '../domain/Producto.js';
import Carrito from '../domain/Carrito.js';
import ItemCarrito from '../domain/ItemCarrito.js';
import { DescuentoPorcentual, DescuentoFijo } from '../domain/Descuento.js';

/*
//SWAGGER
import swagger from './swagger/swagger-config.js'; //SWAGGER
import './swagger/swagger-routes.js';
*/


//----------------------------> INICIALIZACION DE EXPRESS

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

/*
//SWAGGER
app.use('/api-docs', swagger.serve, swagger.setup); 
*/


//----------------------------> CARGA DE OBJETOS


//Simulacion de productos base (Se pueden agregar por enpoint pero no es simple para la primera vuelta)
const productosDisponibles = [
    new Producto("Leche", 200, new DescuentoPorcentual(10)),  
    new Producto("Pan", 150, new DescuentoFijo(20)),          
    new Producto("Huevos", 300),                              
];

//Nuevo carrito
const carrito = new Carrito();


//----------------------------> ENDPOINTS

//GET: Obtener todos los productos
app.get('/productos', (req, res) => {
    res.json(productosDisponibles.map(p => p.toJSON()));
});


// GET: Buscar producto por nombre desde query param
app.get('/producto', (req, res) => {
  const nombre = req.query.nombre;
  if (!nombre) {
      return res.status(400).json({ error: "Falta el parámetro 'nombre'" });
  }
  const producto = productosDisponibles.find(p => p.nombre === nombre);
  if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
  }
  res.status(200).json(producto.toJSON());
});


//POST: Agregar producto al carrito con nombre ya existente desde un body
app.post('/carrito', (req, res) => {
  const { nombre, cantidad } = req.body;
  const producto = productosDisponibles.find(p => p.nombre === nombre);

  if (!producto) {
      return res.status(404).json({ error: "Producto no encontrado" });
  }

  const item = new ItemCarrito(producto, cantidad || 1);
  carrito.agregarItem(item);

  res.status(201).json({
      mensaje: "Producto agregado al carrito",
      item: item.toJSON()
  });
});


//GET: Obtener contenido del carrito con precios aplicados
app.get('/carrito', (req, res) => {
  res.json(carrito.obtenerDetalle());
});


//GET: Obtener total final con descuentos aplicados
app.get('/carrito/total', (req, res) => {
    res.json({ total: carrito.precioTotal() });
});


//ESTA HAY QUE EXPLICAR UN POQUTIO MAS CAPAZ
//POST: Agrega un producto con nombre, precio, tipoDesc y valorDesc
app.post('/productos', (req, res) => {
    const { nombre, precioBase, tipoDescuento, valorDescuento } = req.body;
  
    if (!nombre || !precioBase) {
      return res.status(400).json({ error: "Faltan campos obligatorios (nombre, precioBase)" });
    }
  
    let descuento = null;
    if (tipoDescuento === 'porcentaje') {
      descuento = new DescuentoPorcentaje(valorDescuento);
    } else if (tipoDescuento === 'fijo') {
      descuento = new DescuentoFijo(valorDescuento);
    }
  
    const nuevoProducto = new Producto(nombre, precioBase, descuento);
    productosDisponibles.push(nuevoProducto);
  
    res.status(201).json({ mensaje: "Producto creado", producto: nuevoProducto.toJSON() });
  });
  


//LOG DE SERVER
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



