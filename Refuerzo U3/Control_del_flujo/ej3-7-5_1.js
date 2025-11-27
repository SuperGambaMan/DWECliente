// 3.7.5 Bucles - do while
// Ejercicio 1 - pide un número mayor que 0 
// y si es incorrecto vuelve a pedirlo

let i;

do {
    
    i=Number(prompt("Dime un número mayor que 0"));


} while ( i <= 0 || isNaN(i));

console.log(i);