"use strict"; // se usa para hacer un uso estricto de unas normas

function manejadorClickGlobal() {
 //Cuerpo de la funcion 
}


let init = (e) => {
  // obtener elementos del DOM
  let bntSumarElement = document.getElementById("btnSumar");

//Ejemplo 1
  // asignar manejadores de eventos
  bntSumarElement.addEventListener("click", function (e) {
    //manejador de evento anonimo
  });

//Ejemplo 2
  bntSumarElement.addEventListener("click", manejadorClickGlobal);

//Ejemplo 3
  bntSumarElement.addEventListener("click", e => {
    // manejador de evento con funcion flecha
  });

//Ejemplo 4
  bntSumarElement.addEventListener("click", (e) => {
    // manejador de evento con funcion flecha
  });

};

// funcion manejadora de evento global
window.onload = init ;
