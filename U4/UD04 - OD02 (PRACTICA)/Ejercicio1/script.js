/*
Ejercicio 1 – Observación Directa UD3 - (OD01)
La suma de un rango
La introducción de este libro aludía a lo siguiente como una buena
forma de calcular la suma de un rango de números:
console.log(suma(rango(1, 10)));
Escribe una función rango que tome dos argumentos, inicio y final, y
retorne un array que contenga todos los números desde inicio hasta
(e incluyendo) final.
Luego, escribe una función suma que tome un array de números y
retorne la suma de estos números. Ejecuta el programa de ejemplo
y ve si realmente retorna 55.
Como una misión extra, modifica tu función rango para tomar un
tercer argumento opcional que indique el valor de “paso” utilizado
para cuando construyas el array. Si no se da ningún paso, los
elementos suben en incrementos de uno, correspondiedo al
comportamiento anterior. La llamada a la función rango(1, 10,
2) deberia retornar [1, 3, 5, 7, 9]. Asegúrate de que también funcione
con valores de pasos negativos para que rango(5, 2, -1) produzca [5,
4, 3, 2].
// Tu código aquí.
console.log(rango(1, 10));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] →
console.log(rango(5, 2, -1));
// [5, 4, 3, 2] →
console.log(suma(rango(1, 10)));
// 55 →
*/


// Función que genera un rango de números
// Le pasaremos los parametros de 
// inicio del rango, fin del rango y 
// pasos que dara en el rango (por defectos = 1)
function rango(inicio, fin, paso = 1) {

  const numeros = [];

  // Si el paso es positivo
  if (paso > 0) {

    for (let i = inicio; i <= fin; i += paso) {
      numeros.push(i);
    }

  } 
  // Si el paso es negativo
  else {

    for (let i = inicio; i >= fin; i += paso) {
      numeros.push(i);
    }

  }

  // Nos devuelve un array de numeros
  return numeros;
}

// Funcion que hará la suma del array que recibe por parametro
function suma(numeros){

    let resultado=0;

    //En cada vuelta del FOR sumamos el numero del ARRAY
    for (let i = 0; i < numeros.length; i++) {
        resultado+=numeros[i];
    }

    // Nos devuelve el resultado
    return resultado;
}

// Pruebas
console.log(rango(1, 10));       // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(rango(5, 2, -1));    // → [5, 4, 3, 2]
console.log(suma(rango(1, 10))); // → 55