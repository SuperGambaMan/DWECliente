document.addEventListener('DOMContentLoaded', () => {
    const charactersContainer = document.getElementById('characters-container');
    const btnMore = document.getElementById('btnMore');

    var paginaInicial = 1;
    // https://rickandmortyapi.com/api/character

    //Funcion para pedir la pagina para completar el url
    function pedirPaginaPersonajesRM(pagina, callbackFn) {
        let url = "https://rickandmortyapi.com/api/character";

        if (pagina > 1) {
            url += `/?page=${pagina}`;
        }

        fetch(url)
            .then(res => res.json())
            .then(data => callbackFn(data))
            .catch(err => {
                console.error("Error en la petición:", err);
            });

    }

    //Funcion para mostrar los personajes en la pagina
    //Haciendo una estructura de DIV
    function muestraCardPersonaje(personajeData) {
        // Reiniciamos el contenido del DIV
        charactersContainer.innerHTML = "";

        //Creamos el nuevo contenido del DIV
        personajeData.forEach(personaje => {
            const cardHTML = ` 
                <div class="card col-md-4 mb-4"> 
                    <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}"> 
                    <div class="card-body"> 
                        <h5 class="card-title">${personaje.name}</h5> 
                        <p class="card-text">Especie: ${personaje.species}</p> 
                        <p class="card-text">Estado: ${personaje.status}</p> 
                    </div> 
                </div> 
            `;
            charactersContainer.innerHTML += cardHTML;
        });
    }


    // Profesor aqui pides que lo hagamos introduciendo el pageNum como parametro
    // pero me parece mas facil haciendolo sin pasarle ningun parametro

    //Funcion para mostrar la siguiente página de personajes
    function showMoreCharacters() {
        paginaInicial++;
        pedirPaginaPersonajesRM(paginaInicial, function (data) {
            muestraCardPersonaje(data.results);
        });
    }

    //Boton para pasar a la siguiente página
    btnMore.addEventListener("click", showMoreCharacters);

    //Cargamos el script en la pagina de inicio
    pedirPaginaPersonajesRM(paginaInicial, function (data) {
        muestraCardPersonaje(data.results);
    });

});