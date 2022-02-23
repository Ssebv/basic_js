
var array = ["aa", "bb", 3, [1, 2], {nombre: 'Nombre', apellido: 'Apellido'}];
var objeto = {
    nombre: 'Martin', 
    apellido: 'Cristobal',
    edad: 26,
    coches: ['Ferrari', 'Lamborghini'],
    direccion: {
        calle: 'texto de la calle',
        numero: 4
    }
}

var item0 = array[0];
var item1 = array[1];

var indice = 4;
var item4 = array[indice].nombre;

var nombreObjeto = objeto.direccion.numero;
console.log(nombreObjeto);
var textoCalle = objeto.coches[0];

console.log(textoCalle)

var item50 = array[4]

console.log(item50)

//var piso = objeto.piso.numeroPiso;

//console.log(piso);


var longitud = array.length;
console.log(longitud);
var isValidPosition = 50 >= 0 && 50 < array.length;

console.log(isValidPosition);