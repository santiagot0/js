class Tarea {
    constructor(nombre, descripcion, tarea) {
        this.nombre = nombre
        this.descripcion = descripcion
        this.tarea = tarea
    }
}

let tareas = []

if(localStorage.getItem("tareas")) {
    //NULL o array de tareas
    tareas = JSON.parse(localStorage.getItem("tareas"))
} else {
    localStorage.setItem("tareas", JSON.stringify(tareas))
}

const formTareas = document.getElementById("formTareas")
const divTareas = document.getElementById("divTareas")
const botonTareas = document.getElementById("botonTareas")

formTareas.addEventListener("submit", (e) => {
    e.prevetDefault()
    let datForm = new FormData(e.target)

    console.log(datForm.get("nombre"), datForm.get("descripcion"))

    let tarea = new Tarea(datForm.get("nombre"), datForm.get("descripcion"))

    tareas.push(tarea)
    console.log(tareas)
    localStorage.setItem("tareas", JSON.stringify(tareas))
    formTareas.reset()
})

botonTareas.addEventListener('click', () => {
    let arrayStorage = JSON.parse(localStorage.getItem('tareas'))

    arrayStorage.forEach((tarea, indice) => {
        divTareas.innerHTML += `
        <div class="card border-dark mb-3" id="tarea${indice}" style="max-width: 20rem; margin:4px;">
            <div class="card-header"><h2>${tarea.nombre}</h2></div>
            <div class="card-body">
                <p class="card-title">${tarea.descripcion}</p>
                <button class="btn btn-danger">Eliminar Tarea</button>
            </div>
        </div>
        
        `
    });
})


formTareas.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(e.target)
    let datForm = new FormData(e.target)

   // let nombre = document.getElementById('nombreTarea').value
   // let descripcion = document.getElementById('descripcionTarea').value

   let tarea = new Tarea(datForm.get('nombre'), datForm.get('descripcion'))
   tareas.push(tarea)
   console.log(tareas)
   localStorage.setItem('tareas', JSON.stringify(tareas))
    formTareas.reset()
})