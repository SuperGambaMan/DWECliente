//Crear objetos

const alumno = {

    nombre:"Carlos",
    edad: 16,
    curso:"Matemáticas",
    aprobado:true

};

console.log(alumno.nombre);

console.log(alumno['curso']);

const perro = {

    nombre: "Rex",
    ladrar : function () {
        console.log("GUA,GUA!")
    }
};

const calculadora = {
    numero: 10
};

calculadora.sumar = function (x){
    return this.numero + x;
}

console.log(calculadora.sumar(5));

const robot = {
    encender : function(nombre){
        console.log("Hola " + "¡ROBOTO ENCENDARIUSURU!")
    }
};

const persona = {
    nombre: "Lucas",
    edad: 30,
    ciudad: "Sevilla"
};

for (const clave in persona) {

    console.log(clave+": " + persona[clave]);    
    
}