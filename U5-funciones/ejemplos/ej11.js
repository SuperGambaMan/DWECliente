"use strict"; // se usa para hacer un uso estricto de unas normas

// Funciones practicamos

let miOpMat = function (
  operador,
  operando1,
  operando2,
  callbackOperador,
  callbackResult,
  callbackError
) {
  try {
    let resultado = callbackOperador(operador, operando1, operando2);

    callbackResult(resultado);
  } catch (error) {
    callbackError(error);
  }
};

//Funciones callbacks

function cbOperador(op, op1, op2) {
  switch (op) {
    case "+":
      return op1 + op2;
    case "-":
      return op1 - op2;
    case "*":
      return op1 * op2;
    case "/":
      return op1 / op2;
    default:
      return 0;
  }
}

function cbResultado(result) {
  console.log(`El resultado es: ${result}`);
}

function cbError(err) {
  console.log(`Error: ${err}`);
}

miOpMat("+", 4, 2, cbOperador, cbResultado, cbError);
miOpMat("-", 4, 2, cbOperador, cbResultado, cbError);
miOpMat("*", 4, 2, cbOperador, cbResultado, cbError);
miOpMat("/", 4, 2, cbOperador, cbResultado, cbError);

//Se puede definir una funcion dentro directamente
miOpMat(
  "+",
  4,
  2,
  cbOperador,
  function (resul) {
    //esta es una funcion callback resul pero anónima
    console.log("*********");
    console.log(resul);
    console.log("*********");
  },
  cbError
);

miOpMat("%", 4, 2, cbOperador, cbResultado, cbError); //Operador no definido es 0

miOpMat("/", 4, 0, cbOperador, cbResultado, cbError); // resultado es Infinity

miOpMat("/", 4, 0, 2, cbOperador, cbResultado, cbError); //Error poor añadirle un parametro de mas

// Funcion tradicional
function mostrarDatos(resul) {
  //esta es una funcion callback resul pero anónima
  console.log("*********");
  console.log(resul);
  console.log("*********");
  return;
}

// Funcion arrow
let mostrarDatosFuncionArrow = (resul) => {
  //esta es una funcion callback resul pero anónima
  console.log("*********");
  console.log(resul);
  console.log("*********");
  return;
};

// Funcion declarada con function expression
function mostrarDatos2(resul) {
  //esta es una funcion callback resul pero anónima
  console.log("*********");
  console.log(resul);
  console.log("*********");
  return;
}

// funcion dentro directamente usando arrow function
miOpMat(
  "+",
  4,
  2,
  (op, op1, op2) => {
    switch (op) {
      case "+":
        return op1 + op2;
      case "-":
        return op1 - op2;
      case "*":
        return op1 * op2;
      case "/":
        return op1 / op2;
      default:
        return 0;
    }
  },
  (resul) => {
    //esta es una funcion callback resul pero anónima
    console.log("*********");
    console.log(resul);
    console.log("*********");
  },
  (err) => console.log(`Error: ${err}`)
);
