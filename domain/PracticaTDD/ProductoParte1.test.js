// PARTE 1: Producto y Descuentos - TDD


// Instalamos Jest: npm install --save-dev jest
// Cambiar "scripts"


// RED
// npm run test:1  -> Corremos ProductoParte1.test.js -> FALLA

import { Producto } from './ProductoTDD.js';
import { DescuentoPorcentaje } from './DescuentoTDD.js';

describe('Producto', () => {
  
  test('Deberia crear producto con nombre, categoria y precio', () => {
    const producto = new Producto("Manzana", "Frutas", 100.0, null);
    expect(producto.nombre).toBe("Manzana");
    expect(producto.categoria).toBe("Frutas");
    expect(producto.getPrecioBase()).toBe(100.0);
  });

  test('Deberia aplicar un descuento con el porcentaje adecuado', () => {
    const producto = new Producto("Manzana", "Frutas", 100.0, new DescuentoPorcentaje(10));
    expect(producto.calcularPrecioFinal()).toBe(90.0); // 100 - 10%
  });

});

