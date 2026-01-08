// --- DOM & BOM ---
// Mostrar información del navegador en un div
let info = `
Navegador: ${navigator.appName} <br>
Versión: ${navigator.appVersion} <br>
Pantalla: ${screen.width} x ${screen.height} <br>
URL actual: ${location.href}
`;
document.getElementById("infoNavegador").innerHTML = info;

// --- Variables del DOM ---
const listaTareas = document.getElementById("listaTareas");
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTarea");

// --- Funciones para localStorage ---
function guardarTareasEnLocalStorage(tareas) {
  localStorage.setItem("tareas", JSON.stringify(tareas));
}

function cargarTareasDeLocalStorage() {
  let tareas = localStorage.getItem("tareas");
  return tareas ? JSON.parse(tareas) : [];
}

// --- Función para crear un elemento de tarea ---
function crearElementoTarea(texto) {
  let li = document.createElement("li");
  li.className =
    "list-group-item d-flex justify-content-between align-items-center";

  // Texto de la tarea
  let span = document.createElement("span");
  span.textContent = texto;

  // Contenedor de botones
  let acciones = document.createElement("div");
  acciones.className = "acciones";

  // Botón editar
  let btnEditar = document.createElement("i");
  btnEditar.className = "fas fa-edit text-warning";
  btnEditar.title = "Editar tarea";
  btnEditar.onclick = () => editarTarea(li, span);

  // Botón eliminar
  let btnEliminar = document.createElement("i");
  btnEliminar.className = "fas fa-times text-danger";
  btnEliminar.title = "Eliminar tarea";
  btnEliminar.onclick = () => eliminarTarea(li);

  // Añadir botones al contenedor
  acciones.appendChild(btnEditar);
  acciones.appendChild(btnEliminar);

  li.appendChild(span);
  li.appendChild(acciones);

  return li;
}

// --- Función agregar tarea ---
function agregarTarea() {
  let texto = inputTarea.value.trim();
  if (texto === "") {
    alert("Escribe una tarea válida.");
    return;
  }

  let li = crearElementoTarea(texto);
  listaTareas.appendChild(li);

  // Guardar en localStorage
  let tareas = cargarTareasDeLocalStorage();
  tareas.push(texto);
  guardarTareasEnLocalStorage(tareas);

  inputTarea.value = "";
}

// --- Función eliminar tarea ---
function eliminarTarea(li) {
  if (confirm("¿Deseas eliminar esta tarea?")) {
    // Eliminar del DOM
    listaTareas.removeChild(li);

    // Eliminar de localStorage
    let tareas = cargarTareasDeLocalStorage();
    let texto = li.querySelector("span").textContent;
    tareas = tareas.filter((t) => t !== texto);
    guardarTareasEnLocalStorage(tareas);
  }
}

// --- Función editar tarea ---
function editarTarea(li, span) {
  // Ventana emergente con input para editar
  let nuevoTexto = prompt("Editar tarea:", span.textContent);

  if (nuevoTexto !== null) {
    // Si no se canceló
    nuevoTexto = nuevoTexto.trim();
    if (nuevoTexto === "") {
      alert("El texto no puede estar vacío.");
      return;
    }

    // Actualizar DOM
    let textoAnterior = span.textContent;
    span.textContent = nuevoTexto;

    // Actualizar localStorage
    let tareas = cargarTareasDeLocalStorage();
    let index = tareas.indexOf(textoAnterior);
    if (index !== -1) {
      tareas[index] = nuevoTexto;
      guardarTareasEnLocalStorage(tareas);
    }
  }
}

// --- Cargar tareas al iniciar ---
function inicializar() {
  let tareas = cargarTareasDeLocalStorage();
  tareas.forEach((t) => {
    let li = crearElementoTarea(t);
    listaTareas.appendChild(li);
  });

  // Mensaje de bienvenida usando temporizador
  setTimeout(() => {
    alert("¡Bienvenido a tu lista de tareas!");
  }, 500);
}

// --- Eventos ---
btnAgregar.addEventListener("click", agregarTarea);
inputTarea.addEventListener("keypress", (e) => {
  if (e.key === "Enter") agregarTarea();
});

// --- Inicialización ---
inicializar();
