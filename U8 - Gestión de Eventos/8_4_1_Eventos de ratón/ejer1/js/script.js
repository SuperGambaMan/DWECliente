/* Ejercicio 1
Muestra en consola el objeto event al hacer clic en un botón.*/

window.onload = function() {

   let boton = document.getElementById("btn");

   boton.addEventListener("click", function (event) {
      console.log(event);
   });

}