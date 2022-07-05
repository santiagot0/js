do {
    let nota1 = parseFloat(prompt("Ingrese la nota de su primer parcial:"))
    let nota2 = parseFloat(prompt("Ingrese la nota de su segundo parcial:"))
    let promedio = (nota1 + nota2) /2
 
    if(isNaN(nota1) || isNaN(nota2)) {
        alert("Por favor ingrese una nota válida")
    }
    if(promedio >= 8) {
        alert(`¡Felicitaciones! Con un promedio de ${promedio} ha promocionado la materia`)
        break
    }
    if(promedio < 8 && promedio >= 4) {
        alert(`Su promedio es de ${promedio}, va a final`)
        break
    }
    if(promedio < 4) {
        alert(`Su promedio es de ${promedio}, debe recursar la materia`)
    }
    
} while(isNaN(nota1) || isNaN(nota2))




