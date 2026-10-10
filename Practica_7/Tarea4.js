// ============================================
// EJERCICIO 3: Conversión de temperaturas
// ============================================
// ENUNCIADO:
// Cree dos funciones: una que convierta de Celsius a Fahrenheit
// y otra de Fahrenheit a Celsius. Solicite al usuario el tipo de
// conversión y la temperatura, y muestre el resultado con 2 decimales.
// ============================================

import readline from "node:readline";

// Función que convierte de Celsius a Fahrenheit
function celsiusAFahrenheit(celsius) {
    // Fórmula: F = (C * 9/5) + 32
    const fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
}

// Función que convierte de Fahrenheit a Celsius
function fahrenheitACelsius(fahrenheit) {
    // Fórmula: C = (F - 32) * 5/9
    const celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

// Creamos la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Mostramos las opciones al usuario
console.log("=== CONVERSOR DE TEMPERATURAS ===");
console.log("1. Convertir de Celsius a Fahrenheit");
console.log("2. Convertir de Fahrenheit a Celsius");

// Solicitamos la opción
rl.question('Elige una opción (1 o 2): ', (opcion) => {
    // Solicitamos la temperatura
    rl.question('Ingresa la temperatura: ', (temp) => {
        // Convertimos el texto a número decimal
        const temperatura = parseFloat(temp);
        let resultado;

        // Según la opción, llamamos a la función correspondiente
        if (opcion === "1") {
            resultado = celsiusAFahrenheit(temperatura);
            console.log(`\n${temperatura.toFixed(2)} °C = ${resultado.toFixed(2)} °F`);
        } else if (opcion === "2") {
            resultado = fahrenheitACelsius(temperatura);
            console.log(`\n${temperatura.toFixed(2)} °F = ${resultado.toFixed(2)} °C`);
        } else {
            console.log("Opción no válida. Debes elegir 1 o 2.");
        }

        // Cerramos la entrada de datos
        rl.close();
    });
});