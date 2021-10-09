
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
}
    