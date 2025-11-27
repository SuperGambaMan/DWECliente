/* 1. Agrega libros con título y categoría usando el formulario.
2. Presta y devuelve libros haciendo clic en los botones de cada libro.
3. Busca por categoría para filtrar la lista.
4. Mira cómo se guardan y se mantienen tus libros tras recargar la página,
gracias al uso de localStorage.
5. Prueba distintos títulos y categorías, y observa los cambios en el DOM y los
estilos.  */

const biblioteca = {
  libros: [
    { titulo: "1984", prestado: false, categoria: "Novela" },
    { titulo: "El principito", prestado: false, categoria: "Infantil" },
  ],
  mostrar: function () {
    //Referencia del HTML
    let listaLibros = document.getElementById("listaLibros");

    let htmlGenerado;
    this.libros.forEach((l) => {
      l.libros;
    });

    htmlGenerado += "<li>";

    listaLibros.innerHTML = console.log(libros);
  },
  agregar: function (titulo, categoria) {
    libros.push({ titulo: titulo, categoria: categoria });
  },
};

function init() {
  //Declaracion de variables

  //Referenciamos el botono con su ID del HTML
  let btnAgregar = document.getElementById("btnAgregar");

  //Hacemos que cuando click se ejecute una funcion
  btnAgregar.addEventListener("click", function (e) {
    //Reiniciamos el evento
    e.preventDefault();
    //obtenemos los valores del titulo y la categoria
    let titulo = document.getElementById("titulo");
    let categoria = document.getElementById("categoria");

    //agregamos a la biblioteca
    let tituloLibroTxt = titulo.value;
    let categoriaLibroTxt = categoria.value;

    biblioteca.agregar(tituloLibroTxt, categoriaLibroTxt);

    biblioteca.mostrar();
  });

  biblioteca.mostrar();
}

window.onload.init;
