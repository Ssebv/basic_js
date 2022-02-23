var booleanoCierto = true;
var booleanoFalso = false;

var a = '2';
var b = 2;

//console.log(mayorQue) //True

// > <  >= <= == === != !==

console.log(a == b)
console.log(a === b)
console.log(a =! b)
console.log(a >= b) 

var rangoInicio = 0;
var rangoFinal = 100;

var numeroAComparar = 101;

var mayorQueInicio = numeroAComparar > rangoInicio ;
var menorQueFinal  = numeroAComparar < rangoFinal ;

var dentroDeRango = mayorQueInicio && menorQueFinal ;

console.log(dentroDeRango)

// /* AND (&&) Tabla de verdad  // Solo es verdadero si todos son verdaderos
// 1 && 1 : 1
// 1 && 0 : 0
// 0 && 1 : 0
// 0 && 0 : 0
// */

// /* OR (||) Tabla de verdad // Solo es falso si todos son falso
// 1 || 1 : 1
// 1 || 0 : 1
// 0 || 1 : 1
// 0 || 0 : 0
// */

// /* NOT (!) Tabla de verdad
// 1 : 0
// 0 : 1
// */

var haHechoTrabajo = true;
var notaExamenFinal = 10;
var tieneFaltaTécnica = false;
var aprobadoElCurso = (haHechoTrabajo || (notaExamenFinal >= 5) ) && !tieneFaltaTécnica ;

console.log(aprobadoElCurso)

// // Realizar un programa que, dadas dos lineas en una dimension (dos rangos)
// // (a, b), (c, d) comprobar que las lineas se solapan o no se solapan

var a = 5;
var b = 20;
var c = 23;
var d = 25;

//------a--------c------b------d---------

var seSolapan = [ (a < b && c < d) && b > c ] ;

console.log(seSolapan)









