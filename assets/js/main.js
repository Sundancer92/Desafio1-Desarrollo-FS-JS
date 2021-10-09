const textUnico = document.getElementById('textUnico');

// Años, semanas y días.
let dias = function() {    
    // Declaración de variables
    let inputNumero = 0;
    
    // Bucle para obligarlo a ingresar un numero mayor a 0.
    do {
        inputNumero = parseInt(prompt("Ingresa un numero"));
    } while (isNaN(inputNumero) || inputNumero <= 0);
    
    // La cantidad de años.
    let anos = Math.floor(inputNumero / 365);
    
    // La cantidad de semanas.
    let semanas = Math.floor((inputNumero % 365) / 7);
    
    // La cantidad de días.
    let dias = Math.floor((inputNumero % 365) % 7);
    
    console.log(`El numero ${inputNumero} corresponde a: ${anos} años, ${semanas} semanas y ${dias} días.`)
    textUnico.innerHTML = `El numero ${inputNumero} es igual a: ${anos} años, ${semanas} semanas y ${dias} días.`
    };

// Operaciones Aritméticas
let operacionAritmetica = function () {
    // Creo las variables.
    let numero1=0;
    let numero2=0;
    
    // Ciclo para obligar a ingresar 2 numeros diferentes y mayores a cero y distintos entre ellos.
    do{
      numero1 = parseInt(prompt("Ingresa el primer numero"));
      numero2 = parseInt(prompt("Ingresa el segundo numero"));
    } while ((isNaN(numero1) || isNaN(numero2)) || ((numero1 <=0 || numero2 <= 0) || (numero1 == numero2)));
    
    // Variables de operacion arimetica
    let suma = numero1+numero2;
    let resta = numero1-numero2;
    let divicion = numero1/numero2;
    let multiplicacion = numero1*numero2;
    let modulo = numero1%numero2;
    
    //Se muestra
    console.log(`La suma de ${numero1} y ${numero2} es ${suma}.`);
    console.log(`La resta de ${numero1} y ${numero2} es ${resta}.`);
    console.log(`La division de ${numero1} y ${numero2} es ${divicion}.`);
    console.log(`La multiplicacion de ${numero1} y ${numero2} es ${multiplicacion}.`);
    console.log(`La modulo de ${numero1} y ${numero2} es ${modulo}.`);
    textUnico.innerHTML = `
                            <ul class="text-start">
                                <li>La suma de ${numero1} y ${numero2} es ${suma}.</li> 
                                <li>La resta de ${numero1} y ${numero2} es ${resta}.</li>
                                <li>La division de ${numero1} y ${numero2} es ${divicion}.</li>
                                <li>La multiplicacion de ${numero1} y ${numero2} es ${multiplicacion}.</li>
                                <li>La modulo de ${numero1} y ${numero2} es ${modulo}.</li>
                            <ul>`
    };

  // Promedio.
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
    
    // Display
    console.log(`La suma de los numeros es: ${sumaPromedio}`)
    console.log(`El promerdio de los numeros es: ${promedio}`)
    textUnico.innerHTML = `
                            <ul class="text-start">
                                <li>La suma de los numeros es: ${sumaPromedio}</li> 
                                <li>El promerdio de los numeros es: ${promedio}</li>
                            <ul>`
    };

// Temperaturas.
let temperaturas = function () {
    // Declaracion de variable.
    let inputCelcius = 0;
    // Bucle dowhile para recibir si o si un numero y trsnformarlo en Float con 2 decimales.
    do {
        inputCelcius = parseFloat(prompt("Ingresa tu tenperatura en °C"));
    } while (isNaN(inputCelcius));
    
    // Variable y operacion Celcius a Kelvin.
    let gKelvin = parseFloat(inputCelcius) + 273.15;
    
    // Variable y operacion Celcius a Farenheit.
    let gFahrenheit = ((inputCelcius * 9/5) + 32).toFixed(1);

    // Se muestra
    console.log(`${inputCelcius}°C es equivalente a ${gKelvin}°K y a ${gFahrenheit}°F.`)
    textUnico.innerHTML =`${inputCelcius}°C es equivalente a ${gKelvin}°K y a ${gFahrenheit}°F.`
}   


