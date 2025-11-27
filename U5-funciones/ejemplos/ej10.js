"use strict" // se usa para hacer un uso estricto de unas normas

// Funciones de CALLBACK sin inicializar funciones

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
"Estás de acuerdo?",
function () {alert("Estás de acuerdo");},
function () {alert("Cancelaste la ejecución");}
);
