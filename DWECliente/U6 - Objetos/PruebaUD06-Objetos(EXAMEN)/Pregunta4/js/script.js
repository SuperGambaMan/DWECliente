/* PREGUNTA 4 (Objetos en notación JSON) – 2.5 P
Vamos a trabajar con un objeto en formato JSON que representa la
información de un pedido online.
a) Escribe un objeto JSON que incluya: (0.5 P)

• idPedido
• cliente
• total
• productos (array con al menos 2 elementos de tipo Producto)

Debe ser JSON válido.
Los Productos son objetos literales con la siguiente información:

• idProducto
• nombre
• descripción
• precio
• cantidad
• subtotal

b) Convierte este JSON a un objeto JavaScript y guárdalo en una variable
llamada pedido. Crea una función que agregue un producto al pedido llamada
“agregaProductoAPedido” que recibe un producto para agregar al pedido
(0.75 P)
c) Accede al nombre del primer producto del pedido y muéstralo por
consola. Crea una función que muestre toda la información del pedido y
sus productos llamada “getInfoPedido” que recibe un pedido a mostrar
(0.75 P)
d) Convierte el objeto nuevamente a JSON y muestra la cadena resultante.
Almacénalo en la variable datosPedidoJSON (0.5 P) */

let pedidoJSON = {
  idPedido: 1,
  cliente: "Manolo",
  total: 35,
  productos: [
    {
      idProducto: 1,
      nombre: "Raton Pro",
      descripcion: "Esto es un Raton Profesional",
      precio: 20,
      cantidad: 1,
      subtotal: 20,
    },
    {
      idProducto: 2,
      nombre: "Raton Simple",
      descripcion: "Esto es un Raton muy simple",
      precio: 5,
      cantidad: 3,
      subtotal: 15,
    },
  ],
};

const pedido = JSON.parse(JSON.stringify(pedidoJSON));

pedido.agregaProductoAPedido = function (prod) {
  this.productos.push(prod);
};

pedido.getInfoPedido = function (id) {
  let res = "";

  if (this.idPedido == id) {
    res = `${pedido.idPedido}, ${pedido.cliente}, ${pedido.total},`;

    this.productos.forEach((p) => {
      res += `${p.idProducto},${p.nombre},${p.descripcion},${p.precio},${p.cantidad},${p.subtotal}, `;
    });
  }

  return res;
};

console.log(pedidoJSON);
console.log(pedido);

const datosPedidoJson = JSON.stringify(pedido);

console.log(datosPedidoJson);
