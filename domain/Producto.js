export class Producto {

    #precioBase

    constructor(nombre, precioBase) {
        this.nombre = nombre
        this.#precioBase = precioBase
    }

    get precioBase() {
        return this.#precioBase
    }

    set precioBase(nuevoPrecio) {
        this.#precioBase = nuevoPrecio
    }
    
    toJSON(){
        return {
            nombre: this.nombre,
            precioBase: this.precioBase
        };
    }
}




export default Producto;