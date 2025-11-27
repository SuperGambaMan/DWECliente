/* Pregunta 2: Expresión de Función y Hoisting (2.5 puntos)
Se requiere crear una función que determine si un número es positivo
(mayor a 0). */

/* a) (1.0 punto) Crea una función anónima que reciba un número (n) y
retorne la expresión booleana n > 0. */

/* b) (1.0 punto) Asigna esa función anónima a una variable llamada
esPositivo. */

/* c) (0.5 puntos) Si intentaras invocar esPositivo(10) antes de la línea
donde la definiste (apartado b), ¿el código funcionaría? Justifica tu
respuesta. */

/* RESPUESTA

Si pusiesemos este codigo en esta linea:

esPositivo(10);

Al llamar a la funcion no se puede por que todavia no esta inicializada, 
por lo tanto el código no funcionará.
*/

//esPositivo(10);

let esPositivo = (n) => {
  let comprobar = n > 0;
  return comprobar;
};

//comprobamos que la funcion, funciona correctamente
let positivo = esPositivo(2);
console.log(positivo);




