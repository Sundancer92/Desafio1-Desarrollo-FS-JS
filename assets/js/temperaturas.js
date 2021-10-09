let temperaturas = function () {
    // Declaracion de variable.
    let inputCelcius = 0;
    // Bucle dowhile para recibir si o si un numero y trsnformarlo en Float con 2 decimales.
    do {
        inputCelcius = parseFloat(prompt("Ingresa tu tenperatura en °C"));
    } while (isNaN(inputCelcius));
    
    // Variable y operacion Celcius a Kelvin.
    let gKelvin = parseFloat(inputCelcius) + 273.15;
    console.log(gKelvin);
    
    // Variable y operacion Celcius a Farenheit.
    let gFahrenheit = ((inputCelcius * 9/5) + 32).toFixed(1);
    console.log(gFahrenheit);
    
    // Console.log con la temperatura respectiva.
    console.log(`${inputCelcius}°C es equivalente a ${gKelvin}°K y a ${gFahrenheit}°F.`)
}   