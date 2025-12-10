let matriz = [];
const filas = 3;
const columnas = 3;

//Damos valor a todas las casillas de la Matriz


//Recorremos la matriz rellenando la diagonal con 1 y el resto con 0
for (let i = 0; i < filas; i++) {
    //Iniciamos la fila para que pueda añadir la columna del ARRAY
    matriz[i]=[];
    //Aqui rellenamos la matriz
    for (let j = 0; j < columnas; j++) {
        if (i === j){ 
                matriz[i][j] = 1;
        } else {
                matriz[i][j] = 0;
        }
    }
}

//Sacamos por consola la matriz
console.log(matriz);
