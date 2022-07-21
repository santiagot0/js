const valores = [] // array vacio
const cosas = [true, 56, "Hola", false, "Chau"] // array con valores

console.log(cosas[2]) // mostrar el elemento en la posción 2 del array cosas

for(let i = 0; i < 5; i++) {
    console.log(cosas[i]) //cosas [0] cosas[1]... cosas[4]
}

console.log(cosas.length)

const alumnos = ["Camilo", "Julieta", "Santiago", "Luca"]

alumnos.push("Bandom") // el .push agrega un elemento al final del array
alumnos.unshift("Francisco") // .unshift agrega un elemtno al principio del array

alumnos.shift() // se elimina el primer elemento del array
alumnos.pop() // elimina el último elemento del array

alumnos.splice(3, 1) // splice elimina una determinada cantidad de elementos (1 en este caso) a partir de una posición (3 en este caso)
console.log(alumnos)