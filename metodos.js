/* console.log()

Object.freeze() */

//Los métodos son funciones dentro de objetos. Hay que llamar a estos para que funcionen

class Producto {
    constructor(nombre, marca, precio, stock) {
       this.nombre = nombre
       this.marca = marca
       this.precio = precio
       this.stock = stock
    }

    aumentarPrecio(porcentajeAumento) {
        this.precio *= porcentajeAumento
    }

    aplicardescuento(porcentajeDescuento) {
        this.precio -= (this.precio *= porcentajeDescuento)
    }

    aumentarStock(nuevoStock) {
        this.stock += nuevoStock
    }

    disminuirStock(nuevoStock) {
        this.stock -= nuevoStock
    }
}

const producto1 = new Producto("Yerba mate", "La Yerbita", 400, 20)
const producto2 = new Producto("Café", "Cabrales", 500, 10)
const producto3 = new Producto("Fideos", "Fideito", 100, 30)

Object.freeze(producto1)
producto1.mostrarProducto()
producto1.aumentarPrecio()
