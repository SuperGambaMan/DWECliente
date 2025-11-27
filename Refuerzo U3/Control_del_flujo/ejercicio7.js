/* Ejercicio 7: Pirámide de asteriscos
Objetivo: Trabajar bucles anidados for y control del flujo. */

//1. Pide al usuario el número de filas de la pirámide.
let numero;

do {
    numero = Number(prompt("Introduce el número de filas"));
} while (numero < 0 || isNaN(numero));

//2. Crea un bucle externo que recorra las filas.
for (let i = 1; i <= numero; i++) {
    let piramide = "";
    //3. Dentro de ese bucle, crea un bucle que agregue 
    // los asteriscos necesarios para cada fila.
    
    for (let j = 1; j <= i; j++) {
        piramide +="*";
        
    }
    //4. Muestra cada fila en la consola de forma que se vea una pirámide.
    console.log(piramide);
}

//5. Añade un mensaje al final indicando “Pirámide completa”.
console.log("Pirámide completa");

