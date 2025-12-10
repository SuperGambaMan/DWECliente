/* PREGUNTA 1 (Objetos literales) (2.5 P)
Crea y manipula un objeto literal llamado producto que represente un artículo
de una tienda online.
a) Crea el objeto literal producto con estas propiedades (0,5P)
• nombre
• precio
• stock
Incluye valores de ejemplo.
b) Añade un método llamado mostrarInfo que muestre por consola el nombre
y el precio del producto. (0.5 P)
c) Modifica la propiedad stock del producto, restando 1 unidad cuando se
llame a un método vender(). Crea dicho método vender. (0.75 P)
El stock debe reducirse en 1.
d) Muestra todas las propiedades del objeto, mostrando por consola cada
clave y su valor. (0.75 P) */

const producto = {
  nombre: "Raton",
  precio: "20€",
  stock: 3,

  mostrarInfo(producto) {
    console.log(`Nombre: ${producto.nombre} | Precio: ${producto.precio}`);
  },
  vender(producto) {
    producto.stock--;
  },
};

producto.mostrarInfo();

producto.vender();

console.log(producto);

for (const clave in producto) {
    
     console.log(`${clave}: ${producto[clave]}`);
    
}
