/* const impuestoPais = (producto) => producto * 1.30
const impuestoRetenciones = (producto) => producto * 1.35
const impuestoIVA = (producto) => producto * 1.21
const impuestoX = (producto) => producto * 1.10

function calcularImpuestos(producto) {
    return precio + impuestoPais(producto) + impuestoRetenciones(producto) + impuestoIVA(producto) + impuestoX(producto)
}

let precioFinal = calcularImpuestos(100)

console.log(precioFinal) */

class Persona {
    constructor(id, nombre, apellido, edad, sueldo) {
        this.id = this.id
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.sueldo = sueldo
    }
}
/* const persona1 = new Persona(prompt("Ingrese un nombre"), prompt("Ingrese un apellido"), parseInt(prompt("Ingrese una edad")), parseFloat(prompt("Ingrese un sueldo"))) */

const persona1 = new Persona(1, "Pepe", "Perez", 30, 10000)
const persona2 = new Persona(2, "Maria", "Martinez", 22, 15000)
const persona3 = new Persona(3, "Pedro", "Parker", 28, 12000)
const persona4 = new Persona(4, "Fernanda", "Fernandez", 30, 18000)
const persona5 = new Persona(5, "Pedro", "Carles", 30, 19000)

const personas = [persona1, persona2, persona3, persona4, persona5]

/* personas.forEach(persona => {
    persona.sueldo *= 1.30
    console.log(persona)
})
 */
//const personaArray = (persona) => console.log(persona)

/* let nombreABuscar = prompt("Ingrese un nombre")
let apellidoABuscar = prompt("Ingrese un apellido") */

/* console.log(personas.find(persona => persona.nombre == nombreABuscar) && apellido.nombre == apellidoABuscar) */

/* const personasFiltradas = personas.filter(persona => persona.sueldo > 12000)

personasFiltradas.forEach(persona => {
    console.log(persona)
}) */


/* 
let consulta = (personas.some(persona => persona.sueldo > 20000))

if(consulta) {
    console.log(personas.filter(personas => persona.sueldo >20000))
} else {
    console.log("No existen personas cuyo sueldo sea superior a 20000")
} */

//let acumulador = 0
//const sueldos = personas.map(persona => persona = {sueldo: persona.sueldo, id: persona.id})

/* sueldos.forEach(sueldo => {
    acumulador += sueldo
})
 */

/* console.log(sueldos)
const sueldosAcum = sueldos.slice(0,3)
let acumulador = sueldosAcum.reduce((prev, act) => prev + act, 0)
console.log(acumulador)
 */

//SORT para ordenar los elementos

const sueldos = personas.map(persona => persona.sueldo)

console.log(sueldos.sort((a, b) => a-b))
console.log(sueldos.sort((a, b) => b-a))
