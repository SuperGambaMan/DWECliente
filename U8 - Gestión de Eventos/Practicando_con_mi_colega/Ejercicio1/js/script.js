/* 📁 Ejercicio 01 – Manejador crossbrowser y propagación (5 puntos)
Enunciado
Dado un documento HTML con la siguiente estructura:
<div id="contenedor">
    <button id="btnRojo">Rojo</button>
    <button id="btnVerde">Verde</button>
    <button id="btnAzul">Azul</button>
</div>

Se pide:
Crear un manejador de eventos crossbrowser que funcione tanto con:


addEventListener


attachEvent (IE antiguo)


Usar UNA ÚNICA FUNCIÓN para asociar los eventos.


Aplicar el manejador al evento click de los tres botones.


Al hacer click en cada botón:


Se cambiará el color de fondo del <body> según el botón pulsado.


El código JavaScript:


Debe estar en un archivo externo llamado script.js


Debe estar comentado, explicando qué hace cada parte


No se permite usar eventos inline ni onclick


📌 Importante:
 No se permite repetir código para cada botón.
 Debe usarse correctamente el objeto event. */

//Agregamos los diferentes eventos 
var eventos = {
    agregar: null
}

//Hacemos para que sea util tanto para los navegadores modernos
if (typeof window.addEventListener === 'function'){
    eventos.agregar = function(el, type, fn){
        el.addEventListener(type, fn, false);
    };
} else { //Como para los navegadores anteriores a Explorer 8
    eventos.agregar = function(el, type, fn){
        el.attachEvent('on' + type, fn);
    };
}

//Aqui capturamos todos los elementos de los botones por ID
var btnRojo = document.getElementById('btnRojo');
var btnVerde = document.getElementById('btnVerde');
var btnAzul = document.getElementById('btnAzul');

function cambiarColor(e){
    // Compatibilizar el evento (W3C / IE)
    var evento = e || window.event;
    // Obtener el elemento que lanzó el evento
    var objetivo = evento.target || evento.srcElement;

    //Si el objetivo del evento coincide con 
    //Boton Rojo (Cambiara el body a rojo)
    if (objetivo.id === 'btnRojo'){
        document.body.style.backgroundColor = 'red';
    }//Boton Verde (Cambiara el body a verde)
    else if (objetivo.id === 'btnVerde'){
        document.body.style.backgroundColor = 'green';
    }//Boton Azul (Cambiara el body a azul)
    else if (objetivo.id === 'btnAzul'){
        document.body.style.backgroundColor = 'blue';
    }

}

//Agregamos la accion a los diferentes botones
//Boton Rojo (Cambiara el body a rojo)
eventos.agregar(btnRojo, 'click', cambiarColor);

//Boton Verde (Cambiara el body a verde)
eventos.agregar(btnVerde,'click', cambiarColor);

//Boton Azul (Cambiara el body a azul)
eventos.agregar(btnAzul,'click', cambiarColor);