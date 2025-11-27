//3.7.2 Numeros aleatorios - Math RANDOM y Math FLOOR 
//Ejercicio 1

let numero = Math.random();
console.log(numero);

let min=1;
let max=10;

let aleatorio = Math.floor(Math.random()*(max-min)+min);
console.log(aleatorio);