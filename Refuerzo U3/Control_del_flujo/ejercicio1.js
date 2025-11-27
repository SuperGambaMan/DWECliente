/*Ejercicio 1: Calculadora de números aleatorios
Objetivo: Practicar la generación de números aleatorios, condicionales y bucles.*/

//1. Genera dos números aleatorios entre 1 y 20.
let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;

//2. Muestra ambos números en la consola.
console.log("Número 1: " + num1);
console.log("Número 2: " + num2);

//3. Comprueba cuál número es mayor usando if.
if (num1 > num2) {
    console.log("Numero 1 es mayor")
} else if (num1 < num2) {
    console.log("Numero 2 es mayor")
} else {
    console.log("Son iguales")
}

//4. Crea un bucle while que siga generando números 
// aleatorios hasta que ambos sean iguales.
let cont=1;
while (num1 != num2){
    num1 = Math.floor(Math.random() * 20) + 1;
    num2 = Math.floor(Math.random() * 20) + 1;
    cont++;
}

//5. Muestra en la consola cuántos intentos fueron 
// necesarios para que los números coincidieran. 
console.log("Se necesitaron "+cont+" intentos.");


