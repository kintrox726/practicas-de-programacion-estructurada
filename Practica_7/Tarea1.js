//Calculadora con funciones: Cree una función para cada operación básica: sumar, restar, multiplicar
//y dividir. Solicite dos números y un operador al usuario. Según el operador, llame a la función
//correspondiente y muestre el resultado.

import readline from "node:readline";

// Cada función recibe dos números y devuelve el resultado de su operación.
function sumar(a, b) {
    return a + b;
}

function restar(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        return "Error: no se puede dividir entre cero";
    }
    return a / b;
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se solicitan los datos de forma consecutiva y se ejecuta la operación elegida.
rl.question('Ingrese el primer número: ', (num1) => {
    rl.question('Ingrese el segundo número: ', (num2) => {
        rl.question('Ingrese el operador (+, -, *, /): ', (operador) => {
            // Se convierten las respuestas de texto a números para poder operar.
            const numero1 = parseFloat(num1);
            const numero2 = parseFloat(num2);
            let resultado;

            // El operador determina qué función se llama.
            switch (operador) {
                case '+':
                    resultado = sumar(numero1, numero2);
                    break;
                case '-':
                    resultado = restar(numero1, numero2);
                    break;
                case '*':
                    resultado = multiplicar(numero1, numero2);
                    break;
                case '/':
                    resultado = dividir(numero1, numero2);
                    break;
                default:
                    resultado = 'Operador no válido';
                    break;
            }

            // Se muestra el resultado y se cierra la entrada de datos.
            console.log('Resultado: ' + resultado);
            rl.close();
        });
    });
});
