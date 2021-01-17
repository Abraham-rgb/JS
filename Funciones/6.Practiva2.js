let temperatura = [10, 30, 40, 50, 12, 8, 13, 14, 20, 18, 17, 19, 21, 23, 22, 25, 16, 5, 2, -10, 11, 37, 15, 31, 0];

let datos = ((array)=>{
    let tempmax = 0;
    let tempmin = 100;
    let prometem = 0;
    let horas = [];
    
    for (i = 0; i < 24; i++) {

        if (array[i] > tempmax) {
        
        tempmax = array[i];
        
        horas[1] = i;
        
        }
        
        if (array[i] < tempmin) {
        
        tempmin = array[i];
        
        horas[2] = i;
        
        }
        
        prometem += array[i];
        
        }
        
        let promedio = prometem / 24;
        
        let resultado = [
        
        tempmax, horas[1],
        
        tempmin, horas[2],
        
        promedio
        
        ]
        
        return resultado;
        
        })(temperatura);

        console.log(`la temperatura maxima fue ${datos[0]}°C, alas ${datos[1]}:00hr.`)
        console.log(`la temperaturatura minima fue ${datos[2]}°C, alas ${datos[3]}:00hr.`)
        console.log(`El promedio de la temperatura es ${datos[4]}`);

