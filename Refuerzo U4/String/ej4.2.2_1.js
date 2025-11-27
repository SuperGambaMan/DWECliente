/* 4.2 ARRAYS

4.2.1 ¿Qué es un Array?

Un array es una colección de datos, como números, strings u otros arrays, que se
guardan en una sola variable.
let numeros = [1, 2, 3, 4, 5];
let frutas = ["manzana", "banana", "pera"];

4.2.2 Creación de Arrays

let vacio = [];
let mezclado = [1, "hola", true];

Ejercicio propuesto: */

//1. Crea un array con 5 frutas.
let frutas = ["manzana", "banana", "pera", "fresa", "melon"];

//2. Crea un array que mezcle números y textos.
let mezcla = [1, "manzana", 3, "pera"];

//3. Muestra el primer y último elemento de cada array.

//Primer elemento
console.log(mezcla[0])

//Último elemento
console.log(mezcla[mezcla.length-1])