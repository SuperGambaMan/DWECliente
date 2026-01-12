/* Le pedimos que capture el moviento del raton a nuestra funcion */
document.body.addEventListener("mousemove", function (ev) {
  /* capturamos el Div que seguira nuestro raton */
  let cHola = document.getElementById("cHola");

  /* Cambiamos las coordenadas del div con el moviento */
  cHola.style.left = ev.clientX + "px";
  cHola.style.top = ev.clientY + "px";
});
