let miProducto = 10;
let calificacion = '';
let calificacionSw = '';

if (miProducto == 1) {
    calificacion = 'Aceptable';
} else {
  if (miProducto == 2) {
    calificacion = 'Regular';
  } else {
      if (miProducto == 3){
        calificacion = 'Rechazada';
      } else {
        calificacion = 'Indefinido';
      };
  };
};

switch (miProducto) {
  case 1 : {
    calificacionSw = 'Aceptable';
    break;
  };
  case 2 : {
    calificacionSw = 'Regular';
    break;
  };
  case 3 : {
    calificacionSw = 'Rechazada';
    break;
  };
  default : {
    calificacionSw = 'Indefinido';
  };
};


alert(calificacionSw);
