

let nombre, contraseña;
let seguir = true;
let nombreOK;
let contraseñaOK;

// Centinelas de validación de contraseña
let hayMinúsculas = false;
let hayMayúsculas = false;
let hayNúmeros = false;
let hayOtros = false;

//variables con todas las posibilidades para hacer luego las comprobaciones
const minusculas = "aábcdeéfghiíjklmnñoópqrstuúüvwxyz";
const numeros = "0123456789";

// pedimos que escriba un nombre de usaurio y comprobamos que sea en minuscula
do {
  nombre = prompt("Escriba su nombre de usuario deseado");
  if (nombre == null) seguir = false;

  if (seguir) {
    nombreOK = true;
    let i = 0;

    while (nombreOK && i < nombre.length) {
      let caracter = nombre.charAt(i);
      if (minusculas.indexOf(caracter) == -1) {
        nombreOK = false;
        alert("El usuario es incorrecto\nSolo se admiten minúsculas");
      }
      i++;
    }
  }
} while (seguir && !nombreOK);

// Si el usuario no canceló, pedimos contraseña
if (seguir) {
  //Le pedimos la contraseña y comprobamos que tiene todo lo que queremos
  //que hay minimo 1 minuscula, 1 mayuscula, 1 numero y 1 simbolo
  do {
    hayMinúsculas = false;
    hayMayúsculas = false;
    hayNúmeros = false;
    hayOtros = false;

    contraseña = prompt("Escriba su contraseña deseada");
    if (contraseña == null) seguir = false;

    if (seguir) {
      contraseñaOK = true;
      let i = 0;

      //miramos que tiene todo y lo colocamos true si está
      while (contraseñaOK && i < contraseña.length) {
        let caracter = contraseña.charAt(i);

        if (minusculas.indexOf(caracter) != -1) {
          hayMinúsculas = true;
        } else if (minusculas.toUpperCase().indexOf(caracter) != -1) {
          hayMayúsculas = true;
        } else if (numeros.indexOf(caracter) != -1) {
          hayNúmeros = true;
        } else {
          hayOtros = true;
        }
        i++;
      }

      contraseñaOK = (hayMinúsculas && hayMayúsculas && hayNúmeros && hayOtros);

      if (!contraseñaOK) {
        alert("La contraseña es incorrecta\nDebe contener minúsculas, mayúsculas, números y otros símbolos");
      }
    }
  } while (seguir && !contraseñaOK);
}

// Mensaje final que devolvemos
if (seguir) {
  document.write("<p>Datos almacenados correctamente</p>");
} else {
  document.write("<p>El usuario canceló la operación</p>");
}