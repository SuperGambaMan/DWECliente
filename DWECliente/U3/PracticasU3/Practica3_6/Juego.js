let numero, n;
let salir = false;
let volver;
do {
  // Se ejecuta el juego minimo 1 vez con el do while
  // Mientras salir sea false y el usuario quiera jugar otra vez
  // Seguira el juego

  cont = 0;

  // cálculo del número del 1 al 1000
  numero = parseInt(Math.random() * 1000) + 1;

  console.log(numero); // línea para pruebas saber el número generado

  do {
    // bucle del juego, se repite hasta que el usuario
    // indique cancelar o acierte

    do {
      // Bucle para pedir número váliddo
      // se repite hasta que el usuario introduzca
      // un número correcto o cancele el cuadro

      volver = false;
      n = prompt("¿Qué número del 1 al 1000 crees que he pensado?");

      // Al cancelar el cuadro la variable "salir" será true
      if (n == null) salir = true;
      //Comprobamos si el número es válido
      else if (isNaN(n) || n < 1 || n > 1000) {
        alert("Número no válido");
        volver = true;
      }
    } while (salir == false && volver == true);

    // Cada vez que introducimos un número se incrementa el contador
    // para sacar los intentos al acertar el número
    cont++;

    if (salir == false) {
      // Al introducir un número válido y no cancelar
      // comprobamos si es mayor, menor o igual
      if (numero > n) {
        alert("Mi numero es mayor");
      } else if (numero < n) {
        alert("Mi numero es menor");
      }
    }
  } while (salir == false && n != numero);
  // Solo podemos salir si hemos acertado o hemos cancelado el cuadro

  if (salir == false) {
    // Mensaje de acierto
    alert(" ¡Acertaste! Intentos: " + cont);
  }

  // pedimos confirmación al usuario para jugar otra vez
  // si no ha indicado que quiere salir
} while (salir == false && confirm("¿Quieres jugar de nuevo?"));

//Mensajes dependiendo de lo que eligió el usuario

// salir es true cuando el usuario ha cancelado el cuadro sin haber ganado
if (salir) {
  document.write("<h1>Se canceló la partida</h1>");
  // salir sigue siendo false cuando el usuario ha jugado y no quiere jugar más
} else {
  document.write("<h1>Gracias por jugar</h1>");
}
