"use strict"; // se usa para hacer un uso estricto de unas normas

function ask(question, yes, no) {

  if (confirm(question)) 
    
    yes()

  else 

    no();

}

ask(
  "Do you agree?",

  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }

);

//==================================

let askArrow = (question, yes, no) =>{

  if (confirm(question)) yes();

  else no();

}

askArrow(
  "Do you agree?",
  
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);

// ------------ FIN BLOQUE ARROW -----------------

// funcion inicializadora
let init = (e) => {
// obtener elementos del DOM
};

let initAnonima = function(e) {
// funcion anonima
};

window.onload = init ;

// ------------------------------------

window.onload = function (e) {
// con funcion anonima
};

// -----------------------------

window.onload = (e) => {
// con funcion arrow
};