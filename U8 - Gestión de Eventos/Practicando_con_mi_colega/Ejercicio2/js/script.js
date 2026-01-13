/* 📁 Ejercicio 02 – Delegación de eventos con lista dinámica (5 puntos)
Enunciado
Dada la siguiente lista HTML:
<ul id="menu">
    <li>Inicio</li>
    <li>Servicios</li>
    <li>Blog</li>
    <li>Contacto</li>
</ul>

<button id="btnAgregar">Añadir opción</button>

Se pide:
Crear un documento con:


index.html


style.css


script.js


Usar delegación de eventos, asignando UN SOLO manejador click al <ul id="menu">.


El manejador debe ser crossbrowser, usando:


event.target || event.srcElement


Al hacer click sobre cualquier <li>:


Se cambiará su color de fondo a un color aleatorio.


Se mostrará por consola el texto del elemento pulsado.


El botón "Añadir opción":


Creará un nuevo <li> dinámicamente


Ese nuevo elemento DEBE RESPONDER al click, sin añadir nuevos eventos


📌 Obligatorio:
No se permite añadir eventos directamente a los <li>


Debe funcionar con elementos creados dinámicamente


Código bien estructurado y comentado
 */

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

//Aqui capturamos todos los elementos por ID
var menu = document.getElementById('menu');
var btnAgregar = document.getElementById('btnAgregar');

//Realizamos una funcion para generar un color Aleatorio
function colorAleatorio() {
    return 'rgb(' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) + ',' +
        Math.floor(Math.random() * 256) +
    ')';
}

//Funcion para cambiar de color el fondo de los li
function cambiarColor(e){
    // Compatibilizar el evento (W3C / IE)
    var evento = e || window.event;
    // Obtener el elemento que lanzó el evento
    var objetivo = evento.target || evento.srcElement;

    //Si el objetivo del evento coincide con 
    //li (Cambiara el fondo del li a rojo)
    if (objetivo.tagName === 'LI'){
        objetivo.style.backgroundColor = colorAleatorio();
    }
}

//Agregamos la accion a los diferentes botones
//ul - li (Cambiara el fondo del 'li' a rojo)
eventos.agregar(menu, 'click', cambiarColor);

//Boton Agregar (Añadira un nuevo 'li')
eventos.agregar(btnAgregar,'click', function(){
    var li = document.createElement('li');
        li.textContent = 'Nueva Opción';
        menu.appendChild(li);
});

