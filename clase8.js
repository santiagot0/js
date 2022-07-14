/* const parrafo1 = document.getElementById("parrafo1")
const parrafos = document.getElementsByClassName

console.log(document.getElementById("parrafo1"))
console.log(document.getElementsByClassName("parrafos"))[0].children[0]
console.log(parrafo1.textContent) */


 class Producto {
    constructor(id, nombre, marca, precio, stock) {
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock
    }
 }

 const producto1 = new Producto(1, "Pan", "Bimbo", 200, 10)
 const producto2 = new Producto(2, "Fideos", "Luccheti", 150, 30)
 const producto3 = new Producto(3, "Yerba", "Rosamonte", 390, 34)
 const producto4 = new Producto(4, "Salsa", "La Campagnola", 80, 21)
 const producto5 = new Producto(5, "Dulce de leche", "Ilolay", 190, 8)


 productos.forEach(productoArray => {
    divProductos.innerHTML += `
        <div id="producto${productoArray.id}" class="productos">
            <p>Nombre: ${productoArray.nombre}</p>
            <p>Marca: ${productoArray.marca}</p>
            <p>Precio: ${productoArray.precio}</p>
            <p>Stock: ${productoArray.stock}</p>
        </div>`
})


