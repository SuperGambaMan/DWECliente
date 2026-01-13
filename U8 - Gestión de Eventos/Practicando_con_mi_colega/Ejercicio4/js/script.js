/* 📝 EJERCICIO 4 – PROPAGACIÓN DE EVENTOS (CAPTURA Y BURBUJA)
Puntuación: 5 puntos

📌 ENUNCIADO
Dado el siguiente HTML:
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4</title>
    <style>
        #contenedor {
            width: 300px;
            height: 300px;
            background-color: lightgray;
            padding: 20px;
        }

        #caja {
            width: 200px;
            height: 200px;
            background-color: lightblue;
            padding: 20px;
        }

        #boton {
            width: 100px;
            height: 40px;
        }
    </style>
</head>
<body>

    <div id="contenedor">
        Contenedor
        <div id="caja">
            Caja
            <button id="boton">Púlsame</button>
        </div>
    </div>

    <script src="js/script.js"></script>
</body>
</html>


📌 SE PIDE
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


El orden de ejecución importa



🧠 QUÉ SE EVALÚA AQUÍ
✔ Propagación de eventos
 ✔ Burbuja
 ✔ stopPropagation()
 ✔ Uso correcto de event.target
 ✔ Control del flujo de eventos */

//Añadimos el evento agregar
var eventos = {
  agregar: null,
};

//Compatibilidad con otros navegadores modernos y antiguos
if (typeof window.addEventListener === "function") {
  eventos.agregar = function (el, type, fn) {
    el.addEventListener(type, fn, false);
  };
} else {
  eventos.agregar = function (el, type, fn) {
    el.attachEvent("on" + type, fn);
  };
}

//Capturamos la ID de todos los campos y del formulario
var contenedor = document.getElementById("contenedor");
var caja = document.getElementById("caja");
var btn = document.getElementById("boton");

//Funcion para capturar la informacion del formulario
function capturarElemento(e) {
  var evento = e || window.event;

  var objetivo = evento.target || evento.srcElement;
  //Hacemos que el formulario no se envie
  if (evento.stopPropagation) {
    evento.stopPropagation();
  } else {
    evento.cancelBubble = true; // IE antiguo
  }

  //Comprobamos que los campos estan rellenos
  if (objetivo.id === "contenedor") {
    console.log("Has pulsado contenedor");
  } else if (objetivo.id === "caja") {
    console.log("Has pulsado caja");
  } else if (objetivo.id === "boton") {
    console.log("Has pulsado boton");
  } else {
    console.log("Has pulsado otro elemento");
  }
}

//Cuando clicamos en el boton enviar capturamos el submit del formulario y con esto la informacion del formulario
eventos.agregar(contenedor, "click", capturarElemento);
