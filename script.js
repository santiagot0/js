// Comentario de una linea

/* 
    Comentario multilinea
*/
/**
 * Comentario multi linea
 */

/* var nombre = "Cosme"; //String o texto
var apellido = "Fulanito";
var sueldo = 1000 //Number o numero
var esProfesor = true //Boolean o logicas
var esPropietario = null //null o vacio
var esPadre = undefined //undefined o indefinido

console.log(nombre)
nombre = 267381941
console.log(nombre)
nombre = true
console.log(nombre)
nombre = undefined
console.log(nombre)
 */
/* const valores = []
const cosas = [true, 56, "Hola", false, "Chau", 100]

console.log(cosas[10])

for(let i = 0; i < cosas.length; i++) {
    console.log(cosas[i])
} */

const alumnos1 = ["Camilo", "Julieta", "Santiago", "Luca"]
const alumnos2 = ["Rocio", "Juan", "Santiago", "Fernando"]

alumnos1.push("Brandon")// se agrega al final de la cadena
alumnos1.unshift("Francisco")// se agrega al principio de la cadena pero modifica los índices de los elementos

/* alumnos.shift()// elimina el primer elemento y modifica los índices de los demás
alumnos.pop()// elimina el último elemento del array
alumnos.slice(3, 1)// elimina la posición 3

let indice = alumnos.indexOf(nombreEliminar)

if(indice != -1) {
    alumnos.splice(indice,1)
} else {
    alert("Usuario no encontrado")
}
 */
const alumnosTotales = alumnos1.concat(alumnos2)
console.log(alumnosTotales)
console.log(alumnosTotales.slice(2,5))

console.log(alumnosTotales.includes("Santiago"))// chequea si hay un elemento "Santiago"

console.log(alumnosTotales.reverse())


class Perro {
    constructor(id, nombre, color, raza, cachorros) {
        this.id = id
        this.nombre = nombre
        this.color = color
        this.raza = raza
        this.cachorros = cachorros
    }
}

const perro1 = new Perro(1, "Cual", "Negro", "Ovejero", ["Firulais", "Negrito"])
const perro2 = new Perro(2, "Copito de nieve", "Blanco", "Chihuahua", [])
const perro3 = new Perro(3, "Fatiga", "Marron", "Indefinida", [])
const perro4 = new Perro(4, "Hercules", "Dorada", "Golden", [])

const perros = [perro1, perro2, perro3, perro4]

console.log(perros)