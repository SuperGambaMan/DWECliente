/* Pregunta 4: Invocación y Parámetros (2.0 puntos)
Considera la siguiente función declarativa:
*/

function unirNombres(nombre, apellido) {
  return nombre + " " + apellido;
}

/* a) (0.75 puntos) Invoca la función unirNombres con los valores "Jose" y
"Garcia", y muestra el resultado directamente en la consola. */

let nombreUnido = unirNombres("Jose", "García");

console.log(nombreUnido);

/* b) (0.75 puntos) Muestra cómo podrías reescribir la función unirNombres
como una Expresión de Función (anónima) asignada a una variable 
llamada unirConExpresion. */

let unirConExpresion = function (nombre, apellido) {
  return nombre + " " + apellido;
};

/* c) (0.5 puntos) Si invocas unirNombres() sin pasar ningún argumento,
¿qué valor retornará la función? (Asume que no hay valores por defecto).
Escribe tu respuesta dentro de un comentario de bloque. */

console.log(unirNombres());

/* RESPUESTA
Devuelve dos undefined uno haciendo referencia al nombre y el otro 
al apellido ya que genera estos dos parametros, y al no encontrar nada
los marca como undefined.
*/
