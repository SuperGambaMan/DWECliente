/* 6.5 PRÁCTICAS RESUELTAS */

/* Práctica 6.1: Objetos de tipo Punto
• Queremos crear objetos que representen puntos, de ellos necesitamos: */

/* - Que tengan dos propiedades: x e y. Servirán para representar las coordenadas del punto. */

/* function Punto ( x, y ){
    this.x = x;
    this.y = y;
} */

/* - La construcción de los puntos usará una función constructora a la que se le pasan dos
números. Si lo que recibe en cada coordenada no es un número, se coloca a cero. */

function Punto ( x, y ){
    if (isNaN(x)) x = 0;
    if (isNaN(y)) y = 0;
    this.x = x;
    this.y = y;

    /* - Un método llamado cambiar al que le pasamos dos números y nos permite modificar las
    coordenadas del número. */

    this.cambiar=(x,y)=>{
        this.x = x;
        this.y = y;
    }

    /* - Un método llamado copia que retorna una copia del objeto. */

    this.copia=()=>(new Punto(this.x, this.y));

    /* - Un método llamado suma que recibe un segundo punto y devuelve un tercer punto resul-
    tado de sumar las coordenadas de los dos anteriores. */

    this.suma=(p2)=>(new Punto(this.x+p2.x, this.y+p2.y));

    /* - Finalmente un método llamado toString que retorna un texto con las coordenadas del
    punto. Por ejemplo (-5,2) */

    this.toString=()=>(`(${this.x},${this.y})`)

    /* - Un objeto llamado iguales que recibe un segundo punto y nos dice si ambos puntos son
    iguales. */

    this.iguales = (p2) => {
        if ( this.x == p2.x && this.y == p2.y ){
        console.log("Ambos son iguales.")
        }
    };

    /* - Un método llamado obtenerDistancia que también recibe un segundo punto y nos
    devuelve la distancia entre ambos puntos, para esta operación, tener en cuenta: */

    this.obtenerDistancia = function (p2) {
        return Math.sqrt(
            Math.pow(Math.abs(this.x-p2.x),2) +
            Math.pow(Math.abs(this.y-p2.y),2)
            )
    };
}


//Prueba de los métodos y construcciones
var p=new Punto(1,2);
var q=new Punto(6,-3);

//probamos el metodo cambiar para p
p.cambiar(-5,2);

//probamos el metodo copia copiando en r la p
var r=p.copia()
r.x=9;

//probamos el metodo toString sacando la informacion de p y r
console.log("p: "+p.toString()); // Sale por consola-> p: (-5,2)
console.log("r: "+r.toString()); // Sale por consola-> r: (9,2)

//Probamos el metodo sumar almacenando en S el resultado de P + R
var s=p.suma(r);
console.log("s: "+s.toString()); // Sale por consola-> s: (4,4)

//Probamos el metodo de obtenerDistancia sacando por consola 
// la distancia entre p y q.
console.log("Distancia entre p y q: "+ p.obtenerDistancia(q)); // Sale por consola-> Distancia entre p y q: 12.083045973594572

