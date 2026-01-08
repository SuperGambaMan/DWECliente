/* Ejercicio 2:
Objetivo: Mostrar un mensaje de alerta al pasar el ratón sobre un área definida.
Instrucciones:
1. Crea una caja (div) en HTML con un fondo de color.
2. Usa el evento 'mouseover' para que cuando el ratón pase sobre la caja,
aparezca un mensaje de alerta. */

window.onload = function() {

     let caja = document.getElementById('miCaja');

     function alerta (){
        alert("Has pasado por la caja")
     }

     caja.addEventListener('mouseover', alerta);

}