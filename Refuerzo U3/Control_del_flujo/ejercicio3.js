/* Ejercicio 3: Tabla de multiplicar con bucles anidados
Objetivo: Usar bucles for anidados y condicionales simples. */

//1. Crea un bucle que recorra los números del 1 al 5.
for (let a = 1; a <= 5; a++) {

    //2. Dentro de ese bucle, crea otro bucle que recorra del 1 al 5.
    for (let b = 1; b <= 5; b++) {

        //3. Multiplica los números de ambos bucles y 
        // muestra el resultado en formato a x b = resultado.
        let res = a*b;
        let resultado = a+" x "+b+" = "+res;
        
        //5. Muestra los resultados en la consola.
        console.log(resultado);

        //4. Añade una condición que indique 
        // si el resultado es par o impar.
        if (res%2==0){
            console.log("Es par");
        } else {
            console.log("Es impar");
        }
    }
}






