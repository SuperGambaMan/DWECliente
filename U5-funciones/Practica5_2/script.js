/* Práctica 5.2: Función que dibuja una tabla
• Crea una función en JavaScript que nos permita dibujar una tabla en una página web

• Como parámetros indicaremos el número de filas y de columnas con dos números. Por
defecto la función tomará 10 filas y 4 columnas

• La tabla se crea con un borde negro de 1 píxel entre cada celda, pero un tercer parámetro
permite indicar el color (por defecto será negro). El borde exterior medirá 3 píxeles y siempre
será del mismo color que el borde de las celdas.

• La tabla ocupará toda la anchura de la página

• Usa la función para crear una tabla con borde negro de 10 filas y 4 columnas
• Úsala de nuevo para generar una tabla de 20 filas y 10 columnas, con borde negro

• Finalmente, consigue dibujar 10 tablas de 5 filas y 4 columnas que tengan borde verde. */


//Rellenamos los datos en los parametros incluso los 
// que iran en la función por defectos
function crearTabla( row=10, columns=4, color="black" ) {
    //creamos la tabla
    let tabla= `<table style="border-collapse:collapse;`+
    `border:3px solid ${color}; width:100%;">`;

    //hacemos las filas en cada vuelta
    for (let i = 0; i < row; i++) {
        tabla += `<tr>`;

        //hacemos las celdas 1 a 1 generando asi las columnas
        for (let j = 0; j < columns; j++) {
            tabla += `<td style="border: 1px solid `+
            `${color};">Hola</td>`;
        }
        //Cerramos la fila
        tabla+=`</tr>`;
    }
    //Cerramos la tabla
    tabla += `</table>`;
    return tabla;
}

//Buscamos la etiqueta con id "tabla"
const tabla = document.getElementById("tabla");

//Llamamos a la funcion y lo escribimos en la pagina

//________________________

//Hacemos una tabla con los valores por defectos
tabla.innerHTML += crearTabla();

// Hacemos una tabla con 20 filas, 10 columnas y negra (por defecto)
tabla.innerHTML += crearTabla(20, 10 );

//Hacemos 10 tablas de 5 filas y 4 columnas con borde verde
  for (let i = 1; i <= 10; i++) {
    tabla.innerHTML += crearTabla(5, 4, "green" );
  }