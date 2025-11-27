/* Práctica 5.6: Función recursiva Fibonacci

• La función de Fibonacci es un clásico de la programación recursiva. Se trata de una función
relacionada con una sucesión de elementos donde los dos primeros son el cero y el uno, y el
resto son la suma de sus dos anteriores.

• Es decir, la sucesión es 0,1,1, 2, 3, 5, 8,13, 21, 34, 55, 89, etc.

• A la función le mandaríamos el número del que queremos saber el valor Fibonacci y nos
devolvería dicho valor. Así si pasamos el número 10, devolvería 55.

• Es mucho más fácil la solución recursiva, pero sería muy interesante hacer también la solu-
ción no recursiva. */

function fibonacci( num ){
    let num1 = 0;
    let num2 = 1;
    
    let res = 1;
    let resant= 1;

    let sucesion1 = 0;

    let sucesion2 = 1;
    for (let i = 0; i <= num; i++) {
        
        if ( i == 0 ){
            res = 0;
        } else if ( i == 1 ){
            res = 1;
        } else {
            num1 = sucesion1;
            num2 = sucesion2;

            res = num1 + num2;
            
            sucesion1 = res; 
            sucesion2 = resant

            resant = res;
        }
        console.log( 'Vuelta '+i+': '+res);
    }
    console.log( 'Resultado final: '+res);
}
numero = 10;
fibonacci(numero);