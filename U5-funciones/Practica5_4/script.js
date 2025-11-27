/*Práctica 5.4: Ordenar palabras en orden inverso

• Crea una aplicación que pida al usuario palabras continuamente hasta que se acepte el cua-
dro sin texto o se cancele.

• Se eliminarán las palabras repetidas y además se ordenarán en español, pero en orden inverso
(de la Z a la A).*/

let almacenPalabras = new Set();

let listaPalabras = [];

let palabra;

//Pedimos al usuario una palabra que almacenaremos en 
// un set, hasta que no introduzca nada o le de a cancelar
do {
  palabra = prompt("Escribe una palabra(o nada si quieres acabar)");
  if(palabra != null){
    almacenPalabras.add(palabra)
  }
} while (palabra != null && palabra !="");

//Pasamos el SET a un ARRAY para ordenarlo
listaPalabras=[...almacenPalabras];

//Ordenamos la lista de palabras en orden inverso (de "Z" a "A")
listaPalabras.sort((a,b)=>(b.localeCompare(a)));

//Mostramos y escribimos en el HTML toda la lista
listaPalabras.forEach(function(pal){
  document.write(`<p>${pal}</p>`)
});