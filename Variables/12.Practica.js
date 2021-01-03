// let listado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let promeImpar = 0;
// let sumaPar = 0;
// let sumaImpar = 0;
// let promePar = 0;
// let contador = 0;

// for (i = 0; i < 10 ; i++){

//     if( listado [i] % 2 == 0){
//         sumaPar += listado[i]
//     }else{
//         sumaImpar += listado[i];
//         contador++;
//     };
// };

// promeImpar = sumaImpar / contador;

// promePar = sumaPar / contador;

// let resolucion = `la suma de los pares es ${sumaPar}
// y la suma de los impares es ${sumaImpar}`

//  alert(resolucion);


let denominador = 1;
let pi = 3.1415;
let contador = 0;
let serie = 0;
let bandera = true;
let resultado = 1;


while(resultado > 0.0005){
    if ( bandera )  {
        serie += ( 4 / denominador);
        resultado = (serie - pi);
        bandera = false;
    } else {
        serie -= (4 / denominador);
        resultado = (serie - pi);
        bandera = true;
    };
    denominador += 2;
    contador++;
};
let resolucion = `El valor de requisitos es: ${contador}`;

alert(resolucion)


