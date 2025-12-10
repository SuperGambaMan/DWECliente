/* PREGUNTA 2 (Objetos literales) – (2.5 P)
Trabaja con un objeto literal llamado alumno que represente a un estudiante.
a) Crea el objeto alumno con las propiedades: (0.75 P)
• nombre
• curso
• notaMedia
b) Crea un método presentarse(nombre) que muestre un mensaje como:
(0.75 P)
“Hola, soy XXXX y estudio 2º DAW.”
c) Añade una nueva propiedad llamada edad al objeto desde fuera del
literal, y asígnale un valor. (0.75 P)
d) Borra la propiedad curso muestra el objeto actualizado, mostrando
todas sus propiedades y valores. (0.5 P) */

let alumno = {
  nombre: "Marcos",
  curso: "DAW",
  notaMedia: 3, //Despues de este examen
};

function presentarse(nombre) {
  console.log(`Hola, soy ${nombre} y estudio 2º DAW`);
}

presentarse(alumno.nombre);

console.log(alumno);

alumno.edad = 30;

console.log(alumno);

delete alumno.curso;

console.log(alumno);
