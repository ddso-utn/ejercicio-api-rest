export class Carrito {
    items

    constructor() {
        this.items = []
    }

    precioTotal() {
        return this.items.reduce((prev, curr) => prev + curr.precioFinal(), 0)
    }
    
    agregarItem(item) {
        this.items.push(item)
    }

    obtenerDetalle() {
        return this.items.map(item => item.toJSON());
    }
    
    /*
    //Este lo podemos usar cuando agregamos 2 leches para mostrar en vez de 2 objetos, 1 solo con cantidad 2
    agregarItem(nuevoItem) {
        const itemExistente = this.items.find(
            item => item.producto.nombre === nuevoItem.producto.nombre
        );
    
        if (itemExistente) {
            itemExistente.cantidad += nuevoItem.cantidad;
        } else {
            this.items.push(nuevoItem);
        }
    }*/
    
}

export default Carrito;
