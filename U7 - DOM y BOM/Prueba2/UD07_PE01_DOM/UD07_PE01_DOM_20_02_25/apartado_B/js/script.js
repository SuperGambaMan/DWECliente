//Variables generales

//Color aleatorio

//Tiempo de 5 segundos

// ------ Funcion cambiar color al pulsar boton ------
function cambiarColor(color) {

  let span = document.getElementById("colorFondo");
  span.textContent = color;

  let bodys = document.getElementsByTagName("body");

  for (const body of bodys) {
    body.style.backgroundColor = color;
  }
}

//Funcion para generar color de manera aleatoria
function generarColorAle() {
    return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
}

//---- Funcion temporizador
let miTemporizador = (tiempo) => {
  setInterval(() => {
    cambiarColor(generarColorAle());
  }, tiempo);
};

//==== Manejador de eventos ====

// BOTON CAMBIAR COLOR
let btnBotonCambiar = document.getElementById("btnBotonCambiar");
btnBotonCambiar.addEventListener("click", ()=>{
    cambiarColor(generarColorAle());
});

// BOTON COMENZAR TEMPORIZADOR
let btnTemporizador = document.getElementById("btnTemporizador");
btnTemporizador.addEventListener("click", ()=>{
    miTemporizador(5000);
});