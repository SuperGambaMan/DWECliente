// 3.7.8 Bucles anidados
// Ejercicio 1 - Muestra la tabla del 1 al 5 con bucles anidados

for (let i = 1; i <= 5; i++) {
  console.log("Tabla del " + i);
  for (let j = 1; j <= 10; j++) {
    let res = i * j;
    console.log( `${i} x ${j} = ${res}`);
  }
  console.log("\n");
}
