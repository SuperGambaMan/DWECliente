/* Ejercicio 2
Muestra el nombre de la etiqueta HTML que ha lanzado el evento.*/

window.onload = function() {

   let boton = document.getElementById("btn");

   boton.addEventListener("click", (e) => {
      console.log(e.target.tagName);
   });

}