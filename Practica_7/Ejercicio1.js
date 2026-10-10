const readlineSync = require('readline-sync');

let suma = 0;
let contador = 0;

console.log('=== SUMA HASTA SUPERAR 100 ===');

while (suma <= 100) {
    let entrada = readlineSync.question('Ingrese un numero: ');
    let numero = parseFloat(entrada);

    // Formas correctas de validar si es un número válido
    if (isNaN(numero)) {
        console.log("El dato debe ser numérico. Intente de nuevo.");
    } else {
        suma = suma + numero;
        contador++;
        console.log('Suma actual: ' + suma);
    }
}

// El resultado final debe ir FUERA del bucle while
console.log('\n=== RESULTADO FINAL ===');
console.log('Suma total: ' + suma);
console.log('Cantidad de números ingresados: ' + contador);
