// PARTE 3: Gestión de Descuentos Complejos - TDD


import { Carrito } from '../model/CarritoTDD';
import { Producto } from '../model/ProductoTDD';
import { DescuentoFijo, Descuento3por2 } from '../model/DescuentoTDD.js';


describe('Descuentos Complejos', () => {
    
    test('Deberia aplicar descuento fijo', () => {
        const descuento = new DescuentoFijo(10);
        expect(descuento.aplicar(50)).toBe(40);
    });

    test('Deberia aplicar descuento 3x2', () => {
        const descuento = new Descuento3por2();
        expect(descuento.aplicar(20, 3)).toBe(40); // Paga 2 x 20
    });

});


describe('Carrito con productos con distintos descuentos', () => {
  
    test('deberia calcular correctamente el total con descuentos mixtos', () => {
        const carrito = new Carrito();

        // Producto A sin descuento
        const productoA = new Producto('Lapicera', 'Utiles', 100);
        carrito.agregarProducto(productoA, 2); // 2 x 100 = 200

        // Producto B con descuento fijo de 50
        const productoB = new Producto('Cuaderno', 'Utiles', 300, new DescuentoFijo(50));
        carrito.agregarProducto(productoB, 1); // 1 x 300 - 50 = 250

        // Producto C 3x2
        const productoC = new Producto('Gaseosa', 'Alimentos', 150, new Descuento3por2());
        carrito.agregarProducto(productoC, 3); // 3 x 150 = 450 → paga 2 x 150 = 300

        const total = carrito.obtenerTotal();

        // 200 (Lapiceras) + 250 (Cuaderno con desc fijo) + 300 (Gaseosas 3x2) = 750
        expect(total).toBe(750);
  });

});
