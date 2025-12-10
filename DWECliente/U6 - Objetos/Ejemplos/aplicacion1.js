const contacto = {
    nombre: "Lucía",
    telefono: "666555444",
    email: "lucia@email.com",
    mostrar: function () {
        console.log("Nombre: ",this.nombre);
        console.log("Teléfono: ",this.telefono)
        console.log("Email: ", this.email)
    }
}

contacto.mostrar();

