let colorAleatorio = Math.floor(Math.random() * 255);

//Manejador de eventos 
var eventos = {
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

//Seleccionamos el Elemento con el id 'btnBotonCambiar'
let boton = document.getElementById("btnBotonCambiar");

eventos.agregar(boton, "click", function (e) {
  //Creamos el color con 3 random uno para cada color de R G B
  var color = "rgb(" + Math.floor(Math.random() * 255) + ",";

  color += Math.floor(Math.random() * 255) + ",";

  color += Math.floor(Math.random() * 255) + ")";

  //Cambiamos el color del fondo de la pantalla
  document.body.style.backgroundColor = color;

  //Seleccionamos el Elemento con el id 'colorFondo'
  let colorTexto = document.getElementById("colorFondo");
  //Escribimos el color en ese elemento
  colorTexto.innerText = color;

  console.info("Nuevo color:", color);
});
