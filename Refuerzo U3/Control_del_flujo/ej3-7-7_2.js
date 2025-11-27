// 3.7.7 Abandono del bucle - break y continue
// Ejercicio 2 - Muestra los números impares del 1 al 10

for (let i = 1; i <= 10; i++) {
  // Si el número es par, salta al siguiente iteración
  // y no lo muestra
  if ( i % 2 == 0 ) continue;

    console.log( i ) ;

}