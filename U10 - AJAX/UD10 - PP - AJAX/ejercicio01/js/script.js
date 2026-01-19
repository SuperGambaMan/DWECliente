//Objeto Literal XHR con sus metodos de serverRequest, GET y POST
var XHR = {

    serverRequest: function (typeOfRequest, url, params, callbackFn) {
        var xhr;
        if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP"); // IE8 
        }

        if (typeOfRequest === "GET" && params) {
            url += "?" + new URLSearchParams(params).toString();
        }
        xhr.open(typeOfRequest, url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                callbackFn(JSON.parse(xhr.responseText));
            }
        };
        if (typeOfRequest === "POST") {
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.send(JSON.stringify(params));
        } else {
            xhr.send();
        }

    },
    get: function (url, params, callbackFn) {
        this.serverRequest("GET", url, params, callbackFn);
    },
    post: function (url, data, callbackFn) {
        this.serverRequest("POST", url, data, callbackFn);
    }
}

// Función que cargara un chiste del api
function cargarChiste() {
    XHR.get("https://v2.jokeapi.dev/joke/Any", null, function (data) {
        const div = document.getElementById("jokeDiv");

        if (data.type === "single") {
            div.textContent = data.joke;
        } else {
            div.textContent = data.setup + " — " + data.delivery;
        }
    });
}

// Ejecutamos cargarChiste al iniciar la pagina por primera vez
window.onload = function () {
    cargarChiste();

    // Botón que pedira otro chiste
    document.getElementById("btnJoke").onclick = cargarChiste;
};

