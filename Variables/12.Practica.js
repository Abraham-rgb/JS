let listado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let promeImpar = 0;
let sumaPar = 0;
let sumaImpar = 0;
let promePar = 0;
let contador = 0;

for (i = 0; i < 10 ; i++){

    if(listado[i] % 2 == 0){
        sumaPar += listado[i]
    }else{
        sumaImpar += listado[i];
        contador++;
    };
};
promeImpar = sumaImpar / contador;
promePar = sumaPar / contador;

let resolucion = `la suma de los pares es ${sumaPar}
y la suma de los impares es ${sumaImpar}`

 alert(resolucion);
