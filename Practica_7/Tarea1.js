// ============================================
// TAREA 1: Adivinar el número secreto (WHILE)
// ============================================
// ENUNCIADO:
// Genere un número secreto entre 1 y 50 usando
// Math.floor(Math.random() * 50) + 1. Usando un bucle WHILE,
// solicite al usuario adivinar el número. En cada intento,
// indique si el número es mayor o menor que el secreto.
// Cuente los intentos y muéstrelos al final.
// ============================================

// Importamos readline para poder pedir datos al usuario
import readline from "node:readline";

// Creamos la interfaz para leer datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generamos un número secreto entre 1 y 50
// Math.random() da un número entre 0 y 1
// Lo multiplicamos por 50, lo redondeamos hacia abajo y sumamos 1
let numeroSecreto = Math.floor(Math.random() * 50) + 1;

// Esta variable nos dice si el usuario ya adivinó
// Empieza en false porque todavía no ha adivinado
let adivino = false;

// Esta variable cuenta cuántos intentos lleva
let intentos = 0;

// Mostramos un mensaje de bienvenida
console.log("=== ADIVINA EL NÚMERO SECRETO ===");
console.log("Pensé un número entre 1 y 50. ¡Adivínalo!");

// Bucle WHILE: se repite mientras "adivino" sea false
// Es decir, mientras NO haya adivinado
while (adivino === false) {

    // Pedimos un número al usuario
    rl.question("Escribe tu intento: ", function (respuesta) {

        // Convertimos lo que escribió (texto) a número entero
        let intento = parseInt(respuesta);

        // Sumamos 1 al contador de intentos
        intentos = intentos + 1;

        // Comparamos el intento con el número secreto
        if (intento === numeroSecreto) {
            // ¡Adivinó!
            console.log("¡Muy bien! Adivinaste el número " + numeroSecreto);
            console.log("Lo lograste en " + intentos + " intentos.");
            adivino = true;   // Cambiamos la condición para salir del bucle
            rl.close();       // Cerramos la lectura de datos
        } 
        else if (intento < numeroSecreto) {
            // El intento es menor, damos pista
            console.log("El número secreto es MAYOR. Intenta otra vez.");
        } 
        else {
            // El intento es mayor, damos pista
            console.log("El número secreto es MENOR. Intenta otra vez.");
        }
    });
}