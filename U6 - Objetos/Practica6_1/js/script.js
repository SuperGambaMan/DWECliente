/* 6.5 PRÁCTICAS RESUELTAS */

/* Práctica 6.1: Objetos de tipo Punto
• Queremos crear objetos que representen puntos, de ellos necesitamos: */

/* - Que tengan dos propiedades: x e y. Servirán para representar las coordenadas del punto. */

function Punto ( x, y ){
    this.x = x;
    this.y = y;
}

/* - La construcción de los puntos usará una función constructora a la que se le pasan dos
números. Si lo que recibe en cada coordenada no es un número, se coloca a cero. */

function Punto ( x, y ){
    if (x != NaN || y != NaN){
        if(x != NaN){
            x=0
        } else {
            y=0
        }
    }
    this.x = x;
    this.y = y;
}

/* - Un método llamado cambiar al que le pasamos dos números y nos permite modificar las
coordenadas del número. */

function cambiar ( x, y, Acambiar ){
    this.x = x;
    this.y = y;
}

/* - Un método llamado copia que retorna una copia del objeto. */

function Copia ( ACopiar ){
    this.x = x;
    this.y = y;
    return CopiaDeObjeto;
}

/* - Un objeto llamado iguales que recibe un segundo punto y nos dice si ambos puntos son
iguales. */

function Iguales (Acomparar){

    if ( this.x == Acomparar.x && this.y == Acomparar.y ){
        console.log("Ambos son iguales.")
    }

}

/* - Un método llamado suma que recibe un segundo punto y devuelve un tercer punto resul-
tado de sumar las coordenadas de los dos anteriores. */

function Suma (ASumar) {
    const NuevoPunto = new Punto;
    NuevoPunto.x = this.x + ASumar.x;
    return NuevoPunto;
}

/* - Un método llamado obtenerDistancia que también recibe un segundo punto y nos
devuelve la distancia entre ambos puntos, para esta operación, tener en cuenta: */

                            //FIGURA

/* Para calcular la distancia aplicamos el Teorema de Pitágoras,
la distancia sale de la fórmula: */

/* ^[distHoriz^ ~+liistVerl~ = -

^/aZzs(6 —(-5))
2
+ aZ>s(—3 - 2)
2
= Vi l
2
+ 5
2
= -y/l46 = 12,08 */

/* Figura 6.2: Ejemplo de uso de clases y objetos con herencia en la POO */
    
function obtenerDistancia () {
    
}

/* - Finalmente un método llamado toString que retorna un texto con las coordenadas del
punto. Por ejemplo (-5,2) */


function Cambiar ( x, y ){
    this.x = x;
    this.y = y;
}