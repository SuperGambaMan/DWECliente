/* Ejercicio 4: Lista de números positivos
Objetivo: Trabajar bucles while, break y condicionales. */

//1. Pide al usuario que ingrese números uno a uno.
let numero;
let numeros = [];
let cont=0;
do {
    numero = Number(prompt("Inserta un número positivo (negativo para salir)",""));

    //2. Almacena los números positivos en un array.
    
    if (numero>0) {
        numeros[cont] = numero;

    //4. Muestra todos los números positivos ingresados.
    console.log("Numero "+(cont)+" del ARRAY: "+numero);

        cont++;
    } 
    //3. Si el usuario ingresa un número negativo, usa break para salir del bucle.
    else if (numero<0) break;

} while (numero > 0 || isNaN(numero));

//5. Indica cuántos números positivos se ingresaron.
console.log("Cantidad de números positivos: "+cont);