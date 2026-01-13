var panel = document.getElementById("panel");

function coordenadas(e) {
  var evento = e || window.event;

    console.log('Coordenada X: ' + evento.clientX);
    console.log('Coordenada Y: ' + evento.clientY);

}

function mostrarBoton(e){
    var evento = e || window.event;

    if(evento.button === 0){
        console.log('Has pulsado click izquierdo');
    } else if (evento.button === 2){
        console.log('Has usado el click derecho')
    }else{
        console.log('Has usado otra tecla del Ratón')
    }
}

panel.addEventListener("mousemove", function(){
    panel.style.backgroundColor = "red";
});
panel.addEventListener("mouseleave", function(){
    panel.style.backgroundColor = "#f8f9fa";
});
panel.addEventListener('click',coordenadas);
panel.addEventListener('mousedown', mostrarBoton)
panel.addEventListener('contextmenu',function(e){
    var evento = e || window.event;
    evento.preventDefault(false);
})