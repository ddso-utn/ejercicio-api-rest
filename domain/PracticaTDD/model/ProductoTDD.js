// PARTE 1: Producto y Descuentos - TDD

// GREEN
// npm run test:1  -> Corremos ProductoParte1.test.js -> NO DEBERIA FALLAR AHORA

export class Producto { 
    #nombre;
    #categoria;
    #precioBase;
    #descuento;

    constructor(nombre, categoria, precioBase, descuento = null) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.precioBase = precioBase;
      this.descuento = descuento;
    }
  
    getPrecioBase() {
      return this.precioBase;
    }

    getDescuento() {
      return this.descuento;
    }
  
    calcularPrecioFinal() {
      return this.descuento ? this.descuento.aplicar(this.precioBase) : this.precioBase;
    }

}
  

  