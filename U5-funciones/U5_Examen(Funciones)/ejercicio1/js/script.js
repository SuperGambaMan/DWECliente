/* Pregunta 1: Función Declarativa y Ámbito (3.0 puntos)
Se requiere crear una función para convertir una temperatura de Celsius a
Fahrenheit. */

/* a) (1.0 punto) Escribe la sintaxis de declaración de una función llamada
celsiusToFahrenheit que reciba un parámetro llamado celsius. */

function celsiusToFahrenheit(celsius) {

  /* b) (1.5 puntos) Dentro del cuerpo de la función, declara una variable
local llamada fahrenheit donde realices el cálculo (F = C x 9/5 + 32) y usa
la palabra clave adecuada para devolver el resultado. */
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

//Comprobamos que la funcion, funciona correctamente
console.log(celsiusToFahrenheit(20));

/* c) (0.5 puntos) ¿Qué sucedería si intentas acceder a la variable
fahrenheit desde fuera de la función, por ejemplo, usando
console.log(fahrenheit)? Responde brevemente. */

console.log(fahrenheit);

/* RESPUESTA 
Este console.log no se ejecuta por que la variable fahrenheit no se
encuentra definida fuera de la function, por lo tanto da error al 
intentar acceder a la variable. */
