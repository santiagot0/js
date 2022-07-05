let repetir = true
const promedio = (a, b) => { return (a + b) / 2 }


do {
    nota1 = parseFloat(prompt("Ingrese la nota de su primer parcial"))
    if(nota1 <1 || nota1 >10 || isNaN(nota1)) {
        alert("Por favor ingrese una nota válida entre 1 y 10")
    } else {
        break
    }
} while(repetir)

do {
    nota2 = parseFloat(prompt("Ingrese la nota de su segundo parcial"))
    if(nota2 < 1 || nota2 > 10 || isNaN(nota2)) {
        alert("Por favor ingrese una nota válida entre 1 y 10")
    } else {
        break
    }
} while(repetir)

let notaFinal = promedio(nota1, nota2)

if(notaFinal < 4) {
    alert(`Su promedio es de ${notaFinal}. Debe recursar la materia`)
}

if(notaFinal >= 4 && notaFinal < 8) {
    alert(`Su promedio es de ${notaFinal}. Debe rendir examen final`)
}

if(notaFinal >= 8) {
    alert(`Su promedio es de ${notaFinal} ¡Felicitacioes! Ha promocionado la materia`)
}






