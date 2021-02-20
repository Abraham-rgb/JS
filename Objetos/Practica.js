// let poligono = {
//     lados: 0,
//     apotema: 0,
//     formula: function(lados, apotema){
//         poligono.lados = lados;
//         poligono.apotema = apotema;
//     },
//     perimetro: function(){
//         let angulo = ( 360 / ( 2 * poligono.lados ))
//         let medidaX = poligono.apotema * (Math.tan(angulo * Math.PI / 180))
//         let medidaL = medidaX * 2 

//         let perimetro = medidaL * poligono.lados;
//         return perimetro;
//     },
//     area: function(){
//         let area = (poligono.perimetro() * poligono.apotema) /2
//         return area
//     },
// };

// poligono.formula(2, 10);
// console.log(`El perimetro del poligono es: ${poligono.perimetro()} centimetros`);
// console.log(`El area del poligono es: ${poligono.area()}elevado al cuadrado`);
 

let esfera = {
    radio: 0,

    inicializar = function(radio){
        esfera.radio = radio;
    },
    volumen: function(){
        let v = ((4/3)* Math.PI) * (Math.pow(esfera.radio,3));
        return v
    },
    perimetroCirculo: function(){
        let perimetro = (2 * Math.PI) * esfera.radio;
        return perimetro;
    },
    areaCirculo: function(){
        let area = (esfera.perimetroCirculo() * esfera.radio) / 2
        return area
    },
};

esfera.formula(9);
let vEsfera = esfera.volumen();
console.log(`El volumen de la esfera es: ${vEsfera} elevado al cuadrado`);
let perimetro = esfera.perimetroCirculo();
let area = esfera.areaCirculo();
console.log(`El area del circulo es: ${area}\r\nelevado al cuadrado `)
