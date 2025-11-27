// 3.7.4 Bucles - while
// Ejercicio 1 - Muestra los números del 1 al 10 con WHILE

let num = 1;
let res = "";
while (num <= 10) {
  console.log("Número: " + num);

  res += num + " ";

  num++;
}

console.log("Números: " + res);
