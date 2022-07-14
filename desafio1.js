class Guitarra {
    constructor(id, marca, modelo, precio, stock) {
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.stock = stock
    }
}

const guitarra1 = new Guitarra(1, "Fender", "Stratocaster", 1400, 1)
const guitarra2 = new Guitarra(2, "Fender", "Telecaster", 1300, 1)
const guitarra3 = new Guitarra(3, "Gibson", "Les Paul", 2300, 1)
const guitarra4 = new Guitarra(4, "Gibson", "SG", 1900, 1)
const guitarra5 = new Guitarra(5, "Gibson", "ES-335", 4300, 1)

const guitarras = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5]

const carrito = []



