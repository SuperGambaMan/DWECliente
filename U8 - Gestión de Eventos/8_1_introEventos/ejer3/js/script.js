/* Ejercicio 3:
Objetivo: Cambiar el color de fondo de un elemento al hacer clic.
Instrucciones:
1. Crea un elemento div con un fondo de color inicial.
2. Al hacer clic en el div, cambia el color de fondo a un nuevo color. */

window.onload = function() {

    let color = document.getElementById('cajaColor')

    function cambioColor (){
        color.style.backgroundColor = 'lightblue';
    }

    color.addEventListener('click', cambioColor);

}