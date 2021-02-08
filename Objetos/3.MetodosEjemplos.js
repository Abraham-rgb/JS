let triangulo = {
    base:0,
    altura:0,
    inicializar: function (b, a) {
        triangulo.base = b;
        triangulo.altura = a;
    },
    mostrarDatos: function () {
        console.log(`La altura es: ${triangulo.altura}\r\nLa base es : ${triangulo.base}`)
    }, 
    area: function () {
        //area = base * altura / 2
        let area = (triangulo.base * triangulo.altura ) / 2 
        return area
    }, 
    hipotenusa: function () {
      // cateto al cuadrado = raiz (cateto opuesto mas cateto addiacente) 
      let hipotenusa = Math.sqrt(triangulo.base ** 2 + triangulo.altura ** 2);  
      return hipotenusa
    },
    perimetro: function () {
        let perimetro = triangulo.base + triangulo.altura + triangulo.hipotenusa()
        return perimetro
    }
}

triangulo.inicializar(50, 70)
triangulo.mostrarDatos();
let areaTriangulo = triangulo.area()
console.log(`Area: ${areaTriangulo}`)
console.log(`Hipotenusa: ${triangulo.hipotenusa()}`)
console.log(`Perimetro: ${triangulo.perimetro()}`)