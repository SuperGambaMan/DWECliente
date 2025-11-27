// 3.7.4 Bucles - while
// Ejercicio 2 - pide un número y muestra la 
// suma de los números del 1 a ese número

let numUsuario = prompt("Elige un número", "");
let num = 0;
let suma = 0;
while (num < numUsuario) {
  console.log("Número: " + num);

  num++;

  suma += num;
}
console.log("La suma es " + suma);
