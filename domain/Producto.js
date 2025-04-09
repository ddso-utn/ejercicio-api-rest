export class Producto {

    #precioBase

    constructor(nombre, precioBase) {
        this.nombre = nombre
        this.#precioBase = precioBase
    }

    /*
    //Si queremos que se guarde el descuento
    #descuento

    constructor(nombre, precioBase, descuento = null) {
        this.nombre = nombre
        this.#precioBase = precioBase
        this.#descuento = descuento
    }
    
    get descuento() {
        return this.#descuento
    }

    calcularPrecioFinal(cantidad = 1) {
        let descuentoAplicado = 0
        if (this.#descuento) {
            descuentoAplicado = this.#descuento.valorDescontado(this.#precioBase, cantidad)
        }
        return (this.#precioBase * cantidad) - descuentoAplicado
    }
    */

    get precioBase() {
        return this.#precioBase
    }

    set precioBase(nuevoPrecio) {
        this.#precioBase = nuevoPrecio
    }
}

export default Producto;