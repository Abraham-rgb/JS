function miObjeto (nombreInicial, edadInicial){
    this.nombre = nombreInicial,
    this.edad = edadInicial,
    this['talla Camisa'] = 'M';
    this.equipo = {
        SO:'Windows',
        marca:'Legion',
    };
    this.mostrarDatos = function() {
        console.log(`Nombre: ${this.nombre}\r\nEdad:${this.edad}`);    
    };
    this.cambiarNombre = function(nuevoNombre){
        let anterior  = this.nombre;
        this.nombre = nuevoNombre;
        return anterior;
    };
};

let empleado1 = new miObjeto('Martin', 26);
empleado1.mostrarDatos();