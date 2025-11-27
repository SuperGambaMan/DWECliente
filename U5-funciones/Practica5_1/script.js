/* Práctica 5.1: Función de pares e impares

• En esta práctica crearemos una función muy sencilla que devuelve la palabra "par" si la envia-
mos un número par. En caso contraría retorna la palabra "impar".

• Conseguir que se escriban en una página web 500 números aleatorios del 1 al 10.000 y que a
su lado se diga si es par o impar gracias a la función anterior. */

function par ( num ){
    if (num % 2 == 0){
        return 'par';
    } else {
        return 'impar';
    }
}

function numeroAle () {
    
        let numale = Math.floor(Math.random() * 10000) + 1;
        return numale + ' '+par(numale);

}

const contenedor = document.getElementById("resultados");

for (let i = 0; i < 500 ; i++) {
    let resultado = numeroAle();
    console.log(numeroAle());
    contenedor.innerHTML += (i+1) + ': ' + resultado + "<br>";
}