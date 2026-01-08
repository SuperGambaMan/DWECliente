// a) crearEmail(nodoRaiz, email) - Crea un elemento li con el email
function crearEmail(nodoRaiz, email) {
    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = email;
    
    // Agregar el manejador de click para activar el email
    li.addEventListener('click', function() {
        activarEmail(this);
    });
    
    return li;
}

// agregarEnLista(nodoAInsertar) - Inserta un nodo li en la lista
function agregarEnLista(nodoAInsertar) {
    const lista = document.getElementById('emailList');
    lista.appendChild(nodoAInsertar);
}

// Manejador del botón "Agregar Email"
let btnAgregarEmail = document.getElementById('btnAgregarEmail')
btnAgregarEmail.addEventListener('click', function() {
    const inputEmail = document.getElementById('exampleFormControlInput1');
    const email = inputEmail.value.trim();
    
        const lista = document.getElementById('emailList');
        const nuevoEmail = crearEmail(lista, email);
        agregarEnLista(nuevoEmail);
});

// b) Función para activar un email (aplicar clase "active")
function activarEmail(elemento) {
    // Remover la clase "active" de todos los elementos
    const todosLosEmails = document.querySelectorAll('#emailList li');
    todosLosEmails.forEach(item => {
        item.classList.remove('active');
    });
    
    // Aplicar la clase "active" al elemento clickeado
    elemento.classList.add('active');
    
    // Actualizar el email seleccionado en la tarjeta
    const selectedEmailSpan = document.getElementById('selectedEmail');
    selectedEmailSpan.innerHTML = '<b>' + elemento.textContent + '</b>';
}

// Agregar manejadores de click a los emails existentes en el HTML
document.addEventListener('DOMContentLoaded', function() {
    const emailsExistentes = document.querySelectorAll('#emailList li');
    emailsExistentes.forEach(item => {
        item.addEventListener('click', function() {
            activarEmail(this);
        });
    });
});

// c) Función cargarDatos - Carga los emails desde data.js
function cargarDatos() {
    // Limpiar la lista actual
    const lista = document.getElementById('emailList');
    lista.innerHTML = '';
    
    // Cargar los emails desde el array emailList (definido en data.js)
    emailList.forEach((item, index) => {
        const nuevoEmail = crearEmail(lista, item.email);
        
        // El primer elemento debe estar activo por defecto
        if (index === 0) {
            nuevoEmail.classList.add('active');
            document.getElementById('selectedEmail').innerHTML = '<b>' + item.email + '</b>';
        }
        
        agregarEnLista(nuevoEmail);
    });
}

// Manejador del botón "Cargar Datos"
document.getElementById('btnLoadData').addEventListener('click', function() {
    cargarDatos();
});

// d) Función eliminarEmail - Elimina el email activo
function eliminarEmail() {
    const emailActivo = document.querySelector('#emailList li.active');
    
    if (emailActivo) {
        const siguienteEmail = emailActivo.nextElementSibling || emailActivo.previousElementSibling;
        
        // Eliminar el email activo
        emailActivo.remove();
        
        // Si hay más emails, activar el siguiente o el anterior
        if (siguienteEmail) {
            activarEmail(siguienteEmail);
        } else {
            // Si no quedan emails, limpiar la visualización
            document.getElementById('selectedEmail').innerHTML = '<b>No hay emails</b>';
        }
    } else {
        alert('No hay ningún email seleccionado para eliminar');
    }
}

// Agregar el manejador al botón "Eliminar"
document.querySelector('.btn-danger').addEventListener('click', function() {
    eliminarEmail();
});