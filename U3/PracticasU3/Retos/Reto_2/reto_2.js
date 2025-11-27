/*
RETO 2
Programa un juego en el que el ordenador genera un número aleatorio entre 1 y 100, y el usuario

intenta adivinarlo.
Apartados:
1. (2 pts) Generar el número aleatorio y guardarlo en una variable.
2. (2 pts) Usar un bucle (while o do...while) para permitir al usuario introducir sus intentos
mediante prompt, hasta que adivine.
3. (3 pts) Después de cada intento incorrecto, indicar al usuario si su número es “más alto” o
“más bajo” que el generado.
4. (3 pts) Cuando acierte, mostrar un mensaje con alert que diga el número de intentos que
ha realizado.
*/

// Generamos el número aleatorio
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let adivinado = false;

// Introducimos los intentos del usuario mediante prompt, hasta que adivine.
while (!adivinado) {
    const intentoUsuario = parseInt(prompt("Adivina el número entre 1 y 100:"));
    intentos++;

    // Al introducir incorrecto decimos si es “más alto” o “más bajo” que el generado.
    if (intentoUsuario < numeroAleatorio) {
        alert("Más alto");
    } else if (intentoUsuario > numeroAleatorio) {
        alert("Más bajo");
    } else {
        adivinado = true;
        // Cuando acierte, mostrar un mensaje con alert que diga el número de intentos que ha realizado.
        alert(`¡Felicidades! Has adivinado el número ${numeroAleatorio} en ${intentos} intentos.`);
    }
}
    