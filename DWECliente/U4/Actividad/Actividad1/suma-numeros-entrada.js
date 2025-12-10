/*
Suma los números de entrada
Importancia: 4
Escribe la función sumInput()que:

Solicita valores al usuario prompty los almacena en la matriz.
Finaliza la solicitud cuando el usuario introduce un valor no numérico, una cadena vacía o pulsa “Cancelar”.
Calcula y devuelve la suma de los elementos de la matriz.
PD: El cero 0es un número válido, por favor no detenga la entrada en cero.
*/

function sumInput() {
    let numbers = [];
    
    let salir = false;
    while (!salir) {
        //Pedimos por pantalla al usuario un valor
        let value = prompt("Introduce un número:", "");

        //Si el valor es nulo, vacío o no es un número, salimos del bucle
        if (value === null || value ==="" || isNaN(value)){
            salir = true;
        }

        //Si no, añadimos el valor convertido a número al ARRAY
        else {
        numbers.push(+value);
        }

    }
    
    let sum = 0;

    //Recorremos el ARRAY y sumamos sus valores
    for (let number of numbers) {

        sum += number;

    }
    
    //Mostramos la suma por consola
    console.log(sum);

    return sum;

}
sumInput();