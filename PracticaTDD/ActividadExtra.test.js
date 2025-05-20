// Actividad Extra: Implementar DescuentoPorMontoMinimo

import { DescuentoPorMontoMinimo } from './DescuentoPorMontoMinimo';

describe('DescuentoPorMontoMinimo', () => {
  
  test('Deberia aplicar descuento si el total supera monto minimo', () => {
    const descuento = new DescuentoPorMontoMinimo(100, 10);
    const total = descuento.aplicar(150);
    expect(total).toBe(140); // 150 - 10 = 140
  });

  test('No deberia aplicar descuento si el total no supera monto minimo', () => {
    const descuento = new DescuentoPorMontoMinimo(100, 10);
    const total = descuento.aplicar(80);
    expect(total).toBe(80); // No se aplica el descuento
  });

});
