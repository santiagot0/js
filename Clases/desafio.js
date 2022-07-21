let mes = prompt("Ingresa el mes de su nacimiento (en letras):").toLowerCase()//Usuario ingresa el mes y define mes
let dia = parseInt(prompt("Ingresa qué fecha del mes naciste:"))// Usuario ingresa el día y define dia
let signo = true

switch(signo) {

    case((mes === "marzo" && (dia >= 21 && dia <= 31)) || (mes === "abril") && dia <=20):  
        alert("¡Sos de Aries!")
        break
    case((mes === "abril" && (dia >= 19 && dia <= 30)) || (mes === "mayo") && dia <= 21):
        alert("¡Sos de Tauro!")
        break
    case((mes === "mayo" && (dia >= 22 && dia <= 31)) || (mes === "junio") && dia <= 21):
        alert("¡Sos de Géminis!")
        break
    case((mes === "junio" && (dia >= 22 && dia <= 30)) || (mes === "julio") && dia <= 23):
        alert("¡Sos de Cáncer!")
        break
    case((mes === "julio" && (dia >= 24 && dia <= 31)) || (mes === "agosto") && dia <= 23):
        alert("¡Sos de Leo!")
        break
    case((mes === "agosto" && (dia >= 24 && dia <= 31)) || (mes === "septiembre") && dia <= 22):
        alert("¡Sos de Virgo!")
        break
    case((mes === "septiembre" && (dia >= 23 && dia <= 30)) || (mes === "octubre") && dia <= 22):
        alert("¡Sos de Libra!")
        break
    case((mes === "octubre" && (dia >= 23 && dia <= 31)) || (mes === "noviembre") && dia <= 22):
        alert("¡Sos de Escorpio!")
        break
    case((mes === "noviembre" && (dia >= 23 && dia <= 30)) || (mes === "diciembre") && dia <= 21):
        alert("¡Sos de Sagitario!")
        break
    case((mes === "diciembre" && (dia >= 22 && dia <= 31)) || (mes === "enero") && dia <= 19):
        alert("¡Sos de Capricornio!")
        break
    case((mes === "enero" && (dia >= 20 && dia <= 31)) || (mes === "febrero") && dia <= 19):
        alert("¡Sos de Acuario!")
        break
    case((mes === "febrero" && (dia >= 20 && dia <= 29)) || (mes === "marzo") && dia <= 21):
        alert("¡Sos de Piscis!")
        break
    default:
        alert("Fecha no reconocida")
}


    
