/* Práctica 6.3: Objeto para fracciones y añadir métodos para
el mcd y el mcm en la clase Math
• Queremos crear objetos que representen fracciones.

• Algunos métodos de estos objetos usan las operaciones matemáticas de cálculo de máximo
común divisor y mínimo común múltiplo. Debemos crear estas funciones, pero mejor si
son métodos estáticos del propio objeto Math (al igual que sus otros métodos vistos en esta
misma unidad).

• El máximo común divisor de dos números naturales es el mayor número por el que podemos
dividir de forma exacta a ambos números. El mínimo común múltiplo es el número múltiplo
más pequeño de ambos números a la vez. Para ambos cálculos podemos usar estos detalles
que nos van a facilitar la implementación de ambos métodos:

234 DESARROLLO WEB EN ENTORNO CLIENTE

mcm(a,b)=a*b/mcd(a,b)
mcd(a,b)=b si el resto de a entre b es cero
mcd(a,b)=mcd(b,a%b) si el resto de a entre b no es cero

• Una fracción consta de un numerador y un denominador, ambos son números enteros. La
idea es que cuando se usen estos objetos no se permita modificar directamente el numerador
y el denominador, sino que podremos hacerlo mediante métodos.

• El método getNumerador obtendrá el valor del numerador, getDenominador obtendrá el
denominador.

• Los métodos setNumerador y setDenominador permitirán cambiar tanto el numerador
como el denominador. Ambos requieren del nuevo valor.

• El método cambiarFracción permitirá cambiar a la vez numerador y denominador.

• lmplementar un método llamado toString que permita retornar la fracción en el formato
numerador/denominador (ejemplo 5/6).

• lmplementar un método llamado simplificar que permita simplificar la función. Eso se con-
sigue calculando el mcd del numerador y el denominador. Y dividiendo el numerador y el

denominador por ese mcd. Ejemplo:

60 =

60/12 _5

24 24/12 2

mcd

Figura 6.3: Simplificación de fracción

• lmplementar un método para la suma de fracciones que requiere del cálculo del mínimo
común múltiplo de los denominadores. Ejemplo:

3 6 (20/10)3 +(20/4)-6 _ 36 _ 9
10

+ 4 20 20 5

A

mcm

Figura 6.4: Suma de fracciones

El mcm de los denominadores es 20, se divide este número entre cada denominador y se
multiplica por cada numerador. Se suman los numeradores multiplicados y finalmente se
simplifica la fracción.

El resultado debe de ser una nueva fracción con la suma.

UNIDAD 6. PROGRAMACIÓN DE OBJETOS EN JAVASCRIPT 235

• Crear método para la resta de fracciones. Se hace igual que la suma pero restando los
numeradores.

• Método para la multiplicación de fracciones. Se multiplican los numeradores y los denomi-
nadores entre sí.

• Método para la división de fracciones. Se multiplica de forma cruzada el numerador y el
denominador.

• En todas las operaciones matemáticas, se debe de simplificar la fracción resultante. */


// ========= MÁXIMO COMÚN DIVISOR =========

Math.mcd = function (a, b) {
    //Tenemos que asegurarnos de que tenemos dos números
    // naturales, de otro modo devolvemos NaN
    // si hay decimales, los quitamos
    a = parseInt(Number(a));
    b = parseInt(Number(b));

    if (isNaN(a) || isNaN(b)) {
        return NaN;
    }

    if (a === 0 || b === 0) return 0;

    a = Math.abs(a);
    b = Math.abs(b);

    if (a % b !== 0) return Math.mcd(b, a % b);
    else return b;
};


// ========= MÍNIMO COMÚN MÚLTIPLO =========

Math.mcm = function (a, b) {

    a = parseInt(Number(a));
    b = parseInt(Number(b));

    if (isNaN(a) || isNaN(b)) return NaN;

    if (a === 0 || b === 0) return 0;

    a = Math.abs(a);
    b = Math.abs(b);

    return (a * b) / Math.mcd(a, b);
};


// ========= FRACCIÓN =========

function Fraccion(numerador, denominador) {

    var _numerador = parseInt(Number(numerador));
    var _denominador = parseInt(Number(denominador));

    if (isNaN(_numerador) || isNaN(_denominador)) return null;

    this.getNumerador = () => _numerador;
    this.getDenominador = () => _denominador;

    this.setNumerador = function (numerador) {
        if (!isNaN(parseInt(Number(numerador)))) {
            _numerador = parseInt(numerador);
        }
    };

    this.setDenominador = function (denominador) {
        if (!isNaN(parseInt(Number(denominador)))) {
            _denominador = parseInt(denominador);
        }
    };

    this.cambiarFraccion = function (numerador, denominador) {
        this.setNumerador(numerador);
        this.setDenominador(denominador);
    };

    this.toString = () => (_numerador + "/" + _denominador);

    this.simplificar = function () {

        if (_denominador === 0) return; // evitar errores

        if (_numerador === 0) {
            _denominador = 1;
            return;
        }

        // ajustamos los signos
        if (Math.sign(_numerador) !== Math.sign(_denominador)) {
            _numerador = -Math.abs(_numerador);
            _denominador = Math.abs(_denominador);
        } else {
            _numerador = Math.abs(_numerador);
            _denominador = Math.abs(_denominador);
        }

        let mcd = Math.mcd(_numerador, _denominador);
        _numerador /= mcd;
        _denominador /= mcd;
    };

    this.suma = function (f) {
        let mcm = Math.mcm(_denominador, f.getDenominador());
        let numeradorRes = (mcm / _denominador) * _numerador +
                           (mcm / f.getDenominador()) * f.getNumerador();

        let res = new Fraccion(numeradorRes, mcm);
        res.simplificar();
        return res;
    };

    this.resta = function (f) {
        let mcm = Math.mcm(_denominador, f.getDenominador());
        let numeradorRes = (mcm / _denominador) * _numerador -
                           (mcm / f.getDenominador()) * f.getNumerador();

        let res = new Fraccion(numeradorRes, mcm);
        res.simplificar();
        return res;
    };

    this.multiplica = function (f) {
        let res = new Fraccion(
            _numerador * f.getNumerador(),
            _denominador * f.getDenominador()
        );
        res.simplificar();
        return res;
    };

    this.divide = function (f) {
        let res = new Fraccion(
            _numerador * f.getDenominador(),
            _denominador * f.getNumerador()
        );
        res.simplificar();
        return res;
    };
}


// ========= PRUEBAS =========


console.log(Math.mcd(60, 24)); // Sale por consola 12
console.log(Math.mcm(60, 24)); // Sale por consola 120

var f1 = new Fraccion(6, 10);
var f2 = new Fraccion(6, 4);
var f3 = new Fraccion(60, 24);

f1.setNumerador(3);
console.log(f1.toString()); // Sale por consola 3/10
console.log(f2.toString()); // Sale por consola 6/4
console.log(f3.toString()); // Sale por consola 60/24

f3.simplificar();
console.log(f3.toString()); // Sale por consola 5/2

var fSuma = f1.suma(f2);
var fResta = f1.resta(f2);
var fMultiplica = f1.multiplica(f2);
var fDivide = f1.divide(f2);

console.log(fSuma.toString());      // Sale por consola 9/5
console.log(fResta.toString());     // Sale por consola -6/5
console.log(fMultiplica.toString()); // Sale por consola 9/20
console.log(fDivide.toString());     // Sale por consola 1/5