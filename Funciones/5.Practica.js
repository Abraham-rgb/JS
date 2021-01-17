// let calificaciones = [9.9, 7, 5.5]

// function notas(calificaciones) {
//     let sumaNotas = 0; //suma para obtener el promedio
//     let i = 0; //iterador
//     let excelente = 0;
//     let sobresaliente = 0;
//     let aceptable = 0;
//     let insuficiente = 0;
//     let deficiente = 0;

//     while (calificaciones[i] != undefined) {

//         if (calificaciones[i] = 0) {
//             deficiente++;
//         } else if (calificaciones[i] = 4) {
//             insuficiente++;
//         } else if (calificaciones[i] = 6) {
//             aceptable++;
//         } else if (calificaciones[i] = 8) {
//             sobresaliente++;
//         } else if (calificaciones[i] = 9) {
//             excelente++;
//         }

//         sumaNotas += calificaciones[i];
//         i++;

//     }

//     let promedioNotas = sumaNotas / i;
//     let resultado = [promedioNotas, deficiente, insuficiente, aceptable, sobresaliente, excelente];
//     return resultado;
// }

// let rta = notas(calificaciones);
// console.log(`La candidad de estudiantes en deficiente son: ${rta[1]}`);
// console.log(`La candidad de estudiantes en insuficiente son: ${rta[2]}`);
// console.log(`La candidad de estudiantes en aceptable son: ${rta[3]}`);
// console.log(`La candidad de estudiantes en sobresaliente son: ${rta[4]}`);
// console.log(`La candidad de estudiantes en excelente son: ${rta[5]}`);
// console.log(`El promedio de notas del curso es: ${rta[0]}`);

/*Mismo ejercisio diferente proceso*/

let calificaciones = [10, 7.5, 5]

function notas(calificaciones) {
    let sumaNotas = 0;
    let i = 0;
    let excelente = 0;
    let sobresaliente = 0;
    let aceptable = 0;
    let insuficiente = 0;
    let deficiente = 0;
    switch(calificaciones[i] !=undefined){
        case 1: {
            calificaciones[i] = 0
            deficiente++;
            break;
        }
        case 2: {
            calificaciones[i] = 4
            insuficiente++
            break;
        }
        case 3: {
            calificaciones[i] = 6
            aceptable++
            break;
        }
        case 4 :{
            calificaciones[i] = 8
            sobresaliente++
            break;
        }
        case 5 :{
            calificaciones[i] = 9
            excelente++
            break;
        };
    }
    sumaNotas += calificaciones[i]
    i++;
    let promedioNotas = sumaNotas / i
    let resultado = [promedioNotas,deficiente, insuficiente, aceptable, sobresaliente, excelente]
    return resultado;
};

let rspt = notas(calificaciones);
console.log(`La candidad de estudiantes en deficiente son: ${rspt[1]}`);
console.log(`La candidad de estudiantes en insuficiente son: ${rspt[2]}`);
console.log(`La candidad de estudiantes en aceptable son: ${rspt[3]}`);
console.log(`La candidad de estudiantes en sobresaliente son: ${rspt[4]}`);
console.log(`La candidad de estudiantes en excelente son: ${rspt[5]}`);
console.log(`El promedio de notas del curso es: ${rspt[0]}`);


    
