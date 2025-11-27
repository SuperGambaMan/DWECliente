/* Pregunta 3: Funciones Flecha Básicas (2.5 puntos)
Se requiere una función para calcular el porcentaje de un número. */

/* a) (1.0 punto) Escribe una función de flecha (arrow function) llamada
calcularPorcentaje que reciba dos parámetros: numero y porcentaje, y
retorne el resultado. (Fórmula: numero x (porcentaje / 100)). */

let calcularPorcentaje = (numero, porcentaje) => {
  let formula = numero * (porcentaje / 100);

  return formula;
};

//Comprobamos que la funcion, funciona correctamente
let calculamos = calcularPorcentaje(100, 20);
console.log(calculamos);

/* b) (1.0 punto) Escribe una función flecha llamada saludoSimple que no
reciba ningún parámetro y retorne la cadena de texto "Hola desde la
función flecha!". */

let saludoSimple = () => {
  let msg = "Hola desde la función flecha!";
  return msg;
};

console.log(saludoSimple());

/* c) (0.5 puntos) ¿Qué elemento sintáctico es obligatorio en una función
flecha que no recibe parámetros? Muestra un ejemplo de cómo escribirías
dicha función. */

//Por ejemplo
() => {
  let msg = "Hola, ¿Que tal estamos?";
  return msg;
};

/* RESPUESTA
Serian obligatorias los "()" ya que no puedes poner la flecha
directamente, daria error de sintaxis. 
*/
