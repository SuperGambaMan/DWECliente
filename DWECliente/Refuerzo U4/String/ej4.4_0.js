/* /4.4 Métodos de los Arrays*/

//Teoria de clase



//4.4.1 Tamaño del array

let numeros = [1,2,3];
console.log(numeros.length); // 3

/* 4.4.2 Saber si un elemento es un array */

console.log(Array.isArray(numeros)); // true

/* 4.4.3 Métodos para añadir elementos */

numeros.push(4); // final
numeros.unshift(0); // inicio

/* 4.4.4 Mezclar Arrays */

let masNumeros = [5,6];
let combinado = numeros.concat(masNumeros);

/* 4.4.5 Obtener y añadir subarrays */

let subArray = combinado.slice(1, 4);
console.log(combinado);
console.log(subArray);

/* 4.4.6 Convertir array en string */

console.log(combinado.join(", "));

/* 4.4.7 Búsqueda de elementos en un array */

console.log(combinado.indexOf(3)); // posición
console.log(combinado.includes(10)); // false

/* 4.4.8 Modificar orden de elementos */

combinado.reverse();
combinado.sort();

/* 4.4.9 Desestructuración de arrays */

let [primero, segundo] = numeros;

//Dar claves a un array


let puntuaciones = [7,14,19];

console.log(puntuaciones);

puntuaciones[`pepe`] = 60; 

puntuaciones [4] = 10;

puntuaciones[`juan`] = 20;



console.log(puntuaciones);

//array asociativo
let datos = [];

datos[`juan`]=40;

datos[`luis`]=26;

console.log(datos);