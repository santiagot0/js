const pikachu1 = new Pikachu("Pika pika", "Eléctrico", 22, 10)
const charmander1 = new Charmander("Fueguito", "Fuego", 20, 8)
const eevee1 = new Eevee("Fatiga", "Normal", 12, 6)

do {
    pikachu1.impactrueno(charmander1)
    if(charmander1.vidas <= 0) {
        break
    }
    charmander1.llamarada(pikachu1)
} while(pikachu1.vidas > 0 || charmander1.vidas > 0)