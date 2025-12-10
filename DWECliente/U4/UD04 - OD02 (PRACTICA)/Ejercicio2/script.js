/*
Ejercicio 2 – Observación Directa UD3 - (OD02)
Revirtiendo un array
Los arrays tienen un método reverse que cambia al array
invirtiendo el orden en que aparecen sus elementos. Para este
ejercicio, escribe dos funciones, revertirArray y revertirArrayEnSuLugar.
El primero, revertirArray, toma un array como argumento y produce
un nuevo array que tiene los mismos elementos pero en el orden
inverso. El segundo, revertirArrayEnSuLugar, hace lo que hace el
métodoreverse: modifica el array dado como argumento invirtiendo
sus elementos. Ninguno de los dos puede usar el
método reverse estándar.
Pensando en las notas acerca de los efectos secundarios y las
funciones puras en el capítulo anterior, qué variante esperas que
sea útil en más situaciones? Cuál corre más rápido?
// Tu código aquí.
console.log(revertirArray(["A", "B", "C"]));
// ["C", "B", "A"]; →
let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray);
// [5, 4, 3, 2, 1] →
*/

function revertirArray(lista){

  const nuevaLista =[];

  for (let i = (lista.length-1); i >= 0; i-- ){
    nuevaLista.push(lista[i]);
  }

  return nuevaLista;
}

function revertirArrayEnSuLugar(lista){

  let longitud = lista.length;

  for (let i = longitud-1; i >= 0 ; i-- ){
    lista.push(lista[i]);
  }

  for (let i = 0; i < longitud; i++) {
    lista.shift();
  }

  return lista;
}

// Pruebas
console.log(revertirArray(["A", "B", "C"])); // → ["C", "B", "A"]; 

let valorArray = [1, 2, 3, 4, 5];
revertirArrayEnSuLugar(valorArray);
console.log(valorArray); //  → [5, 4, 3, 2, 1]
