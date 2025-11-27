"use strict";

//Este va a ser mi codigo de script

function suma(valor1, valor2){
    return valor1 + valor2;
}
function resta(valor1, valor2){
    return valor1 - valor2;
}
function multiplicar(valor1, valor2){
    return valor1 * valor2;
}


function recogerNumeros(){
    //Obtenemos los numeros
    console.log("Recogiendo numeros");

    //Obtener numero 1
    var num1 = document.getElementById("txtNumero1").value;
    //console.log("Numero 1: " + num1);
    num1 = Number(num1);

    //Obtener numero 2
    var num2 = document.getElementById("txtNumero2").value;
    //console.log("Numero 2: " + num2);
    num2 = Number(num2);
    return [num1, num2];
}


//realiza la operacion de suma
function realizarOperacionSuma(){

    //Comenzamos con la suma
    console.log("Realizar operacion de suma");

    //Obtenemos los numeros con la funcion recogerNumeros()
    var devuelto = recogerNumeros();

    //Asignamos los valores a variables desde el array devuelto
    var num1= devuelto[0];
    var num2= devuelto[1];

    var resultadoSuma = 0;

    //realizar la suma
    if (!isNaN(num1) && !isNaN(num2)) {
         resultadoSuma = suma(num1, num2);
    } else {
        console.log("No puedo hacer la suma");
        return;
    }

    //var operacion=" la suma: ";
    console.log("Resultado de la suma: " + resultadoSuma);

    //Mostrar el resultado en etiqueta
    var lblResultado = document.getElementById("resultOp"); //Elemento del DOM
    lblResultado.innerHTML = " la suma: "+resultadoSuma.toFixed(2); //Modificar el contenido del elemento
}


//realiza la operacion de resta
function realizarOperacionResta(){

    //Comenzamos con la suma
    console.log("Realizar operacion de resta");

    //Obtenemos los numeros con la funcion recogerNumeros()
    var devuelto = recogerNumeros();

    //Asignamos los valores a variables desde el array devuelto
    var num1= devuelto[0];
    var num2= devuelto[1];

    var resultadoResta = 0;

    //realizar la resta
    if (!isNaN(num1) && !isNaN(num2)) {
         resultadoResta = resta(num1, num2);
    } else {
        console.log("No puedo hacer la resta");
        return;
    }

    //var operacion=" la resta: ";
    console.log("Resultado de la resta: " + resultadoResta);

    //Mostrar el resultado en etiqueta
    var lblResultado = document.getElementById("resultOp"); //Elemento del DOM
    lblResultado.innerHTML = " la resta: "+resultadoResta.toFixed(2); //Modificar el contenido del elemento
}

//realiza la operacion de Multiplicar
function realizarOperacionMultiplicar(){

    //Comenzamos con la multiplicación
    console.log("Realizar operacion de multiplicación");

    //Obtenemos los numeros con la funcion recogerNumeros()
    var devuelto = recogerNumeros();

    //Asignamos los valores a variables desde el array devuelto
    var num1= devuelto[0];
    var num2= devuelto[1];

    var resultadoMultiplicar = 0;

    //realizar la suma
    if (!isNaN(num1) && !isNaN(num2)) {
         resultadoMultiplicar = multiplicar(num1, num2);
    } else {
        console.log("No puedo hacer la multiplicación");
        return;
    }

    //var operacion=" la multiplicación: ";

    console.log("Resultado de la multiplicación: " + resultadoMultiplicar);

    //Mostrar el resultado en etiqueta
    var lblResultado = document.getElementById("resultOp"); //Elemento del DOM
    lblResultado.innerHTML = " la multiplicación: "+resultadoMultiplicar.toFixed(2); //Modificar el contenido del elemento
}


// Funcion de inicializacion
function init(){

    //Obtengo la referencia al boton de sumar (btnSumar)
    var btnSumar=document.getElementById("btnSumar");

    //Añado el evento click al boton de sumar
    btnSumar.addEventListener('click', realizarOperacionSuma );

    
    //Obtengo la referencia al boton de sumar (btnRestar)
    var btnRestar=document.getElementById("btnRestar");

    //Añado el evento click al boton de sumar
    btnRestar.addEventListener('click', realizarOperacionResta );


    //Obtengo la referencia al boton de sumar (btnMultiplicar)
    var btnMultiplicar=document.getElementById("btnMultiplicar");

    //Añado el evento click al boton de sumar
    btnMultiplicar.addEventListener('click', realizarOperacionMultiplicar );

}


//Cuando se carga el DOM se llama a init
window.onload = init;