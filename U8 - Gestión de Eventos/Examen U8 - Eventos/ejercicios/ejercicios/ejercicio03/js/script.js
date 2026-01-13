var texto = document.getElementById("texto");
var info = document.getElementById("info");
var cont = document.getElementById("contador");
var conta = 0;

function mostrarTecla(e) {
  info.textContent = e.key;
}

function contador(e) {
  conta++;
  cont.textContent = "Pulsaciones: " + conta;
}

texto.addEventListener("keydown", mostrarTecla);
texto.addEventListener("keydown", contador);
