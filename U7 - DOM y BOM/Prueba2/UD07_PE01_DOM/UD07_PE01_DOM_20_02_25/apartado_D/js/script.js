const botonAumentar = document.getElementById("btnAumentar");
    const botonDisminuir = document.getElementById("btnDisminuir");
    const texto = document.getElementById("texto");
    let tamañoFuente = 16;

    botonAumentar.addEventListener("click", () => {
        tamañoFuente += 2;
        texto.style.fontSize = tamañoFuente + "px";
    });

    botonDisminuir.addEventListener("click", () => {
        tamañoFuente -= 2;
        texto.style.fontSize = tamañoFuente + "px";
    });