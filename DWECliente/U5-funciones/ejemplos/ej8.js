"use strict" //En este caso no cambia nada pero se usa para hacer un uso estricto de unas normas

// duncion global

function sayHi(name){
    //
    console.log('Soy la funcion sayHi global');
    console.log('say HI ' + name);
}

//expresion de funcion
//Si la colocamos despues nos dira que no esta definida cuando la vallamos a usar

let sayHiExpression = function (nombre, message ="Hello World") {

    //esto es el cuerpo de la funcion
    console.log('Soy la funcion Expresion');
    console.log('Hola ' + nombre + ' Message: ' + message);
};

//llamada a la funcion global

sayHi('Peter');
sayHi();

//llamada a la funcion de expresion

sayHiExpression('James');
sayHiExpression('Andrea', 'Welcome onboard!')

