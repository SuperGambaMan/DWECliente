/* 4.1.2 Comparación de Strings

Podemos comparar strings usando operadores como ===, !==, <, >;.

let palabra1 = "hola";
let palabra2 = "Hola";

console.log(palabra1 === palabra2); // false, sensibles a mayúsculas
console.log(palabra1.toLowerCase() === palabra2.toLowerCase()); // true

Ejercicio propuesto:*/

//1. Pide al usuario una palabra y comprueba si es igual 
// a "javascript" sin importar mayúsculas. 

let palabra = prompt("Escribe una palabra.");

console.log(palabra.toLowerCase()=== "javascript");