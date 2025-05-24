// PARTE 2: Carrito de Compras y ItemCarrito - TDD 

// RED

import { Carrito } from '../model/CarritoTDD.js';
import { Producto } from '../model/ProductoTDD.js';
import { DescuentoPorcentaje } from '../model/DescuentoTDD.js';

describe('Carrito de Compras', () => {
  
  test('Deberia agregar el producto al carrito', () => {
    const carrito = new Carrito();
    const producto = new Producto("Manzana", "Frutas", 100.0, null);
    carrito.agregarProducto(producto, 2);

    expect(carrito.getItems().length).toBe(1);
    expect(carrito.obtenerTotal()).toBe(200.0); // 100 * 2
  });

  test('Deberia aplicar el descuento en el carrito', () => {
    const carrito = new Carrito();
    const producto = new Producto("Manzana", "Frutas", 100.0, new DescuentoPorcentaje(10));
    carrito.agregarProducto(producto, 2);

    expect(carrito.obtenerTotal()).toBe(180.0); // 90 * 2
  });

});
