"use strict";

//Este va a ser mi codigo de script
function recogerNumeros(){
    //Obtenemos los numeros
    console.log("Recogiendo numeros");

    //Obtener filas
    var filas = document.getElementById("txtFilas").value;
    //console.log("Filas: " + filas);
    filas = Number(filas);

    // Limitamos las filas a 10 y si nos pasamos las igualamos a 10
    if (filas > 10) {
        filas = 10;
        alert("El número de filas no puede ser mayor a 10. Se ajustará automáticamente a 10.");
    }

    //Obtener columnas
    var columnas = document.getElementById("txtColumnas").value;
    //console.log("Columnas: " + columnas);
    columnas = Number(columnas);
    
    // Limitamos las columnas a 10 y si nos pasamos las igualamos a 10
    if (columnas > 10) {
        columnas = 10;
        alert("El número de columnas no puede ser mayor a 10. Se ajustará automáticamente a 10.");
    }

    //Obtener numMax
    var numMax = document.getElementById("txtNumeroMaximo").value;
    //console.log("Numero Máximo: " + numMax);
    numMax = Number(numMax);

    return [filas, columnas, numMax];
}

//realiza la operacion de suma
function mostrarMatriz(){

    //Recogemos los numeros del formulario en variables creadas
    var devuelto = recogerNumeros();

    var filas = devuelto[0];
    var columnas = devuelto [1];
    var numMax = devuelto [2];


    // Aqui ira lo que devolvera al HTML
    var resultadoMatriz = `<table border="1">`

    //Generamos la matriz
    var matriz= [];
    
    //Rellenamos el array
    for (let i = 0; i < filas; i++) {
        //Generamos el numero aleatorio
        
        matriz [i] = [];
        resultadoMatriz += `<tr>`;

        for (let j = 0; j < columnas; j++) {

            //Generamos el numero aleatorio
            var numAle = Math.random()*numMax;

            //Lo introducimos en la matriz y luego lo metemos en la tabla
            matriz [i][j]=numAle.toFixed(0);
            resultadoMatriz += `<td> ${matriz[i][j]} </td>`;
        }

        resultadoMatriz += `</tr>`;
    }
    resultadoMatriz += `</table>`;

    //Comprobamos por consola la Matriz;
    console.log(resultadoMatriz);

    //Mostrar el resultado en etiqueta
    var lblResultado = document.getElementById("resultTabla"); //Elemento del DOM
    lblResultado.innerHTML = resultadoMatriz; //Modificar el contenido del elemento
}



// Funcion de inicializacion
function init(){

    //Obtengo la referencia al boton de mostrar matriz (btnMatriz)
    var btnMatriz=document.getElementById("btnMatriz");

    //Añado el evento click al boton de mostrar matriz
    btnMatriz.addEventListener('click', mostrarMatriz );

}


//Cuando se carga el DOM se llama a init
window.onload = init;