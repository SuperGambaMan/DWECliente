const mascota = {
  nombre: "Rocky",
  energia: 5,
  comer: function () {
    this.energia += 2;
    console.log(this.nombre + " ha comido. Energía: ", this.energia);
  },
  jugar: function () {
    if (this.energia > 0) {
      this.energia -= 1;
      console.log(this.nombre + " está jugando. Energía: ", this.energia);
    } else {
      console.log(this.nombre + " está cansado.");
    }
  }
};

mascota.comer();
mascota.jugar();
