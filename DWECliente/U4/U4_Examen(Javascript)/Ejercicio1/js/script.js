/*
Ejercicio 1 – Limpieza y análisis de texto (Strings)

Contexto:
Una empresa de marketing necesita analizar comentarios de usuarios en redes sociales para
detectar palabras clave. El texto debe limpiarse y procesarse antes de su análisis.
Puntuación total: 2.5 puntos

1. (0.5 ptos) Crea una variable llamada comentario con el texto:
&quot;¡Excelente servicio! Muy recomendable. excelente atención al cliente.&quot;
2. (0.5 ptos) Convierte todo el texto a minúsculas y elimina los signos de exclamación y punto
utilizando métodos de los strings.
3. (0.5 ptos) Divide el texto resultante en un array de palabras usando el método split().
4. (0.5 ptos) Cuenta cuántas veces aparece la palabra &quot;excelente&quot; en el texto.
5. (0.5 ptos) Crea una función resumenComentario() que reciba un texto y devuelva cuántas
palabras contiene y cuántas veces aparece una palabra clave dada.
*/

/*
1. (0.5 ptos) Crea una variable llamada comentario con el texto:
"¡Excelente servicio! Muy recomendable. excelente atención al cliente.";
*/

let comentario ="¡Excelente servicio! Muy recomendable. excelente atención al cliente.";

/*
2. (0.5 ptos) Convierte todo el texto a minúsculas y elimina los 
signos de exclamación y puntoutilizando métodos de los strings.
*/

//Pasamos a minuscula todo el texto
comentario=comentario.toLowerCase(comentario);
console.log(comentario);

//Eliminamos los signos de exclamación y punto
comentario = comentario.replaceAll("!","");
comentario = comentario.replaceAll("¡","");
comentario = comentario.replaceAll(".","");
console.log("Apartado 2: "+comentario);

/*
3. (0.5 ptos) Divide el texto resultante en 
un array de palabras usando el método split().
*/

//le hacemos split separando por espacios(" ")
let arrPalabras = comentario.split(" ");
console.log("Apartado 3: "+arrPalabras);

/*
4. (0.5 ptos) Cuenta cuántas veces 
aparece la palabra "excelente" en el texto.
*/

let contador=0;

//Recorremos el ARRAY para buscar cuantas veces aparece "excelente"
for (let i = 0; i < arrPalabras.length; i++) {
    if (arrPalabras[i]=="excelente") {
        contador++;
    } 
}

console.log("Apartado 4: "+contador);

/*
5. (0.5 ptos) Crea una función resumenComentario() que reciba un texto y devuelva 
cuántas palabras contiene y cuántas veces aparece una palabra clave dada.
*/
function resumenComentario(texto, palabraClave){

    texto=texto.toLowerCase(texto);

    texto = texto.replaceAll("!","");
    texto = texto.replaceAll("¡","");
    texto = texto.replaceAll(".","");

    texto = texto.split(" ");

    let contador=0;

    for (let i = 0; i < texto.length; i++) {

        if (texto[i]===palabraClave) {
            console.log(texto[i]);
           contador++;
        } 

    }

    return "Tiene "+texto.length+ " palabras y "+palabraClave+" sale "+contador+" veces";
}

comentario= "¡Excelente servicio! Muy recomendable. excelente atención al cliente.";

let resultado = resumenComentario(comentario,"excelente");

console.log("Apartado 5: "+resultado);
