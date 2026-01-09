
// let colorAleatorio = Math.floor(Math.random() * 255);

//Manejador Evento
let eventos = {
  agregar: null,

  quitar: null,
};

// Init-time branching (Patrón)

if (typeof window.addEventListener === "function") {
  eventos.agregar = function (el, type, fn) {
    el.addEventListener(type, fn, false);
  };

  eventos.quitar = function (el, type, fn) {
    el.removeEventListener(type, fn, false);
  };
} else {
  // Soporte para <= IE8

  eventos.agregar = function (el, type, fn) {
    el.attachEvent("on" + type, fn);
  };

  eventos.quitar = function (el, type, fn) {
    el.detachEvent("on" + type, fn);
  };
}

//Seleccionamos el Elemento con el delegador de eventos
 let miNav = document.getElementById("miNav");

 miNav.onclick = function(e){

 let evento = e || globalThis.e;

 let elemento = evento.target || evento.srcElement;

 console.info(elemento.innerHTML);
};

eventos.agregar(miNav, "click", function (e) {
  //Creamos el color con 3 random uno para cada color de R G B
  let color = "rgb(" + Math.floor(Math.random() * 255) + ",";

  color += Math.floor(Math.random() * 255) + ",";

  color += Math.floor(Math.random() * 255) + ")";

  //Cambiamos el color del fondo de la pantalla
  miNav.style.backgroundColor = color;

  //Seleccionamos el Elemento con el id 'colorFondo'
  let colorTexto = document.getElementById("colorFondo");
  //Escribimos el color en ese elemento
  colorTexto.innerText = color;

  console.info("Nuevo color:", color);
});
