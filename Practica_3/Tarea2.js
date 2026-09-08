// Tarea 2: Comparar calificaciones
// Se solicitan dos notas al usuario y se compara cuál es mayor.
// Si ambas son iguales, se informa que tienen el mismo valor.

import readline from "node:readline";

// Se crea la interfaz para leer datos del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Se piden las dos calificaciones.
rl.question("Ingrese la primera nota del (0-100): ", (nota1) => {
    rl.question("Ingrese la segunda nota del (0-100): ", (nota2) => {
        // Se convierten las entradas a enteros.
        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);

        // Se compara cuál nota es mayor o si son iguales.
        if (nota1 > nota2) {
            console.log(`Su nota mas alta es ${nota1}`);
        } else if (nota2 > nota1) {
            console.log(`Su nota mas alta es ${nota2}`);
        } else {
            console.log("Ambas notas son iguales:)");
        }

        rl.close();
    });
});