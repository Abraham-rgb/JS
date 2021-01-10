let variableGlobal = 5;
function miFuncion (){
    let variablelocal = 10;
    console.log(`Variable local: ${variablelocal}, Variable global ${variableGlobal}`);
}
// miFuncion();

let tiempo = 60;
let elemento = 5;
function miVariable (valor, contador){
    console.log(valor)
    console.log(contador)
};

// miVariable(tiempo, elemento);


function areaTriangulo (base, altura){
    let area = (base * altura) / 2
    return area;
};

// let resultado = areaTriangulo (10, 10)
// console.log(resultado);

let a = 50;
let b = 5;
function comparador (valor1, valor2){
    let total = valor1 + valor2;
    if(total > 100){
        return total;
    }else{
        return 0;
    };
};

let resultado = comparador (a, b);
console.log(resultado);

