const capa = document.getElementById("capa");

/* El ratón entra en la capa */
capa.addEventListener("mouseenter", () => {
  capa.style.backgroundColor = "green";
});

/* El ratón sale de la capa */
capa.addEventListener("mouseleave", () => {
  capa.style.backgroundColor = "white";
});

/* Se pulsa un botón del ratón */
capa.addEventListener("mousedown", (ev) => {
  if (ev.button === 0) {
    // Botón izquierdo
    capa.style.backgroundColor = "red";
  } else if (ev.button === 1) {
    // Botón centro (No viene en el ejercicio pero lo queria probar)
    capa.style.backgroundColor = "purple";
  } else if (ev.button === 2) {
    // Botón derecho
    capa.style.backgroundColor = "blue";
  }
});

/* al soltar cualquier botón del ratón vuelve a verde */
capa.addEventListener("mouseup", () => {
  capa.style.backgroundColor = "green";
});

/* Anular menú contextual del botón derecho */
capa.addEventListener("contextmenu", (ev) => {
  ev.preventDefault();
});
