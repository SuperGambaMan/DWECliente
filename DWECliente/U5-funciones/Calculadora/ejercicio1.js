"use strict"; // se usa para hacer un uso estricto de unas normas


function sumar (num1,num2){
    
    return num1 + num2;
    
}

function manejadorClickOperar(e) {
 
    e.preventDefault();

    let numero1 = document.getElementById("numero1"); 

    let numero2 = document.getElementById("numero2");

    let result = document.getElementById("resultado");

    result.innerHTML = sumar(numero1.valueAsNumber,numero2.valueAsNumber);

}

function manejadorClickSubscribir(e) {
    let result=document.getElementById("resultad");
    let subscribir = document.getElementById("pregunta");
    subscribir = confirm("Te quieres subscribir?");
    if(subscribir){
        result.innerText="Has sido subscrito";
    }else{
        result.innerText="No te has subscrito";
    }

}

//duncion de expresion
let init = (e) => {

    

//Obtener documento del DOM

    //click del botno OPERAR
    let btnSumarElement = document.getElementById("btnSumar");

    btnSumarElement.addEventListener("click", manejadorClickOperar);

    //click del boton SUSCRIBIR
    let btnSubscribirElement = document.getElementById("btnSubscribir");

    btnSubscribirElement.addEventListener("click", manejadorClickSubscribir);


};

// funcion manejadora de evento global
window.onload = init ;
