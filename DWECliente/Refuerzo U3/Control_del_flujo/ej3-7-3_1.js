// 3.7.3 Condicionales - if, else, switch
// Explicación:

let edad = 18;

if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// Ejercicio 1 - Pide un numero y muestra si es positivo, negativo o cero
let numeroComprobar = prompt("Dame un numero para ver si es positivo", "Escribe un numero");

if (numeroComprobar > 0){
    alert("Es positivo");
} else if (numeroComprobar == 0){
    alert("Es 0");
} else{
    alert("Es negativo")
}

// Ejercicio 2 - Pide tu edad y muestra si puedes votar o no
let edadUsuario = prompt("¿Cual es tu edad?", "Escribe tu edad");

if (edadUsuario >= 18) {
  alert("Puedes votar");
} else {
  alert("No puedes votar");
}
