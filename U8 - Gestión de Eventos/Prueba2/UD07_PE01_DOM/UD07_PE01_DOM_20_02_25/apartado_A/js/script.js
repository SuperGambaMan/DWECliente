let pokemosSeleccionado = [];

function seleccionarFav() {
    let tds = document.getElementsByTagName
    let tdFav;
    for (const td of tds) {
        tds[4] = tdFav;
    }

    let corazonesVacios = tdFav.getElementsByClassName("bi-heart");
    
    for (const corazonVacio of corazonesVacios) {

 
    };

    let corazonesLlenos = tdFav.getElementsByClassName("bi-heart-fill");
    let contadorPokemons=0;
    for (const corazonLleno of corazonesLlenos) {
        contadorPokemons++;
        console.log(contadorPokemons);
    };
}

 let corazones = document.getElementsByClassName("bi");

 for (const corazon of corazones) {
    corazon.addEventListener('click', function (){
    })
 }

 