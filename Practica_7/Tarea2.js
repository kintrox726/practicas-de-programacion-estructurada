// ============================================
// EJERCICIO 2: Validar números (Par/Impar y Primo)
// ============================================
// ENUNCIADO:
// Cree una función que determine si un número es par o impar,
// y otra función que determine si un número es primo.
// Solicite un número al usuario y muestre ambos resultados.
// ============================================

import readline from "node:readline";

// Función que determina si un número es par o impar
function esParOImpar(numero) {
    // El operador % devuelve el residuo de la división.
    // Si el residuo de dividir entre 2 es 0, es par.
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Impar";
    }
}

// Función que determina si un número es primo
function esPrimo(numero) {
    // Los números menores o iguales a 1 no son primos
    if (numero <= 1) {
        return false;
    }
    // Probamos dividir desde 2 hasta la raíz del número
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        // Si encontramos un divisor, no es primo
        if (numero % i === 0) {
            return false;
        }
    }
    // Si no encontramos divisores, es primo
    return true;
}

// Creamos la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitamos el número al usuario
rl.question('Ingresa un número entero: ', (entrada) => {
    // Convertimos la respuesta de texto a número entero
    const numero = parseInt(entrada);

    // Llamamos a las funciones
    const resultadoParImpar = esParOImpar(numero);
    const resultadoPrimo = esPrimo(numero);

    // Mostramos los resultados
    console.log(`\nEl número ${numero} es: ${resultadoParImpar}`);
    if (resultadoPrimo) {
        console.log(`El número ${numero} SÍ es primo`);
    } else {
        console.log(`El número ${numero} NO es primo`);
    }

    // Cerramos la entrada de datos
    rl.close();
});