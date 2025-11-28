/* Práctica 6.2: Añadir método de cálculo de media aritmética a los arrays
• Los objetos de tipo Array (en definitiva, los arrays) 
poseen numerosos métodos que resultan muy útiles.

• Vemos interesante añadir un método a todos los arrays 
para el cálculo de la media aritmética de sus elementos.

• Modificar el prototipo de los arrays para añadir dicho método. */
Array.prototype.media=function(){

    let suma=this.reduce((anterior,actual)=>(anterior+actual));

    let tamaño=this.length;
    
    return suma/tamaño;

}


let a1=[1,2,3,4,5,6];

console.log(a1.media()); //Saldra por la consola 3.5


let a2=[10,13,16,21,28,19,45,32,20];

console.log(a2. media ()); //Saldra por la consola 22.666666666666668