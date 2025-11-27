/* Práctica 5.3: Función que permite saber si un número es
primo
• Crea una función que permita saber si un número es primo o no.

• Un número es primo si no se puede dividir de forma entera por otro número, sin contar el
uno ni el propio número, dando un resto de cero.

• Aprovecha la función creada para crear una página web que escriba los números primos del
lal 1000. */

function esPrimo(num) {

  //Si el numero es menor de 1 o 1 diremos que no es primo
  if (num<=1) {
    return false;
  }

  //realizamos un bucle que empezara en 2 descartando las 
  // 2 primeras posibilidades descartadas
  for (let i = 2; i*i <= num; i++) {

    //Comprobamos que el numero introducido 
    // es divisible por el contador
    if (num % i == 0) {

      //Si es asi el numero no es primo
      return false;
    }
  }
  //Si sale del bucle sin ser divisible entre ninguno es primo
  return true;
}

//Conseguimos al id que haremos referencia del HTML
const primo = document.getElementById("primo");

//contador para contar cuantos numeros primos hay en el bucle
let cont=0;

// recorremos del 1 al 1000 buscando primos y si 
// lo encontramos lo escribimos en el HTML
for (let i = 1; i <= 1000; i++) {
  if (esPrimo(i)) {
    cont++;
    primo.innerHTML += cont+". "+ i + " es primo.<br>"
  }
}