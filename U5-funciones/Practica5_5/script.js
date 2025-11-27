/*Práctica 5.5: Crear mapa con repeticiones de arrays
• Crea una función que reciba un array de palabras.

• La función devolverá un mapa que contenga como clave cada palabra y el valor es el número
de veces que esa palabra aparece en el array.

• Haremos una página web que lea palabras hasta que el usuario cancele o deje el cuadro vacío
y mostraremos las repeticiones de las palabras.*/

//Definimos la funcion que nos creara el Mapa de un array
function mapaArrays(palabras){

  //Comprobamos que le introducimos un ARRAY
  if (palabras instanceof Array == false){
    
    return null;

  } else {  

    //Creamos un MAPA
    let mapa = new Map();

    //Recorremos el MAPA añadiendo los elementos del ARRAY
    for (const key of palabras) {

      //Si se repiten le sumamos 1 al valor que hace de contador
      if (mapa.get(key)!=undefined) {
        mapa.set(key, mapa.get(key)+1);

        //Si no lo añadimos
      } else  {
        mapa.set(key,1);
      }
    }
    return mapa;
  }
}

//Creamos el mapa para usarlo luego
let mapa;

//Un array para listar las palabras del usuario
let listaPalabras = [];

//Palabra que nos pasara el usuario
let palabra;

//Pedimos al usuario una palabra que almacenaremos en 
// un set, hasta que no introduzca nada o le de a cancelar
do {
  palabra = prompt("Escribe una palabra(o nada si quieres acabar)");
  if(palabra != null && palabra !=""){

    listaPalabras.push(palabra);

  }
} while (palabra != null && palabra !="");

//Ordenamos la lista de palabras en orden inverso (de "Z" a "A")
listaPalabras.sort();

//metemos en la variable mapa el ARRAY pasado a MAPA con sus claves
mapa = mapaArrays(listaPalabras);

//Mostramos y escribimos en el HTML el mapa con su clave
for ([palabra,cont] of mapa) {
  document.write(`<p>${palabra},${cont}</p>`)
}
  
