"use strict"; // se usa para hacer un uso estricto de unas normas

// Funciones practicamos

let func = function (arg1, arg2, ... argN ) { // Esta funcion no funciona
  for (let arg of argN) {
    console.log(arg);
  } 
}

console.log(func("Hola", "que", "tal", "estas")); // tal, estas

let double = n => n * 2;

console.log(double(5)); // 10
