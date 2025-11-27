/*
Ejercicio 3 – Control de asistencia y duplicados (Sets)
Contexto:
Un centro de formación necesita un programa para registrar los estudiantes asistentes a un taller,
evitando duplicados y permitiendo combinar listas de distintos días.
Puntuación total: 2.5 puntos
1. (0.5 ptos) Crea dos conjuntos:
dia1 = new Set(["Ana", "Luis", "María", "Carlos"])
dia2 = new Set(["María", "Pedro", "Ana", "Lucía"])
2. (0.5 ptos) Combina ambos conjuntos en un nuevo conjunto asistentesTotales sin duplicados.
3. (0.5 ptos) Muestra la cantidad total de asistentes únicos.
4. (0.5 ptos) Elimina del conjunto a "Carlos" y muestra el conjunto actualizado.
5. (0.5 ptos) Convierte el conjunto en un array ordenado alfabéticamente y muéstralo en consola.
 */

/*
1. (0.5 ptos) Crea dos conjuntos:
dia1 = new Set(["Ana", "Luis", "María", "Carlos"])
dia2 = new Set(["María", "Pedro", "Ana", "Lucía"])
*/

dia1 = new Set(["Ana", "Luis", "María", "Carlos"])

dia2 = new Set(["María", "Pedro", "Ana", "Lucía"])

/*
2. (0.5 ptos) Combina ambos conjuntos en un nuevo conjunto asistentesTotales sin duplicados.
*/

function combinar (set1, set2){
    const conjunto = new Set([...set1, ...set2]);
    return conjunto;
}

let conjunto =combinar(dia1,dia2);

console.log(conjunto);

/*
3. (0.5 ptos) Muestra la cantidad total de asistentes únicos.
*/

console.log("Apartado 3: "+conjunto.size);

/*
4. (0.5 ptos) Elimina del conjunto a "Carlos" y muestra el conjunto actualizado.
*/

function eliminarDelConjunto(conjunto, palabra){
    conjunto.delete(palabra);
    return conjunto;
}

console.log(eliminarDelConjunto(conjunto , "Carlos"))

/*
5. (0.5 ptos) Convierte el conjunto en un array ordenado alfabéticamente y muéstralo en consola.
*/

function arrayAlfabetico(conjunto){

    //Pasamos el conjunto a ARRAY
    let list;
    list = Array.from(conjunto);

    //Lo ordenamos alfabeticamente
    list.toSorted;

    //Devolvemos el ARRAY
    return list;
}

//console.log(arrayAlfabetico(conjunto));