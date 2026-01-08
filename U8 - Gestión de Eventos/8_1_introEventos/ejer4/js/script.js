/* Ejercicio 4:
Objetivo: Crear un contador de clics.
Instrucciones:
1. Crea un botón en HTML.
2. Cada vez que el usuario haga clic en el botón, aumenta un contador en pantalla. */

window.onload = function() {

    let boton = document.getElementById('contadorBoton');
    let contador = document.getElementById('contador');
    let cantidad = 0;
    function sumarContador(){
        cantidad ++;
        contador.textContent = 'Clics: ' + cantidad;
    }

    boton.addEventListener('click', sumarContador);
}