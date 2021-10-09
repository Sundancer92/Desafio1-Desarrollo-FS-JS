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
  
  //Se muestra por consola
  console.log(`La suma de ${numero1} y ${numero2} es ${suma}.`);
  console.log(`La resta de ${numero1} y ${numero2} es ${resta}.`);
  console.log(`La divicion de ${numero1} y ${numero2} es ${divicion}.`);
  console.log(`La multiplicacion de ${numero1} y ${numero2} es ${multiplicacion}.`);
  console.log(`La modulo de ${numero1} y ${numero2} es ${modulo}.`);
}