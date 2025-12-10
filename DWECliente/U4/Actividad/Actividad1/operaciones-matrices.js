/*
Operaciones con matrices.
Importancia: 5
Probemos 5 operaciones con matrices.

Crea una matriz stylescon los elementos “Jazz” y “Blues”.
Añada “Rock-n-Roll” al final.
Sustituye el valor central por “Classics”. El código para encontrar el valor central debería funcionar con cualquier array de longitud impar.
Extrae el primer valor de la matriz y muéstralo.
Anteponer " Rapy" Reggaeal array.
La matriz en el proceso:

Jazz, Blues
Jazz, Blues, Rock-n-Roll
Jazz, Classics, Rock-n-Roll
Classics, Rock-n-Roll
Rap, Reggae, Classics, Rock-n-Roll 
*/

let styles = ["Jazz", "Blues"];
console.log(styles);

styles.push("Rock-n-Roll");
console.log(styles);

if (styles.length % 2 === 1) {
    styles[Math.floor(styles.length / 2)] = "Classics";
}
console.log(styles);

styles.shift();
console.log(styles);

styles.unshift("Rap", "Reggae");
console.log(styles);