/* 4.3 Recorrer Arrays

4.3.1 Uso del bucle for

let numeros = [1, 2, 3];

for (let i = 0; i <; numeros.length; i++) {
console.log(numeros[i]);
}

4.3.2 Bucle for...in

Recorre los índices de un array:

for (let i in numeros) {
console.log(i, numeros[i]);
}

4.3.3 Bucle for...of

Recorre los valores directamente:

for (let num of numeros) {
console.log(num);
}

Ejercicio propuesto:*/

//1. Muestra los elementos de un array usando for.
let numeros = [1, 2, 3];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//2. Recorre el mismo array usando for...in.
for (const indice in numeros) {
    console.log(indice,numeros[indice]);
}

//3. Recorre el mismo array usando for...of. 
for (const num of numeros) {
    console.log(num);
}

