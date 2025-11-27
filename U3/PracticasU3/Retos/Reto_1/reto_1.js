/*
RETO 1
Crea un programa que convierta una cantidad ingresada por el usuario en euros a otra moneda (por
ejemplo, dólares y libras).
Apartados:
1. (3 pts) Solicitar al usuario mediante prompt la cantidad en euros (como número).
2. (2 pts) Declarar dos variables distintas para el tipo de cambio a dólares y a libras, asignar
valores fijos.
3. (3 pts) Calcular el equivalente en dólares y en libras, y mostrar los resultados con alert,
incluyendo texto explicativo.
4. (2 pts) Verificar que la entrada del usuario es un número válido (usar isNaN). Si no lo es,
mostrar un mensaje de error y no hacer la conversión.
*/

// Declaramos las variables Constantes para el cambio
const DOLAR = 1.1; // 1 Euro = 1.1 Dólares
const LIBRA = 0.9; // 1 Euro = 0.9 Libras

//Solicitamos al usuario la cantidad en euros
let euros = prompt("Euros (€) a convertir: ");

euros= euros.trim(); //Eliminamos espacios en blanco al inicio y al final

euros = Number(euros); //Convertimos la entrada a número

console.log(euros); //Mostramos en consola el valor ingresado por el usuario

//Comprobamos si la entrada es un número válido
if (isNaN(euros) ) {
    alert("Error: Por favor, ingrese un número válido.");
} else {

    //Si la entrada es válida, procedemos con la conversión
    let cantidadDolares = euros * DOLAR;
    let cantidadLibras = euros * LIBRA;

    //Mostramos los resultados al usuario
    alert(`${euros}€ son equivalentes a ${cantidadDolares.toFixed(2)}$.`);
    
    alert(`${euros}€ son equivalentes a ${cantidadLibras.toFixed(2)}£.`);
}
    