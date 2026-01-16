document.getElementById("btnCargar").addEventListener("click", function () {
  let xhr = new XMLHttpRequest();

  xhr.open("GET", "productos.json", true);

  xhr.onload = function () {
    //console.log("Readystate: " + xhr.readyState);

    if (xhr.status === 200) {

      let productos = JSON.parse(xhr.responseText);
      //console.log(xhr.responseText)
      let lista = document.getElementById("listaProductos");

      lista.innerHTML = "";
      productos.forEach((prod) => {
        let li = document.createElement("li");
        li.textContent = `${prod.nombre} - ${prod.precio}€`;
        lista.appendChild(li);
      });
    } else {
      alert("Error al cargar productos");
    }
  };
  xhr.send();
});
