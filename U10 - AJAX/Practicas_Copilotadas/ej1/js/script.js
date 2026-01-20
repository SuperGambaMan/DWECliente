//API - https://jsonplaceholder.typicode.com/users

// 1. Función genérica para pedir datos (AJAX)
function getJSON(url, callbackFn) {
    // TODO: crear XMLHttpRequest
    const xhr = new XMLHttpRequest();
    // TODO: abrir petición GET
    xhr.open("GET", url, true);
    // TODO: onreadystatechange
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200) {
            // TODO: parsear JSON y llamar callbackFn
            const data = JSON.parse(xhr.responseText);
            callbackFn (data);
        }
    };
    xhr.send();
    
}

// 2. Función para mostrar la lista en la tabla
function mostrarLista(datos) {

    // TODO: seleccionar tbody
    const tbody = document.getElementById("lista-body");

    // TODO: limpiar tabla
    tbody.innerHTML="";

    // TODO: recorrer datos
    datos.forEach(usuario => {

        // TODO: crear <tr> por cada elemento
        const tr = document.createElement('tr');

        tr.innerHTML = `
        <td>${usuario.id}</td>
        <td>${usuario.name}</td>
        <td>${usuario.email}</td>
        `;

        // TODO: añadir evento click para mostrar detalles
        tr.addEventListener("click", () => mostrarDetalles(usuario));

        tbody.appendChild(tr);
    });
    
    // TODO: insertar <tr> en la tabla
    tbody.appendChild(tr);
}

// 3. Función para mostrar los detalles del elemento seleccionado
function mostrarDetalles(item) {
    // TODO: rellenar los <span> con item.name, item.email, etc.
    const spanNombre = document.getElementById("det-nombre").textContent = item.name;
    const spanEmail = document.getElementById("det-email").textContent = item.email;
    const spanTelefono = document.getElementById("det-telefono").textContent = item.phone;
    const spanCiudad = document.getElementById("det-ciudad").textContent = item.address.city;
    const spanEmpresa = document.getElementById("det-empresa").textContent = item.company.name;
}

// 4. Cargar datos al iniciar
window.onload = function () {
    // TODO: llamar a getJSON con la URL y mostrarLista
    getJSON("https://jsonplaceholder.typicode.com/users", mostrarLista)
};
