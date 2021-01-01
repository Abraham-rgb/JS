// 0 3 5 8 10 13 15 18 20 => como saber cuantas 
// veces tiene que ejecutarse para llegar a 100

let contador = 0;
let serie = 0;

while (serie < 100) {
    let esImpar = contador % 2;
    if(esImpar) {
        serie += 2;
    } else {
        serie += 3;
    };
    contador++;
};

let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}

alert(n);
