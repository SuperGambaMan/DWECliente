/* Ejercicio 5: Clasificación de edades
Objetivo: Practicar condicionales if...else if...else y bucles for. */

//1. Pide al usuario que ingrese la edad de 5 personas usando un bucle for.
let menor = 0;
let adulto = 0;
let adultoMayor = 0;
let edad;

for (let i = 0; i < 5; i++) {
    do {
        edad = Number(prompt("Introduce una edad", ""));
    } while (edad < 0 || isNaN(edad));

        //2. Clasifica cada edad como: menor de edad, adulto o adulto mayor.
        //3. Muestra en la consola la edad y su categoría.
        //4. Cuenta cuántas personas son menores de edad, adultos y adultos mayores.
    if (edad<18) {
        menor++;
        console.log("Es menor de edad tiene " + edad + " años.");
    } else if (edad < 45) {
        adulto++;
        console.log("Es adulto tiene " + edad + " años.");
    } else {
        adultoMayor++;
        console.log("Es adulto mayor tiene " + edad + " años.");
    }
}
 //5. Al final, muestra un resumen con los totales de cada categoría.
let resumen = "Hay " + menor + " menores.\n"
            + "Hay " + adulto + " adultos.\n"
            + "Hay " + adultoMayor + " adultos mayores.";
console.log(resumen);

            