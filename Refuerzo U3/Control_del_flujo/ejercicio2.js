/* Ejercicio 2: Juego de adivinanza
Objetivo: Trabajar condicionales, bucles do...while y control de flujo. */

//1. Genera un número aleatorio entre 1 y 50.
let numale = Math.floor((Math.random()*50)+1);
console.log(numale);

//3. Usa un bucle do...while para permitir varios intentos.
let numAdivinar;

do{
    //2. Pide al usuario que intente adivinar el número.
    numAdivinar = prompt("Intenta adivinar el número","");

    //4. Indica si el número ingresado es mayor o menor que el número secreto.
    if (numAdivinar > numale) {
        alert("El número es menor")
    } else if (numAdivinar < numale) {
        alert("El número es mayor")
    } else if (numAdivinar==numale){
        alert("Has acertado el número!!")
    }else {
        alert("No has introducido un número")
    }
    
//5. Termina el bucle cuando el usuario adivine 
// el número y muestra un mensaje de felicitación.
} while (numAdivinar != numale || isNaN(numAdivinar)|| numAdivinar>50 || numAdivinar<1);
    






