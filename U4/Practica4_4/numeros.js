const N_REPETICIONES = 10000;
//preparación del mapa inicial con las frecuencias a cero
let mapa = new Map();
//un for de 10 vueltas para coger del 1 al 10
for (let i = 1; i <= 10; i++) {

    mapa.set(i, 0);

}

//10.000 veces calculamos números aleatorios del 1 al 10
for (let i = 1; i <= N_REPETICIONES; i++) {
    // Contamos cuantas veces se repite cada número
    let n = parseInt((Math.random() * 10) + 1);
    let frecActual = mapa.get(n);
    mapa.set(n, frecActual + 1);

}

//mostramos los resultados atraves de document.write
document.write("<hl>Frecuencias</hl>");
document.write(" <ul > ");
for (let i = 1; i <= 10; i++) {
    document.write(

        `<li><strong>Número ${i}:</strong> ` +
        `${mapa.get(i)}</li>`

    );

}
document.write("</ul>");