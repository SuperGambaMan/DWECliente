//Añadir métodos a la clase

class Persona {
    constructor(nombre,edad){
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Animal {
    constructor(nombre){
        this.nombre = nombre;
    }
    saludar(){
        console.log("Hola, soy un animal y me llamo" + this.nombre);
    }
}

const perro = new Animal("Luna");
perro.saludar();
