"use strict";

let context; //

//Parametros campo
let canvas; // Define el campo del DOM
let ancho_canvas; // Define el ancho del campo
let alto_canvas; // Define el alto del campo

//Parametros pelota
let ancho_pelota; // Define el ancho de la pelota
let alto_pelota; // Define el alto de la pelota
//Coordenadas y movimiento
let x; // Define la coordenada X
let y; //Define la coordenada Y
let incX; // Define el moviento en X
let incY; //Define el movimiento en Y
let inc_pelota; // Avance de la pelota en cada iteracion

//Parametros Palas
let separacion; // Separacion desde el extremo del campo
let alto_pala; // Define el alto de la pala
let ancho_pala; // Define el ancho de la pala
let inc_pala; // Posicion que avanza cuando se mueve
//Posiciones de la paletas de jugadores (i)zq y (d)er
let jiX;
let jiY;
let jdX;
let jdY;

let keys;
// Caracteres que representan movimientos y controles
let CAR_I_ARRIBA_U; // Mover paleta izquierda arriba mayusculas
let CAR_I_ARRIBA_L; // PI arriba minusculas
let CAR_I_ABAJO_U; // Mover paleta izquierda abajo mayusculas
let CAR_I_ABAJO_L; // PI abajo minusculas
let CAR_D_ARRIBA_U; // Mover paleta derecha arriba mayusculas
let CAR_D_ARRIBA_L; // PD arriba minusculas
let CAR_D_ABAJO_U; // Mover paleta derecha abajo mayusculas
let CAR_D_ABAJO_L; // PD abajo minusculas
//Pausar y Empezar partida
let CAR_PAUSA_U; // Caracter para pausa en mayusculas
let CAR_PAUSA_L; // Caracter para pausa en minusculas
let CAR_JUGAR_U; // Arrancar juego en mayusculas
let CAR_JUGAR_L; // Arrancar juego en minusculas
let CAR_HAY_SONIDO_U; // Caracter para poner/quitar sonido en mayusculas
let CAR_HAY_SONIDO_L; // Poner/quitar sonido en minusculas
// KeyCode (Movimiento paletas)
let KEY_I_ARRIBA_U; // mayusculas
let KEY_I_ARRIBA_L; // minusculas
let KEY_I_ABAJO_U; // Mayusculas
let KEY_I_ABAJO_L; // minusculas
let KEY_D_ARRIBA_U; // Mayusculas
let KEY_D_ARRIBA_L; // Minusculas
let KEY_D_ABAJO_U; // Mayusculas
let KEY_D_ABAJO_L; // Minusculas
//KeyCode(Pausar e iniciar partida)
let KEY_PAUSA_U; // Mayusculas
let KEY_PAUSA_L; // Minusculas
let KEY_JUGAR_U; // Mayusculas
let KEY_JUGAR_L; // Minusculas
let KEY_HAY_SONIDO_U; // Mayusculas
let KEY_HAY_SONIDO_L; // Minusculas
// Inicializacion deteccion de pulsaciones para KeyCode
let PI_ARRIBA;
let PI_ABAJO;
let PD_ARRIBA;
let PD_ABAJO;
let PAUSA;
//Inicializamos los contadores de goles
let puntosI; //Marcador Jugador Izquierdo
let puntosD; //Marcador Jugador Derecho
// Inicio de la pelota
let inicioY; //en que altura inicia la pelota
let valorX; //Para que lado va al empezar (Izquierda o Derecha)
let valorY; //Para que direccion (Arriba o Abajo)
// Sonidos
let beep; //Sonido para cuando rebota la pelota
let punto; //Sonido para cuando marcamos punto
let hay_sonido; //Para saber si hay sonido

//Funciones extras
let hay_inc_vel; // false(Por defecto) - true para aumentar velocidad en cada rebote
let JUGAR; // Iniciar jugar

function principal() {
  inicializa_parametros();
  keys = new KeyListener();
  JUGAR = true;
  bucle();
}

function bucle() {
  dibuja_campo();
  if (JUGAR) {
    calcula_coordenadas_pelota();
    dibuja_pelota(x, y);
  }
  controlar_pulsacion();
  dibuja_jugadorI(jiX, jiY);
  dibuja_jugadorD(jdX, jdY);
  dibuja_puntuacion();
  setTimeout(bucle, 4);
}

function inicializa_parametros() {
  // Sonidos
  beep = new Audio("beep.wav");
  punto = new Audio("punto.wav");
  hay_sonido = true;

  //Canvas campo
  canvas = document.getElementById("campo");
  ancho_canvas = canvas.width;
  alto_canvas = canvas.height;
  context = canvas.getContext("2d");

  //Parametros pelota
  x = ancho_canvas / 2;
  y = alto_canvas / 2;
  ancho_pelota = 14;
  alto_pelota = 14;

  //Movimiento pelota
  inc_pelota = 1; // Avance de la pelota en cada iteracion
  incX = inc_pelota;
  incY = inc_pelota;

  hay_inc_vel = false; // true para aumentar velocidad en cada rebote

  //Parametros Palas
  separacion = 12; // Separacion desde el extremo del campo
  alto_pala = alto_canvas / 5; // Define el alto de la pala
  ancho_pala = 10; // Define el ancho de la pala
  inc_pala = 4; // Posicion que avanza cuando se mueve = (Velocidad de la pala)

  //Posiciones de la paletas de jugadores (i)zq y (d)er

  //Izquierda
  jiX = separacion;
  jiY = alto_canvas / 2 - alto_pala / 2;

  //Derecha
  jdX = ancho_canvas - separacion - ancho_pala;
  jdY = jiY;

  // Caracteres que representan movimientos y controles
  CAR_I_ARRIBA_U = "A"; // Mover paleta izquierda arriba mayusculas
  CAR_I_ARRIBA_L = CAR_I_ARRIBA_U.toLowerCase(); // PI arriba minusculas
  CAR_I_ABAJO_U = "Z"; // Mover paleta izquierda abajo mayusculas
  CAR_I_ABAJO_L = CAR_I_ABAJO_U.toLowerCase(); // PI abajo minusculas
  CAR_D_ARRIBA_U = "K"; // Mover paleta derecha arriba mayusculas
  CAR_D_ARRIBA_L = CAR_D_ARRIBA_U.toLowerCase(); // PD arriba minusculas
  CAR_D_ABAJO_U = "M"; // Mover paleta derecha abajo mayusculas
  CAR_D_ABAJO_L = CAR_D_ABAJO_U.toLowerCase(); // PD abajo minusculas

  //Pausar e inciar partida
  CAR_PAUSA_U = "P"; // Caracter para pausa en mayusculas
  CAR_PAUSA_L = CAR_PAUSA_U.toLowerCase(); // Caracter para pausa en minusculas
  CAR_JUGAR_U = "S"; // Arrancar juego en mayusculas
  CAR_JUGAR_L = CAR_JUGAR_U.toLowerCase(); // Arrancar juego en minusculas

  CAR_HAY_SONIDO_U = "O"; // Caracter para poner/quitar sonido en mayusculas
  CAR_HAY_SONIDO_L = CAR_HAY_SONIDO_U.toLowerCase(); // Poner/quitar sonido en minusculas

  // KeyCode (Movimiento paletas)
  KEY_I_ARRIBA_U = CAR_I_ARRIBA_U.charCodeAt(0); // mayusculas
  KEY_I_ARRIBA_L = CAR_I_ARRIBA_L.charCodeAt(0); // minusculas
  KEY_I_ABAJO_U = CAR_I_ABAJO_U.charCodeAt(0); // Mayusculas
  KEY_I_ABAJO_L = CAR_I_ABAJO_L.charCodeAt(0); // minusculas
  KEY_D_ARRIBA_U = CAR_D_ARRIBA_U.charCodeAt(0); // Mayusculas
  KEY_D_ARRIBA_L = CAR_D_ARRIBA_L.charCodeAt(0); // Minusculas
  KEY_D_ABAJO_U = CAR_D_ABAJO_U.charCodeAt(0); // Mayusculas
  KEY_D_ABAJO_L = CAR_D_ABAJO_L.charCodeAt(0); // Minusculas

  //KeyCode(Pausar e iniciar partida)
  KEY_PAUSA_U = CAR_PAUSA_U.charCodeAt(0); // Mayusculas
  KEY_PAUSA_L = CAR_PAUSA_L.charCodeAt(0); // Minusculas
  KEY_JUGAR_U = CAR_JUGAR_U.charCodeAt(0); // Mayusculas
  KEY_JUGAR_L = CAR_JUGAR_L.charCodeAt(0); // Minusculas

  KEY_HAY_SONIDO_U = CAR_HAY_SONIDO_U.charCodeAt(0); // Mayusculas
  KEY_HAY_SONIDO_L = CAR_HAY_SONIDO_L.charCodeAt(0); // Minusculas

  // Inicializacion deteccion de pulsaciones para KeyCode
  PI_ARRIBA = false;
  PI_ABAJO = false;
  PD_ARRIBA = false;
  PD_ABAJO = false;
  PAUSA = false;
  //llamamos a la funcion inicio_partido
  inicio_partida();
}

//Muestra el campo en la pagina
function dibuja_campo() {
  context.fillStyle = "red";
  context.clearRect(0, 0, ancho_canvas, alto_canvas);
  context.fillRect(ancho_canvas / 2, 0, 2, alto_canvas);
}

//Muestra la pelota en una posicion
function dibuja_pelota(x, y) {
  context.fillStyle = "blue";
  context.fillRect(x, y, ancho_pelota, alto_pelota);
}

//Muestra pala del jugador izquierdo
function dibuja_jugadorI(jiX, jiY) {
  context.fillStyle = "white";
  context.fillRect(jiX, jiY, ancho_pala, alto_pala);
}

//Muestra pala del jugador derecho
function dibuja_jugadorD(jdX, jdY) {
  context.fillStyle = "white";
  context.fillRect(jdX, jdY, ancho_pala, alto_pala);
}

//KEY LISTENER
function KeyListener() {
  this.pressedKeys = [];
  this.keydown = function (e) {
    this.pressedKeys[e.keyCode] = true;
  };
  this.keyup = function (e) {
    this.pressedKeys[e.keyCode] = false;
  };
  document.addEventListener("keydown", this.keydown.bind(this));
  document.addEventListener("keyup", this.keyup.bind(this));
}

KeyListener.prototype.isPressed = function (key) {
  return this.pressedKeys[key] ? true : false;
};

function controlar_pulsacion() {
  // Izquierda abajo
  if (keys.isPressed(KEY_I_ABAJO_U) || keys.isPressed(KEY_I_ABAJO_L)) {
    PI_ABAJO = true;
  }
  // Izquierda arriba
  else if (keys.isPressed(KEY_I_ARRIBA_U) || keys.isPressed(KEY_I_ARRIBA_L)) {
    PI_ARRIBA = true;
  }

  // Derecha abajo
  if (keys.isPressed(KEY_D_ABAJO_U) || keys.isPressed(KEY_D_ABAJO_L)) {
    PD_ABAJO = true;
  }
  // Derecha arriba
  else if (keys.isPressed(KEY_D_ARRIBA_U) || keys.isPressed(KEY_D_ARRIBA_L)) {
    PD_ARRIBA = true;
  }

  calcula_coordenadas_pala();

  // Pausa
  if (keys.isPressed(KEY_PAUSA_U) || keys.isPressed(KEY_PAUSA_L)) {
    PAUSA = true;
    keys.pressedKeys[KEY_PAUSA_U] = false;
    keys.pressedKeys[KEY_PAUSA_L] = false;
  }

  // Reanudar
  if (keys.isPressed(KEY_JUGAR_U) || keys.isPressed(KEY_JUGAR_L)) {
    JUGAR = true;
    keys.pressedKeys[KEY_JUGAR_U] = false;
    keys.pressedKeys[KEY_JUGAR_L] = false;
  }

  // Sonido
  if (keys.isPressed(KEY_HAY_SONIDO_U) || keys.isPressed(KEY_HAY_SONIDO_L)) {
    hay_sonido = !hay_sonido;
    keys.pressedKeys[KEY_HAY_SONIDO_U] = false;
    keys.pressedKeys[KEY_HAY_SONIDO_L] = false;
  }

  if (PAUSA) {
    PAUSA = false;
    if (!confirm("Seguir?")) {
      JUGAR = false;
      inicializa_parametros();
    }
  }
}

//Calculamos y colocamos las palas donde irán
function calcula_coordenadas_pala() {
  if (PI_ARRIBA == true) {
    jiY -= inc_pala;
    if (jiY < 0) jiY = 1;
    PI_ARRIBA = false;
  }
  if (PI_ABAJO == true) {
    jiY += inc_pala;
    if (jiY + alto_pala > alto_canvas) jiY = alto_canvas - alto_pala;
    PI_ABAJO = false;
  }
  if (PD_ARRIBA == true) {
    jdY -= inc_pala;
    if (jdY < 0) jdY = 1;
    PD_ARRIBA = false;
  }
  if (PD_ABAJO == true) {
    jdY += inc_pala;
    if (jdY + alto_pala > alto_canvas) jdY = alto_canvas - alto_pala;
    PD_ABAJO = false;
  }
}

// Inicializa valores para el inicio de cada punto
function inicio_punto() {
  inicioY = Math.floor((Math.random() * alto_canvas) / 2 + 1);
  x = ancho_canvas / 2; // Iniciamos desde el centro del campo
  y = inicioY; // La posicion vertical de la pelota es aleatoria

  // La direccion de la pelota en es aleatoria
  valorX = Math.floor(Math.random() * 100 + 1);

  if (valorX < 50) {
    incX = inc_pelota;
  } else {
    incX = -inc_pelota;
  }

  valorY = Math.floor(Math.random() * 100 + 1);

  if (valorY < 50) {
    incY = inc_pelota;
  } else {
    incY = -inc_pelota;
  }

  // Posiciones de las paletas de jugadores (i)zq y (d)er.
  jiX = separacion;
  jiY = alto_canvas / 2 - alto_pala / 2;
  jdX = ancho_canvas - separacion - ancho_pala;
  jdY = jiY;
}

//Calculamos donde se encuentra la pelota en cada momento
function calcula_coordenadas_pelota() {
  x += incX;
  y += incY;

  // Comprobacion de la pelota respecto de la pala izquierda
  if (y >= jiY && y <= jiY + alto_pala - 1) {
    if (x <= jiX + ancho_pala) {
      incX = -incX; // Cambio de direccion horizontal
      //Si activamos hay_inc_vel ejecutamos estas lineas
      if (hay_inc_vel && Math.abs(incX) < 3) {
        if (incX < 1) {
          incX -= 1;
        } else {
          incX += 1;
        }
        if (incY < 1) {
          incY -= 1;
        } else {
          incY += 1;
        }
      }
      x = jiX + ancho_pala;
      if (hay_sonido) beep.play();
    }
  } else {
    // Si ha rebasado la posicion de la pala es un punto para el
    // jugador contrario.

    if (x < jiX - separacion) {
      inicio_punto();
      //Cada vez que marcamos le sumamos 1 al marcador de JugadorDerecha
      puntosD += 1;
      if (hay_sonido) punto.play();
    }
  }
  // Comprobacion de la pelota respecto de la pala derecha
  if (y >= jdY && y <= jdY + alto_pala - 1) {
    if (x + ancho_pelota >= jdX) {
      incX = -incX; // Cambio de direccion horizontal
      //Si activamos hay_inc_vel ejecutamos estas lineas
      if (hay_inc_vel && Math.abs(incX) < 3) {
        if (incX < 1) {
          incX -= 1;
        } else {
          incX += 1;
        }
        if (incY < 1) {
          incY -= 1;
        } else {
          incY += 1;
        }
      }
      x = jdX - ancho_pelota;
      if (hay_sonido) beep.play();
    }
  } else {
    // Si ha rebasado la posicion de la pala es un punto para el
    // jugador contrario.
    if (x + ancho_pelota > jdX + separacion) {
      inicio_punto();
      //Cada vez que marcamos le sumamos 1 al marcador de JugadorIzquierda
      puntosI += 1;
      if (hay_sonido) punto.play();
    }
  }

  // Si la pelota rebota en la parte superior o inferior de la pantalla
  // cambia de direccion vertical.
  if (y + alto_pelota > alto_canvas || y < 0) {
    incY = -incY;
    if (hay_sonido) beep.play();
  }
}

// Inicializa valores para el inicio de una partida
function inicio_partida() {
  puntosI = 0;
  puntosD = 0;

  inicio_punto();
}

// Muestra puntuacion cada vez que se produce un cambio
function dibuja_puntuacion() {
  context.fillStyle = "white";
  context.font = "48px Georgia";
  context.fillText(puntosI, ancho_canvas / 4, 30);
  context.fillText(puntosD, (ancho_canvas * 3) / 4, 30);
}

principal();
