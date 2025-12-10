//Funcion cambiando el valor externo dentro de la funcion

let userName = 'Juan';

function showMessage(){
    userName = 'Bob'; //cambio la variable externa
    let message = 'Hola, ' + userName; //variable local

    alert(message);
}

alert(userName); // Juan

showMessage(); // Hola, Bob

alert(userName) //Bob -- Ha cambiado despues de ejecutar la funcion


