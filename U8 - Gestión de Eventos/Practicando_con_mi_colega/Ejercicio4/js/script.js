/* 📁 Ejercicio 03 – Formularios + eventos (extra para subir nota)
Enunciado
Crea un formulario con los siguientes campos:
Nombre (text)


Email (email)


Checkbox “Acepto las condiciones”


Botón Enviar


Se pide:
Capturar el evento submit del formulario.


Evitar el envío si:


Algún campo está vacío


El checkbox no está marcado


Mostrar un mensaje de error usando alert().


Si todo es correcto:


Mostrar por consola los datos introducidos


Usar correctamente:


event.preventDefault()


Propiedades del formulario (value, checked)


Código comentado y sin errores.
 */

//Añadimos el evento agregar
var eventos = {
    agregar: null
}

//Compatibilidad con otros navegadores modernos y antiguos
if(typeof window.addEventListener ==='function'){
    eventos.agregar = function (el, type, fn){
        el.addEventListener(type, fn, false);
    };   
} else {
    eventos.agregar = function (el, type, fn){
        el.attachEvent('on' + type, fn);
    }
}

//Capturamos la ID de todos los campos y del formulario
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
    }

    //Comprobamos que los campos estan rellenos
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
    console.log(
        'Nombre: ' + nombre.value + 
        ' | Email: ' + email.value + 
        ' | Acepto las condiciones'
    );
}

//Cuando clicamos en el boton enviar capturamos el submit del formulario y con esto la informacion del formulario
eventos.agregar(formulario, 'submit', capturarFormulario);