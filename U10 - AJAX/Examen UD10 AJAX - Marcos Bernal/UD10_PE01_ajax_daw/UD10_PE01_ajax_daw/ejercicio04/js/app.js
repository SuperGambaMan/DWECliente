// RUTA AL ARCHIVO JSON
const URL_JSON = "";

// CONTENEDOR HTML
const contenedor = document.getElementById("productos");

// BOTONES

const btnId2 = document.getElementById("btnFiltrar_id_2");

const btnId4 = document.getElementById("btnFiltrar_id_4");

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

  xhr.send();
}

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
      var productos = parse(data);
      console.log(productos);
      data.productos.forEach((producto) => {
        mostrarProducto(producto);
      });
    })
    .catch("ERROR: ");
}

/* =====================================================
   FUNCIÓN 3: FILTRAR PRODUCTO POR ID (SIMULANDO GET)
   ===================================================== */
function filtrarProducto() {
  // Limpiar contenido anterior
  contenedor.innerHTML = "";

  const idProducto = 2; // Simulación de parámetro GET

  // TODO: Cargar el JSON
  if (type === "cargarConXHR") {
   cargar
  } else if (type === "cargarConFetch") {
   
  }
  // TODO: Buscar el producto con el ID indicado
  // TODO: Mostrar SOLO ese producto
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
