// RUTA AL ARCHIVO JSON
const URL_JSON = "../data/productos.json";

// CONTENEDOR HTML
const contenedor = document.getElementById("productos");

// BOTONES
const btn = document.getElementById("btnXHR");

/* =====================================================
   FUNCIÓN 1: CARGAR PRODUCTOS CON XMLHttpRequest
   ===================================================== */
function cargarConXHR() {
  // Limpiar contenido anterior
  contenedor.innerHTML = "";

  // TODO: Crear el objeto XMLHttpRequest
  var xhr = new XMLHttpRequest();
  // TODO: Configurar la petición GET
  xhr.open("GET", URL_JSON, true);

  //xhr.onreadystatechange o xhr.onload() --> tengo que usarlo pero no me acuerdo como
  // TODO: Gestionar readyState y status
xhr.onreadystatechange = function (){
    if (xhr.readyState === 4 && xhr.status === 200) {
    // TODO: Convertir la respuesta a objeto JavaScript
    var productos = parse(xhr.responseText);
    productos.array.forEach((producto) => {
      mostrarProducto(producto);
    });
  } else {
    console.log("ERROR");
    var productos = parse(xhr.responseText);
    productos.array.forEach((producto) => {
      mostrarProducto(producto);
    });
  }
}


  xhr.send();
}

/* =====================================================
   FUNCIÓN AUXILIAR PARA MOSTRAR PRODUCTOS
   ===================================================== */
function mostrarProducto(producto) {
  // TODO: Mostrar los productos en pantalla
  contenedor.innerHTML += `
   <div class="card" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">${producto.descripcion}</p>
                <p class="fw-bold">${producto.precio} €</p>
            </div>
        </div>
   `;
  console.log("esto funciona el mostrar");
}

btn.addEventListener("click", cargarConXHR);
