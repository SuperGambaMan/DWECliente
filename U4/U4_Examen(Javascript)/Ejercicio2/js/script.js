/*
Ejercicio 2 – Gestión dinámica de pedidos (Arrays)
Contexto:
Estás desarrollando el módulo de pedidos de una aplicación de comida a domicilio. Debes
gestionar los productos que los usuarios añaden a su carrito y calcular el importe final.
Puntuación total: 2.5 puntos
1. (0.5 ptos) Crea un array llamado carrito con los valores:
["pizza", "ensalada", "refresco", "pizza", "postre"].
2. (0.5 ptos) Elimina los duplicados utilizando un método apropiado (por ejemplo, combinando Set y
Array.from).
3. (0.5 ptos) Añade un nuevo producto "hamburguesa" y elimina el último elemento.
4. (0.5 ptos) Crea un array paralelo precios = [12, 8, 3, 12, 5] y calcula el importe total sumando los
precios correspondientes del carrito original.
5. (0.5 ptos) Usa un método de ordenación para mostrar los productos ordenados alfabéticamente.
*/

/*
1. (0.5 ptos) Crea un array llamado carrito con los valores:
["pizza", "ensalada", "refresco", "pizza", "postre"]..
*/

let carrito = ["pizza", "ensalada", "refresco", "pizza", "postre"];

/*
2. (0.5 ptos) Elimina los duplicados utilizando un método apropiado 
(por ejemplo, combinando Set y Array.from).
*/

let carritoSinDuplicado = new Set ();
carritoSinDuplicado.add(carrito);

console.log(carritoSinDuplicado);
Array.from(carritoSinDuplicado);

console.log(carritoSinDuplicado);

/*
3. (0.5 ptos) Añade un nuevo producto "hamburguesa" y elimina el último elemento.
*/

//como no lo podia hacer lo he hecho asi
let carrito2 = ["ensalada", "refresco", "pizza", "postre"];
carrito.push("hamburguesa");
carrito.pop();

console.log("Apartado 3: "+carrito2);


/*
4. (0.5 ptos) Crea un array paralelo precios = [12, 8, 3, 12, 5] y calcula 
el importe total sumando los precios correspondientes del carrito original.
*/

let carritoOriginal = ["pizza", "ensalada", "refresco", "pizza", "postre"];
let precios = [12, 8, 3, 12, 5];



let suma;


/*
5. (0.5 ptos) Usa un método de ordenación para 
mostrar los productos ordenados alfabéticamente.
*/

function ordenarAlfabeticamente(lista){
    return lista.toSorted();
}

let carrito3 = ["pizza", "ensalada", "refresco", "pizza", "postre"];
let resultado = ordenarAlfabeticamente(carrito3);


console.log("Apartado 5: "+resultado);
