var boton = document.getElementById("btnTarjeta");
var tarjeta = document.getElementById("tarjeta");

function mensaje(e) {
  var evento = e || window.event;

  var objetivo = evento.target || evento.srcElement;

  if (objetivo.id === "btnTarjeta") {
    console.log("Detectado: " + objetivo.tagName);
    console.log("Has pulsado el botón");
  } else if (objetivo.id === "tarjeta") {
    console.log("Detectado: " + objetivo.tagName);
    console.log("Has pulsado la tarjeta");
  }
}
tarjeta.addEventListener("click", mensaje);
