
///*------------------------------------------------------------------------------------------------------------------------------
// PARTE 2: Carrito de Compras y ItemCarrito - TDD 

// GREEN

export class Carrito {
    #items;
  
    constructor() {
      this.items = [];
    }
  
    agregarProducto(producto, cantidad) {
      this.items.push(new ItemCarrito(producto, cantidad));
    }
  
    getItems() {
      return this.items;
    }
  
    obtenerTotal() {
      return this.items.reduce((total, item) => total + item.getSubtotal(), 0);
    }
      
}

export class ItemCarrito {
   #producto;
   #cantidad;
    
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }
  
    getSubtotal() {
      return this.producto.calcularPrecioFinal() * this.cantidad;
    }

}

//-------------------------------------------------------------------------------------------------------------------------------*/






/*------------------------------------------------------------------------------------------------------------------------------
// PARTE 3: Gestión de Descuentos Complejos - TDD

// Para los descuentos 3x2 ya no se encarga el producto porque no deberia importarle su cantidad
// Podemos hacer que el item del carrito genera esa propia logica, y que los descuentos acepten una cantidad

export class ItemCarrito {
    #producto;
    #cantidad;
    
    constructor(producto, cantidad) {
      this.producto = producto;
      this.cantidad = cantidad;
    }

    getSubtotal() {
        const precioBase = this.producto.getPrecioBase();
        const descuento = this.producto.getDescuento();
    
        if (descuento) {
          return descuento.aplicar(precioBase, this.cantidad);
        }
    
        return precioBase * this.cantidad;
    }
}

//------------------------------------------------------------------------------------------------------------------------------*/