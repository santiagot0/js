class Guitarra { //definiendo los atributos que va a tener el objeto Guitarra
    constructor(id, marca, modelo, precio, stock) {
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.precio = precio
        this.stock = stock
    }
}

const guitarra1 = new Guitarra(1, "Fender", "Stratocaster", 1400, 2)
const guitarra2 = new Guitarra(2, "Fender", "Telecaster", 1300, 1)
const guitarra3 = new Guitarra(3, "Gibson", "Les Paul", 2300, 3)
const guitarra4 = new Guitarra(4, "Gibson", "SG", 1900, 4)
const guitarra5 = new Guitarra(5, "Gibson", "ES-335", 4300, 1)

const guitarras = [guitarra1, guitarra2, guitarra3, guitarra4, guitarra5]

const carrito = [] //array vacío a llenarse en el carrito


//Asignando los botones
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const boton3 = document.getElementById("boton3")
const boton4 = document.getElementById("boton4")
const boton5 = document.getElementById("boton5")
const boton6 = document.getElementById("boton6")

//Eventos de los botones (en principio que muestre lo que se agrega)
boton1.addEventListener("click", () => {
    console.log(`Se agregó al carrito ${guitarra1.marca} ${guitarra1.modelo} (u$s ${guitarra1.precio})`)
    carrito.push(guitarra1)
})
boton2.addEventListener("click", () => {
    console.log(`Se agregó al carrito ${guitarra2.marca} ${guitarra2.modelo} (u$s ${guitarra2.precio})`)
})
boton3.addEventListener("click", () => {
    console.log(`Se agregó al carrito ${guitarra3.marca} ${guitarra3.modelo} (u$s ${guitarra3.precio})`)
})
boton4.addEventListener("click", () => {
    console.log(`Se agregó al carrito ${guitarra4.marca} ${guitarra4.modelo} (u$s ${guitarra4.precio})`)
})
boton5.addEventListener("click", () => {
    console.log(`Se agregó al carrito ${guitarra5.marca} ${guitarra5.modelo} (u$s ${guitarra5.precio})`)
})



