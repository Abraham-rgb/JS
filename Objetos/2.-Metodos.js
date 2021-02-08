let empleado = {
    nombre: 'Juan',
    edad: 20,
    'talla camisa': 'M',
    equipo: {
        SO:'Windows',
        marca:'Legion',
    },
    mostrarDatos: function () {
        console.log(`Nombre: ${empleado.nombre}\r\nEdad:${empleado.edad}`);
    },
    cambiarNombre: function (nuevoNombre) {
        let anterior = empleado.nombre;
        empleado.nombre = nuevoNombre;
        return anterior
    }
}

let anterior = empleado.cambiarNombre('Abraham');
empleado.mostrarDatos()
console.log(`El nombre anterior es: ${anterior}`)