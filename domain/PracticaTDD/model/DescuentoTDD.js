
///*------------------------------------------------------------------------------------------------------------------------------
// PARTE 1: Producto y Descuentos - TDD

// GREEN
// npm run test:1  -> Corremos ProductoParte1.test.js -> NO DEBERIA FALLAR AHORA

export class DescuentoPorcentaje {
  #porcentaje;

  constructor(porcentaje) {
    this.porcentaje = porcentaje;
  }
  
  aplicar(precioBase) {
    return precioBase - (precioBase * (this.porcentaje / 100));
  }

}

//------------------------------------------------------------------------------------------------------------------------------*/
  

/*------------------------------------------------------------------------------------------------------------------------------
// PARTE 1: Producto y Descuentos - TDD

//REFACTOR
//Usamos un Strategy para el descuento, con logica generica, e independiente para cada uno que la implemente.
//Descuento funciona como interfaz común.


export class Descuento {
  aplicar(precioBase) {
    throw new Error("Metodo aplicar() debe ser implementado");
  }
}

export class DescuentoPorcentaje extends Descuento {
  #porcentaje;
  
  constructor(porcentaje) {
    super();
    this.porcentaje = porcentaje;
  }

  aplicar(precioBase) {
    return precioBase - (precioBase * (this.porcentaje / 100));
  }

}

//------------------------------------------------------------------------------------------------------------------------------*/






/*------------------------------------------------------------------------------------------------------------------------------
// PARTE 3: Gestión de Descuentos Complejos - TDD

export class Descuento {
  
  aplicar(precioBase, cantidad = 1) {
    throw new Error("Metodo aplicar() debe ser implementado");
  }

}


export class DescuentoFijo extends Descuento {
  #monto;
  
  constructor(monto) {
    super();
    this.monto = monto;
  }

  aplicar(precioBase, cantidad = 1) {
    return Math.max(0, precioBase * cantidad - this.monto);
  }

}

export class Descuento3por2 extends Descuento {
  
  aplicar(precioBase, cantidad = 1) {
    const descuentoCantidad = Math.floor(cantidad / 3);
    return (cantidad - descuentoCantidad) * precioBase;
  }

}


//------------------------------------------------------------------------------------------------------------------------------*/






/*------------------------------------------------------------------------------------------------------------------------------
// ACTIVIDAD EXTRA:  Implementar DescuentoPorMontoMinimo - TDD


export class DescuentoPorMontoMinimo extends Descuento {
  #montoMinimo;
  #descuento;

  constructor(montoMinimo, descuento) {
    super();
    this.montoMinimo = montoMinimo;
    this.descuento = descuento;
  }

  aplicar(total, cantidad = 1) {
    // total podría ser precio base * cantidad o un total ya calculado
    if (total >= this.montoMinimo) {
      return total - this.descuento;
    }
    return total;
  }

}

//------------------------------------------------------------------------------------------------------------------------------*/
