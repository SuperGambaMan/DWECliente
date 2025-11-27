//Haremos una funcion de sumar
function sumar(valor1, valor2) {
  function generaSuma(valor) {
    let suma = 0;

    if (Array.isArray(valor)) {

      for (let numero of valor) {

        if (!isNaN(numero)) {
          suma += numero;
        }

      }

    }

    if (!isNaN(valor)) {
      suma += valor;
    }

    return suma;

  }

  let result = generaSuma(valor1) + generaSuma(valor2);

  return result;
  
}

//prueba para ver que no suma las cadenas
let prueba1 = sumar("hola", [4, 6]);
console.log(prueba1);

//prueba para ver si coge el valor 1 como array
console.log(sumar([2,3,4],10));

//prueba para ver si coge el valor 2 como array
console.log(sumar(10,[2,3,4]));
