let lista = [2, 4, 6, 8, 10];
let total = 0;

for(i = 0; i < 5; i++){
    let numero = lista [i];
    if(numero == 6){
        break;
    }
    total += numero
};

alert(total);