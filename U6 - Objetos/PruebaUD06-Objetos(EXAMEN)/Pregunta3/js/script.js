/* PREGUNTA 3 (Funciones constructoras) – 2.5P
Vamos a crear un tipo de objeto mediante una función constructora llamada
Empleado.
a) Crea la función constructora Empleado con estas propiedades: (0.75 P)
• nombre
• salario
• departamento
Asigna los valores recibidos como parámetros.
b) Crea dos objetos empleados. (0.5 puntos)
c) Añade un método al prototype llamado subirSalario(porcentaje) que
aumente el salario según el porcentaje indicado. (0.75 puntos)
d) Comprueba si uno de los empleados creados es instancia de Empleado
y muestra el resultado por consola. (0.5 puntos) */

function Empleado(nombre, salario, departamento) {
  this.nombre = nombre;
  this.salario = salario;
  this.departamento = departamento;
}

Empleado.prototype.subirSalario = function (porcentaje) {
  let aumento = (this.salario * porcentaje) / 100;
  this.salario += aumento;
};

let e1 = new Empleado("Marcos", "10000€", "Desarrollo");
let e2 = new Empleado("Manuel", "20€", "Cocina");

console.log(e1 instanceof Empleado);
