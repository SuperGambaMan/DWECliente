/* 4.1.3 Métodos de los Strings

Algunos métodos importantes:
 length → longitud del string
 toUpperCase() → mayúsculas
 toLowerCase() → minúsculas
 includes() → comprobar si contiene texto
 slice() → extraer partes del string
 replace() → reemplazar texto

let texto = "Aprendiendo JavaScript";

console.log(texto.length);
console.log(texto.toUpperCase());
console.log(texto.includes("Java"));
console.log(texto.slice(0, 11)); // "Aprendiendo"

Ejercicio propuesto:*/

//1. Pide al usuario una frase y muestra cuántos caracteres tiene.
let frase = prompt("Escribe una frase");

console.log(frase.length);

//2. Convierte la frase a mayúsculas y minúsculas.

//Mayusculas
console.log(frase.toUpperCase());

//Minuscula
console.log(frase.toLowerCase());

//3. Comprueba si contiene la palabra "JavaScript".
console.log(frase.includes("Javascript"));

//4. Extrae solo la palabra "JavaScript".
if (frase.includes("Javascript")) {
    console.log(frase.replace("Javascript", ""));

    //5. Reemplaza "JavaScript" por "JS". 
    console.log(frase.replace("Javascript" , "JS"));
}


