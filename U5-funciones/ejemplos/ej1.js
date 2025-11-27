//Funciones 

function showMessage(){
    let message = "Hola, ¡Soy JavaScript!"; //variable local

    alert(message);
}

showMessage(); // Hola, ¡Soy JavaScript!,

alert(message); // Error la variable es local de la funcion

//funcines con parametros acumulativos

function name(parametro1,parametro2,...parametron){
    alert(parametro1)
}
