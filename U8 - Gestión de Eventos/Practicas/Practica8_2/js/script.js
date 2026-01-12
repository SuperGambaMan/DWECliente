/* Realizamos una accion cuando pulsamos las teclas ALT + F12 */
document.body.addEventListener("keyup", function (ev) {
  if (ev.altKey && ev.key === "F12") {
    /* Cogemos el elemento con la ID imagen */
    let capa = document.getElementById("imagen");
    /* Cambiamos el fondo por uno aleatorio generado con esta URL */
    capa.style.backgroundImage =
      "url('https://picsum.photos/1920/1080?random=1')";
  }
});
