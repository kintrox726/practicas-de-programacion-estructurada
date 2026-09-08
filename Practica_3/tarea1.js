// Tarea 1: Validar número positivo, negativo o cero
// Se solicita un número al usuario y se verifica si es positivo, negativo o cero.
// Dependiendo del valor, se imprime el resultado correspondiente

import readline from "node:readline";

// Se crea la interfaz para leer la entrada del usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Se solicita el número y se valida su signo.
rl.question("Ingrese un numero: ", (numero) => {
    // Se convierte a número decimal para poder compararlo.
    numero = parseFloat(numero);

    // Si el número es mayor que 0, es positivo.
    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        // Si es menor que 0, es negativo.
        console.log("El número es negativo.");
    } else {
        // Si es igual a 0, se indica que es cero.
        console.log("El número es cero.");
    }
    rl.close();
});
