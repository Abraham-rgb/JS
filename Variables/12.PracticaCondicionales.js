// let distancia = 501;
// let tiempo = 11;
// let costo = 0.19;

// recorrido = distancia * 2; aqui se multiplica por dos por la variable distancia debe ser mayor a 500
// costo = 0.19 * recorrido;

// if (distancia > 500 && tiempo > 10){
//     costo = costo - (costo * 0.2);
    
// };

// let resolucion = `El precio es de: ${costo}`;
// alert(costo);

let tratamiento = 4;
let edad = 10 ;
let tiempo = 5;
let costo = [0, 2800, 1950, 2500, 1150];

switch( tratamiento ){
    case 1: {
        costo = costo[1] * tiempo;
        break;
    };
    case 2: {
        costo = costo [2] * tiempo
        break;
    };
    case 3: {
        costo = costo [3] * tiempo
        break;
    };
    case 4:{
        costo = costo [4] * tiempo
        break;
    };
    default:{
        costo = 'El tratamiento introducido es el incorrecto';
    };
};

alert(costo);
// AQUI ESTA ECHO CON EL IF PERO EL EL SWITCH ESTA SIMPLIFICACO

// if(edad > 60){
//     costo = costo - ( costo* 0.25 );
// }else if (edad < 25){
//     costo = costo - (costo * 0.15);
// };
// alert(`El costo total del tratamiendo es de: ${costo}`)



switch(descuento){
    case 1:{
        edad > 60
        costo = costo - (costo * 0.25);
        break;
    }
    case 2:{
        edad < 25
        costo = costo - (costo * 0.15)
        break;
    }
    default:{
        costo = 'no hay descuento'
    };
};
alert(`El costo total del tratamiendo es de: ${costo}`);



