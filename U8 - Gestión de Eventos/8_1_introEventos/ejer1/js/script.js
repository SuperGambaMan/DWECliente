/* Ejercicio 1:
Objetivo: Crear un botón que, al hacer clic, muestre un mensaje en la consola.
Instrucciones:
1. Crea un botón en HTML con el texto "Haz clic aquí".
2. Utiliza addEventListener para que, cuando el botón sea clickeado, se muestre
un mensaje en la consola que diga "¡Evento de clic activado!". */

window.onload = function() {

    let boton = document.getElementById("boton");

    function escribir(){
        console.log("Has pulsado el boton")
    }

    boton.addEventListener("click",escribir);
}