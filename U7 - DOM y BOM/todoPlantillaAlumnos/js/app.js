// Información del navegador
document.getElementById("infoNavegador").innerHTML = `
Navegador: ${navigator.appName} <br>
Versión: ${navigator.appVersion} <br>
Pantalla: ${screen.width} x ${screen.height} <br>
URL actual: ${location.href}
`;

// --- Recogemos los elementos del DOM ---
const listaTareas = document.getElementById("listaTareas");
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTarea");

let tareaActual = null;

//============ LOCAL STORAGE ================

//Funcion para guardar tarea en el localStorage
function guardarTareasDeLocalStorage(tareas) {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}


//Funcion para cargar tarea en el localStorage
function cargarTareaDeLocalStorge() {
    let tareas = JSON.parse(localStorage.getItem("tareas") ) || [];
    return tareas;
}



//================ ESTRUCTURA ==============

// --- Funcion crear elemnto tarea ---
function crearElementoTarea(texto) {
  let li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  //Texto de la tarea
  let span = document.createElement("span");
  span.textContent = texto;

  //Contenedor de botones
  let acciones = document.createElement("div");
  acciones.className = "acciones";

  //Boton editar
  let btnEditar = document.createElement("i");
  btnEditar.className = "fas fa-edit text-warning";
  btnEditar.title = "Editar tarea";
  btnEditar.onclick = () => editarTarea(li, span);

  //Boton eliminar
  let btnEliminar = document.createElement("i");
  btnEliminar.className = "fas fa-times text-danger";
  btnEliminar.title = "Eliminar tarea";
  btnEliminar.onclick = () => eliminarTarea(li);

  //Añadir botones al contenedor
  acciones.appendChild(btnEditar);
  acciones.appendChild(btnEliminar);

  li.appendChild(span);
  li.appendChild(acciones);

  return li;
}

// --- Funcion agregar tarea ---
function agregarTarea() {
  let texto = inputTarea.value.trim();

  if (texto === "") {
    return;
  }

  let li = crearElementoTarea(texto);

  listaTareas.appendChild(li);

  //Guardar en localStorage
  let tareas = cargarTareaDeLocalStorge();
  tareas.push(texto);
  guardarTareasDeLocalStorage(tareas);

  inputTarea.value = "";
}

// --- Funcion eliminar tarea ---
function eliminarTarea(li) {
    if (confirm("¿Deseas eliminar esta tarea?")) {
        //Eliminar del DOM
        listaTareas.removeChild(li);

        //Eliminar de localStorage
        let tareas = cargarTareaDeLocalStorge();
        let texto = li.querySelector("span").textContent;
        tareas = tareas.filter((t) => t !== texto);
        guardarTareasDeLocalStorage(tareas);
    }
}

// --- Funcion editar tarea ---
function editarTarea(li, span) {
    let nuevoTexto = prompt("Editar tarea:", span.textContent);

    if (nuevoTexto !== null) {
        // Si no se canceló
        nuevoTexto = nuevoTexto.trim();
        // Si esta vacio
        if (nuevoTexto === "") {
            alert("El texto no puede estar vacío.");
            return;
        }
    }

    //Actualizar DOM
    let textoAnterior = span.textContent;
    span.textContent = nuevoTexto;

    //Actualizar localStorage
    let tareas = cargarTareaDeLocalStorge();
    let index = tareas.indexOf(textoAnterior);
    if (index !== -1){
        tareas[index] = nuevoTexto;
        guardarTareasDeLocalStorage(tareas);
    }
}

// --- Inicializar ---
function inicializar() {
    let tareas = cargarTareaDeLocalStorge();
    console.log(tareas);
    tareas.forEach((t) => {
        let li = crearElementoTarea(t);
        listaTareas.appendChild(li);
    });
}

inicializar();

// --- Eventos ---
btnAgregar.addEventListener("click", agregarTarea);
inputTarea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    agregarTarea();
  }
});

// Funciones a completar:
// 1. agregarTarea
// 2. eliminarTarea
// 3. abrirModalEditar
// 4. guardarEdicion
// 5. inicializar y cargar tareas
