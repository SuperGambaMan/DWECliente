// RUTA AL ARCHIVO JSON
const URL_JSON = "../data/productos.json";

// CONTENEDOR HTML
const contenedor = document.getElementById("productos");

// BOTONES
const btn = document.getElementById("btnFetch");

/* =====================================================
   FUNCIÓN 2: CARGAR PRODUCTOS CON FETCH
   ===================================================== */
function cargarConFetch() {
  // Limpiar contenido anterior
  contenedor.innerHTML = "";

  // TODO: Realizar la petición usando fetch
  fetch(URL_JSON)
    // TODO: Convertir la respuesta a JSON
    .then((res) => res.json())
    .then((data) => {
      //No consigo sacar el array usando forEach
      console.log(data.productos);
      data.productos.forEach((producto) => {
        mostrarProducto(producto);
      });
    })
    .catch("ERROR: ");
}

/* =====================================================
   FUNCIÓN AUXILIAR PARA MOSTRAR PRODUCTOS
   ===================================================== */
function mostrarProducto(producto) {
  // TODO: Mostrar los productos usando Bootstrap
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

btn.addEventListener("click", cargarConFetch);
