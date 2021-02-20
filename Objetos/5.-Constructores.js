let constructor = (nombreInicial, edadInicial) => {
    let objeto = {
        nombre: nombreInicial,
        edad: edadInicial,
        'Talla camisa': 'M',
        equipo: {
            SO: 'Windows',
            equipo:'Legion',
        },
        mostrarDatos: function () {
            console.log(`Nombre:${this.nombre} \r\nEdad:${this.edad}`);
        },
        cambiarNombre: function (nuevoNombre) {
            let anterior = this.nombre;
            this.nombre = nuevoNombre
            return anterior;
        }
    }
    return objeto;
}

let empleado1 = constructor('Clay', 28)
let empleado2 = constructor('Matias', 15)
let empleado3 = constructor('Maria', 30)

// empleado1.mostrarDatos()
// empleado2.mostrarDatos()
empleado3.mostrarDatos();
empleado3.cambiarNombre('Sarah')

empleado3.mostrarDatos()