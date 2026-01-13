/* 📌 SE PIDE

Crear el archivo script.js.

Crear un manejador de eventos crossbrowser usando el modelo visto en clase.

Asociar un evento click a:

El div#contenedor

El div#caja

El button#boton

Al hacer click:

Mostrar en consola qué elemento ha sido pulsado.

Usar fase de burbuja para todos los eventos.

Evitar que el evento siga propagándose cuando se haga click en el botón.

📌 RESTRICCIONES (EXAMEN)

❌ No usar librerías
❌ No usar onclick en HTML
❌ No usar código no visto en clase
❌ Código comentado
❌ Uso obligatorio de event y target

🎯 PISTAS (NO SOLUCIÓN)

Usa addEventListener(type, fn, false)

Para detener la propagación:

event.stopPropagation()

event.cancelBubble = true (IE)

El orden de ejecución importa */

//Añadimos el evento agregar
var eventos = { agregar: null } 
//Compatibilidad con otros navegadores modernos y antiguos 
if(typeof window.addEventListener ==='function'){ 
    eventos.agregar = function (el, type, fn){ 
        el.addEventListener(type, fn, false); 
    }; 
} else { 
    eventos.agregar = function (el, type, fn){ 
        el.attachEvent('on' + type, fn); 
    } 
} //Capturamos la ID del boton enviar 
var formulario = document.getElementById('formulario'); 
var nombre = document.getElementById('nombre'); 
var email = document.getElementById('email'); 
var checkbox = document.getElementById('condiciones'); 
//Funcion para capturar la informacion del formulario 
function capturarFormulario(e){ 
    var evento = e || window.event; 
    //Hacemos que el formulario no se envie 
    if(evento.preventDefault){ 
        evento.preventDefault(); 
    }else{ 
        evento.returnValue = false; 
    } //Comprobamos que los campos estan rellenos 
    if (nombre.value === ""){ 
        alert('El nombre esta vacio'); 
        return false; 
    } 
    if (email.value === ""){ 
        alert('El email esta vacio'); 
        return false; 
    } 
    if (!checkbox.checked){ 
        alert('No aceptaste las condiciones'); 
        return false; 
    } 
    //Si todos los campos estan llenos devolvemos un log con toda la informacion 
    console.log( 'Nombre: ' + nombre.value + ' | Email: ' + email.value + ' | Acepto las condiciones' ); 
} 
//Cuando clicamos en el boton enviar capturamos la informacion del formulario 
eventos.agregar(formulario, 'submit', capturarFormulario);