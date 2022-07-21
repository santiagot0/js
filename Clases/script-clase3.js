


/* 
for(let i = 1; i <= 10; i = i++) { // i += 1 o i++
    console.log(i)
    if(i === 9) {
        break
    }
} */

/* let acumulador = 0

1 +2 +3 +4 +5 +6 +7 +8 +9 +10

for(let i = 1; i <= 10; i++) {
    acumulador = acumulador + i
    console.log(acumulador)
} */


/* let repetir = true
while(repetir) {
    let palabra  = prompt("Ingrese No para terminar").toLowerCase()

    if(palabra == "no")
        repetir = false
} */

/* let numero1, numero2, operacion
 */
// isNaN() = verdadero si numero es NaN, falso si no
/* do {
    numero1 = parseFloat(prompt("Ingrese un numero"))
    numero2 = parseFloat(prompt("Ingrese otro numero"))
    operacion = prompt("Ingrese una operación (+, -, *, /")
} while(isNaN(numero1) || isNaN(numero2))

switch(operacion) {
    case "+":
        alert(numero1 + numero2)
        break
    case "-":
        alert(numero1 - numero2)
        break
    case "*":
        alert(numero1 * numero2)
        break
    case "/":
        alert(numero1 / numero2)
        break
    default:
        alert("Operación no válida")
        break
} */

let numero1 = 0
let numero2 = 1

do {
    numero1 = numero1 + numero2
} while(numero1 <10 || numero2 <10) {
    console.log(numero1, numero2)
}