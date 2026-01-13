var formulario = document.getElementById("formulario");
var email = document.getElementById("exampleInputEmail1");
var pass = document.getElementById("exampleInputPassword1");

function mostrarInfo(e) {
  var evento = e || window.event;
    
    i

    if(email.value === ""){
        alert('El email esta vacío');
    } else if (pass.value === ""){
        alert('La contraseña esta vacía');
    } else{
        console.log('Email: ' + email.value);
        console.log('Password: ' + pass.value);
    }
}

formulario.addEventListener('submit', mostrarInfo);
