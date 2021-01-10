// Funcion normal
function sumatoria (a,b){
    let total= a + b;
    return total;
};
// console.log(sumatoria(5, 5));

// Funcion anonima
let sumatoriaAnonima = function (a, b){
    let total = a + b;
    return total;
};
// console.log(sumatoriaAnonima(5 , 5 ));

let ejecutarFuncion = function (f, valor1, valor2) {
    let resultado = f (valor1, valor2);
    return resultado;
};

// console.log(ejecutarFuncion(sumatoriaAnonima, 5,5));

let sumatoriaAnonimaAuto = (function (a, b) {
    let total = a + b;
    return total;
})(5, 5);
// console.log(sumatoriaAnonimaAuto);

let sumatoriaAnonimaFlecha = (a, b) => {
    let total = a + b
    return total;
};
console.log(sumatoriaAnonimaFlecha(5, 5));