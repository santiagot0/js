let mes = prompt("Ingresa el mes de su nacimiento (en letras):").toLowerCase()//Usuario ingresa el mes y define mes
let dia = parseInt(prompt("Ingresa qué fecha del mes naciste:"))// Usuario ingresa el día y define dia

if((mes === "marzo" && (dia >= 21 && dia <= 31)) || (mes === "abril") && dia <=20) { 
    alert("¡Sos de Aries!")//si en las fechas comprendidas dentro de los meses se cumplen corresponde al signo
} 
else if((mes === "abril" && (dia >= 19 && dia <= 30)) || (mes === "mayo") && dia <= 21) {
    alert("¡Sos de Tauro!")
}
else if((mes === "mayo" && (dia >= 22 && dia <= 31)) || (mes === "junio") && dia <= 21) {
    alert("¡Sos de Géminis!")
}
else if((mes === "junio" && (dia >= 22 && dia <= 30)) || (mes === "julio") && dia <= 23) {
    alert("¡Sos de Cáncer!")
} 
else if((mes === "julio" && (dia >= 24 && dia <= 31)) || (mes === "agosto") && dia <= 23) {
    alert("¡Sos de Leo!")
} 
else if((mes === "agosto" && (dia >= 24 && dia <= 31)) || (mes === "septiembre") && dia <= 22) {
    alert("¡Sos de Virgo!")
} 
else if((mes === "septiembre" && (dia >= 23 && dia <= 30)) || (mes === "octubre") && dia <= 22) {
    alert("¡Sos de Libra!")
} 
else if((mes === "octubre" && (dia >= 23 && dia <= 31)) || (mes === "noviembre") && dia <= 22) {
    alert("¡Sos de Escorpio!")
} 
else if((mes === "noviembre" && (dia >= 23 && dia <= 30)) || (mes === "diciembre") && dia <= 21) {
    alert("¡Sos de Sagitario!")
} 
else if((mes === "diciembre" && (dia >= 22 && dia <= 31)) || (mes === "enero") && dia <= 19) {
    alert("¡Sos de Capricornio!")
} 
else if((mes === "enero" && (dia >= 20 && dia <= 31)) || (mes === "febrero") && dia <= 19) {
    alert("¡Sos de Acuario!")
} 
else if((mes === "febrero" && (dia >= 20 && dia <= 29)) || (mes === "marzo") && dia <= 21) {
    alert("¡Sos de Piscis!")
}  
else {
    alert("Fecha no reconocida")
}
      

