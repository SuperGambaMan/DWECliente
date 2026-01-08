/* Ejercicio 5:
Objetivo: Detectar la tecla presionada por el usuario.
Instrucciones:
1. Crea un área de texto (textarea) en HTML.
2. Cuando el usuario presione una tecla, muestra un mensaje con el código de la
tecla. */

window.onload = function() {

    let area = document.getElementById('miAreaTexto');
    let texto = document.getElementById('teclaPresionada');

    function presionarTecla(event){

        texto.innerHTML='Tecla presionada: ' + event.key;

    }

    area.addEventListener('keydown', presionarTecla);
}