// RUTA AL ARCHIVO JSON
const URL_JSON = "../data/productos.json";

// CONTENEDOR HTML
const contenedor = document.getElementById("productos");

// BOTONES

const btn = document.getElementById("btnCargar");

/* =====================================================
   FUNCIÓN PRINCIPAL – ACTUALIZACIÓN DINÁMICA
   ===================================================== */
function cargarProductos() {
  // c) Limpiar contenido anterior
  contenedor.innerHTML = "";

  // a) Petición AJAX (Fetch) o b) mediante objeto XMLHttpRequest
  fetch(URL_JSON)
    .then((res) => res.json())
    .then((data) => {
      //No consigo sacar el array usando forEach
      console.log(data);
      data.forEach((producto) => {
        mostrarProducto(producto);
      });
    })
    .catch("ERROR: ");
}

/* =====================================================
   FUNCIÓN AUXILIAR PARA MOSTRAR PRODUCTOS
   ===================================================== */
function mostrarProducto(producto) {
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
}

btn.addEventListener("click", cargarProductos);
