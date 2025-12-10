// Funcion llamando parametros con valor por defectos

function showMessage(from, text="sin texto"){ //parametros: from, text
    
    alert(from +': '+text);

}

showMessage('Ann', '¡Hola!'); // Ann: ¡Hola!
showMessage('Ann', '¿Como estás?'); // Ann: ¿Como estás?


showMessage('Ann');








//Funcion con otra funcion que llama en el parametro

function anotherFunction(){

    return 'tenemos texto';

}

function showMessage2(from, text=anotherFunction()){ //parametros: from, text    

    alert(from +': '+text);
}

showMessage2('Ann');
