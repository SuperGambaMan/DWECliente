/* 4.4 Métodos de los Arrays

4.4.1 Tamaño del array

let numeros = [1,2,3];
console.log(numeros.length); // 3

4.4.2 Saber si un elemento es un array

console.log(Array.isArray(numeros)); // true

4.4.3 Métodos para añadir elementos

numeros.push(4); // final
numeros.unshift(0); // inicio

4.4.4 Mezclar Arrays

let masNumeros = [5,6];
let combinado = numeros.concat(masNumeros);

4.4.5 Obtener y añadir subarrays

let subArray = combinado.slice(1, 4);

4.4.6 Convertir array en string

console.log(combinado.join(", "));

4.4.7 Búsqueda de elementos en un array

console.log(combinado.indexOf(3)); // posición
console.log(combinado.includes(10)); // false

4.4.8 Modificar orden de elementos

combinado.reverse();
combinado.sort();

4.4.9 Desestructuración de arrays

let [primero, segundo] = numeros;

Ejercicio propuesto: */

//1. Crea un array con números del 1 al 5.
let numeros = [1,2,3,4,5];
console.log(numeros);

//2. Añade un número al inicio y al final.

// Añadimos al inicio
numeros.unshift(0);

// Añadimos al final
numeros.push(6);
console.log(numeros);

//3. Obtén un subarray del array original.
let subArray = numeros.slice(1, 4);
console.log(subArray);

//4. Convierte el array en un string separado por guiones.
numeros.join("- ");
console.log(numeros);

//5. Ordena el array y muestra el resultado. 
subArray.sort()
console.log(subArray);
