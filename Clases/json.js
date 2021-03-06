/* localStorage.setItem('saludar', "Hola")

console.log(localStorage.getItem('saludar')) */

const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")

if(localStorage.getItem("theme")) { // se consulta si existe o no el local storage
    darkMode = localStorage.getItem("theme")
} else {
    localStorage.setItem("theme", "light")
}

if(darkMode == "dark") {
    document.body.classList.add("darkMode")
}



botonDarkMode.addEventListener("click", () => {
 /*    document.body.style.backgroundColor = "#000"
    document.body.style.color = "#fff" */
    document.body.classList.add("darkMode")
    localStorage.setItem("theme", "dark")
})

botonDarkMode.addEventListener("click", () => {
 /*    document.body.style.backgroundColor = "#000"
    document.body.style.color = "#fff" */
    document.body.classList.add("darkMode")
})


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }
    
    loguearse() {
        console.log("Hola, estoy logueado")
    }
}
    
const user1 = new User("fran", "f@f.com", 123)
const user2 = new User("pepe", "p@p.com", 456)
const user3 = new User("juan", "j@j.com", 789)

const users = [user1, user2, user3]

localStorage.setItem("users", JSON.stringify(users))

const array2 = JSON.parse(localStorage.getItem("users"))
console.log(array2)
array2[0].loguearse()