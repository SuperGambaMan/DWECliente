/* Ejercicio 6: Secuencia de números con saltos
Objetivo: Usar bucles for y continue para controlar el flujo. */

//1. Crea un bucle for que recorra los números del 1 al 20.
for (let i = 1; i <= 20; i++) {

    //4. Añade una condición para detener el bucle si 
    // llegas a un número mayor que 18 usando break.
    if ( i > 18 ) break;

    //2. Salta los números múltiplos de 3 usando continue.
    if ( i % 3 == 0 ) continue;

    //3. Muestra en la consola los números que no se saltaron.
    console.log(i);
    
}

//5. Muestra un mensaje indicando cuándo se interrumpió el bucle.
console.log("Aquí se acabó el bucle")



