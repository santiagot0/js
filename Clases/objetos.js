/* const persona1 = {
    nombre: "Cosme",
    apellido: "Fulanito",
    edad: 30,
    peso: 70,
    sueldo: 12000
}

Object.freeze(persona1) //ak congelar un objeto este ya no se puede modificar

console.log(persona1.sueldo)
console.log(persona1["edad"]) */

function Persona(nombreParam, apellidoParam, edadParam, sueldoParam) {
    this.nombre = nombreParam;
    this.apellido = apellidoParam;
    this.edad = edadParam;
    this.sueldo = sueldoParam;
    this.saludar = () => console.log("Hola, te estoy saludando!")
} 

persona1.saludar()

const persona1 = new Persona("Cosme", "Fulanito", 34, 15000)

console.log(persona1)

