class Pokemon {
    constructor(nombre, tipo, vidas) {
        this.nombre = nombre
        this.tipo = tipo
        this.vidas = vidas
        this.nivel = 1
    }

    recibirDaño(dañoAtaque) {
        console.log(`${this.nombre} está recibiendo un ataque de ${dañoAtaque}`)
        this.vidas -= dañoAtaque // this.vidas = vidas - dañoAtaque
        if(this.vidas <= 0) {
            console.log(`${this.nombre} se fue a vivir con los Magikarp`)
        }
        else {
            console.log(`${this.nombre} sigue vivo con ${this.vidas} vidas y con ganas de pelear`)
        }
    }
}

class Pikachu extends Pokemon {
    constructor(nombre, tipo, vidas, dañoImpactrueno) {
        super(nombre, tipo, vidas)
        this.dañoImpactrueno = dañoImpactrueno
    }    

    impactrueno(pokemonAtacado) {
        console.log(`${this.nombre} lanzó a ${pokemonAtacado.nombre} con un daño de ${this.dañoImpactrueno}`)

        pokemonAtacado.recibirDaño(this.dañoImpactrueno)
    }
}

class Charmander extends Pokemon {
    constructor(nombre, tipo, vidas, dañoLlamarada) {
        super(nombre, tipo, vidas)
        this.dañoLlamarada = dañoLlamarada
    }    

    llamarada(pokemonAtacado) {
        console.log(`${this.nombre} lanzó a ${pokemonAtacado.nombre} con un daño de ${this.dañoLlamarada}`)

        pokemonAtacado.recibirDaño(this.dañoLlamarada)
    }
}

class Eevee extends Pokemon {
    constructor(nombre, tipo, vidas, dañoMelee) {
        super(nombre, tipo, vidas)
        this.dañoMelee = dañoMelee
    }    

    melee(pokemonAtacado) {
        console.log(`${this.nombre} lanzo a ${pokemonAtacado.nombre} con un daño de ${this.dañoMelee}`)

        pokemonAtacado.recibirDaño(this.dañoMelee)
    }
}