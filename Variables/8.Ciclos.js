let suma = 0;

for (i = 0; i <= 5; i++) {
  suma += '10';
};

let array =[ 1, 2, 3, 4, 5 ] 
let arraySuma = 0
for ( i = 0; i < 5; i ++) {
  arraySuma = arraySuma + array[i];
  // 1. 0 =  0 + 1 = 1 
  // 2. 1 =  1 + 2 = 3
  // 3. 3 =  3 + 3 = 6 
  // 4. 6 =  6 + 4 = 10
  // 5. 10 = 10 + 5 = 15 
};

alert(arraySuma);

let arrayMulti = [[1, 2, 3,], [4, 5, 6, ], [7, 8, 9]];
let sumaMulti = 0;

for( i = 0; i < 3; i++ ) { 
  for(j = 0; j < 3; j++) {
    sumaMulti += arrayMulti[i][j];
  };
};




