
let promedio = function(){
// Declaración de variables
let inputNumero1 = 0;
let inputNumero2 = 0;
let inputNumero3 = 0;
let inputNumero4 = 0;
let inputNumero5 = 0;

// Bucle (infinito, enseñenme arreglos :c ) para obligarlo a ingresar 5 numeros.
do {
    inputNumero1 = parseInt(prompt("Ingresa un numero"));
} while (isNaN(inputNumero1));
console.log(`El primer numero ingresado fue: ${inputNumero1}`)

do {
    inputNumero2 = parseInt(prompt("Ingresa un numero"));
} while (isNaN(inputNumero2));
console.log(`El segundo numero ingresado fue: ${inputNumero2}`)

do {
    inputNumero3 = parseInt(prompt("Ingresa un numero"));
} while (isNaN(inputNumero3));
console.log(`El tercer numero ingresado fue: ${inputNumero3}`)

do {
    inputNumero4 = parseInt(prompt("Ingresa un numero"));
} while (isNaN(inputNumero4));
console.log(`El cuarto numero ingresado fue: ${inputNumero4}`)

do {
    inputNumero5 = parseInt(prompt("Ingresa un numero"));
} while (isNaN(inputNumero5));
console.log(`El quinto numero ingresado fue: ${inputNumero5}`)

// Creacion de suma y promedio
let sumaPromedio = inputNumero1 + inputNumero2 + inputNumero3 + inputNumero4 + inputNumero5;
let promedio = sumaPromedio / 5;

// Display por consola
console.log(`La suma de los numeros es: ${sumaPromedio}`)
console.log(`El promerdio de los numeros es: ${promedio}`)
};
