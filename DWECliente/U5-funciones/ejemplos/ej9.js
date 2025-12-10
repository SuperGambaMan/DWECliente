"use strict" // se usa para hacer un uso estricto de unas normas

// Funciones de CALLBACK inicializando funciones

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert("Estás de acuerdo.");
}

function showCancel() {
    alert("Cancelaste la ejecución")
}

//uso: las funciones showOk, showCancel son pasadas como argumentos

ask("Estás de acuerdo?",showOk, showCancel)