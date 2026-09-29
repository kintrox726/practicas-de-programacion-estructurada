// Tarea 1: Factorial de un número
// Solicite un número entero positivo al usuario. Usando un bucle FOR, calcule y muestre su factorial. 
// Ejemplo: 5! = 5 × 4 × 3 × 2 × 1 = 120.

import readline from "node:readline";

// Se crea la interfaz para leer datos desde la consola (entrada y salida estándar)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se solicita al usuario que ingrese un número entero positivo
rl.question("Ingrese un número entero positivo: ", (respuesta) => {
    // Se convierte la respuesta recibida (texto) a un número entero
    let n = parseInt(respuesta);  

    // Se inicializa la variable "total" en 1 (elemento neutro para la multiplicación)
    let total = 1;

    // Bucle FOR que recorre desde 1 hasta el número ingresado (n)
    for (let i = 1; i <= n; i++) {
        // En cada iteración, se multiplica el acumulador "total" por el valor actual de "i"
        total = total * i;
    }

    // Se muestra el resultado final del factorial en la consola
    console.log(`Total = ${total}`);

    // Se cierra la interfaz de lectura para finalizar el programa
    rl.close();
});