let empleado = {
    nombre: 'Juan',
    edad: 30,
    'talla camisa': 'M',
    equipo: {
        SO:'Windows',
        marca: 'Legion',
    },
    mostrarDatos: function(){
        console.log(`Nombre: ${this.nombre}\r\nEda:${this.edad}`);
    },
    cambiarNombre: function(nuevoNombre){
        let anterior = this.nombre
        this.nombre = nuevoNombre
        return anterior;
    },
};

let empleado1 = Object.create(empleado);
let empleado2 = Object.create(empleado);
empleado1.cambiarNombre('Roberto');
empleado1.edad = 25
empleado2.cambiarNombre('Jose');
empleado2.edad = 40
empleado.mostrarEdad = function () {
    console.log(this.edad)
}
empleado2.mostrarEdad();

