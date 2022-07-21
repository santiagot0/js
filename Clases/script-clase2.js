// Desayuno es igual a Cafe
/*let desayuno = prompt("Ingrese su desayuno").toLowerCase() 

if(desayuno == "Cafe") { // ¿Desayuno es igual a Cafe?
    console.log("Dessayuno cafe con leche");
} else if(desayuno == "te") {
    console.log("Desayuno te con leche");
} else if(desayuno == "chocolatada") {
    console.log("Desayuno chocolatada");
} else {
    console.log("Desayuno mate mirando una pared");
} */

//parseFloat() paso string a numero flotando
//parseInt() paso string a numero entero, eliminando decimales



/**
 * 5 == "5" //Mismo valor
 * "5" + "5" = "55"
 *  5 + 5 = 10
 * "5" + 5 = 55
 */

//NaN cuando no ingresan un numero
/* let numero = parseFloat(prompt("Ingrese un numero"))

console.log(numero)

if(isNaN(numero)) { // === es igual en valor y tipo
    alert("Numero no valido")
} else {
    console.log(numero + 5)
} */

let numero1 = 5
let numero2 = 10

if(numero1 === 5 || /* or */ numero2 === 10){
    console.log ("V")
} else {
    console.log ("F")
}

/**
 * 1 a 5 "Desaprobado"
 * 6 o 7 "Aprobado bien"
 * 8 o 9 "Aprobado muy bien"
 * 10 "Aprobado excelente"
 */

let nota = parseInt(prompt("Ingrese una nota"))

if(nota >= 1 && nota <= 5) {
    alert("Alumno/a desaprobado")
} else if(nota === 6 || nota === 7) {
    alert("Alumno aprobado con nota de Bien")
} else if(nota === 8 || nota === 9) {

}



for(let i = 1; i <= 1000; i = i++) { // i += 1 o i++
    console.log(i)
}