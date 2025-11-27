"use strict" //En este caso no cambia nada pero se usa para hacer un uso estricto de unas normas

// Funcion suma
function sum(a,b) {
    return a+b;
}

let result = sum(1,2);
alert(result); //3


let age = prompt('¿Qué edad tienes', 18);

if (checkAge(age)) {
    alert( 'Acceso otorgado' );
} else {
    alert( 'Acceso denegado' );
}

//funcion edad
function checkAge(age) {
    if (age=>18) {
        return true;
    } else {
        return confirm('¿Tienes permiso de tus padres?')
    }
}
