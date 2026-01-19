// Funcion para pedir la informacion del carro mediante la API
function peticionesCarros(url, callbackFn) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const data = JSON.parse(xhr.responseText);
            callbackFn(data);
        }
    };

    xhr.send();
}

//Funcion para mostrar la informacion del elemento del TR al hacerle click
function clickListaCarros(carts) {
    const tbody = document.getElementById("carts-table-body");
    tbody.innerHTML = "";

    carts.forEach(cart => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
            <td>${cart.id}</td>
            <td>${cart.userId}</td>
            <td>${cart.date}</td>
        `;

        // Al hacer clic se mostrara los detalles del carro
        // Ejecutando la función displayCartDetails(cart)
        tr.addEventListener("click", () => {
            displayCartDetails(cart);
        });

        tbody.appendChild(tr);
    });
}

//Función que mostrara la información del carro que hayamos seleccionado
function displayCartDetails(cart) {
    // Seleccionamos el contenedor de detalles por ID
    const detailsDiv = document.getElementById("cart-details-content");

    // Cambiamos el título con la ID del carro seleccionado
    const title = detailsDiv.querySelector("h1");
    title.textContent = `Detalles del Carro (ID: ${cart.id})`;

    //-----------------------
    // Esto de aqui lo he querido añadir Aunque no estuviese en
    //  la tarea tanto para practicar como por que quedaba mas bonito   

    // Marcamos en un <p> el Usuario ID
    const pUser = detailsDiv.querySelectorAll("p")[0];
    pUser.textContent = `Usuario ID: ${cart.userId}`;

    // Marcamos en un <p> la Fecha
    const pDate = detailsDiv.querySelectorAll("p")[1];
    pDate.textContent = `Fecha: ${cart.date}`;
    // ----------------------

    // Limpiamos la tabla de Detalles del Carro
    const tbody = document.getElementById("cart-details-body");
    tbody.innerHTML = "";

    // Cargamos cada producto del carro
    cart.products.forEach(producto => {
        fetchProductDetail(producto.productId, producto.quantity);
    });
}

//Funcion que pedira la información teniendo en cuenta el ID y la cantidad del producto
function fetchProductDetail(productId, quantity) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://fakestoreapi.com/products/${productId}`, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {

            const producto = JSON.parse(xhr.responseText);

            const tbody = document.getElementById("cart-details-body");

            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${productId}</td>
                <td>${quantity}</td>
                <td>${producto.title}</td>
                <td><img src="${producto.image}" alt="${producto.title}" width="50"></td>
                <td>$${producto.price}</td>
            `;

            tbody.appendChild(tr);
        }
    };

    xhr.send();
}

//Cargamos la información al iniciar la página
window.onload = function () {
    peticionesCarros("https://fakestoreapi.com/carts", clickListaCarros);
};
