// Tarea 1: Procesar nombre de usuario
// Se solicita el nombre completo del usuario, se convierte a mayúsculas,
// se extraen las primeras 40 letras y se convierte a minúsculas para mostrar
// resultados distintos del texto original.

import readline from "node:readline";

// Se crea la interfaz para leer datos ingresados por el usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se pide el nombre y luego se muestran varias transformaciones del texto.
rl.question("Ingrese su nombre completo: ", (nombre) => {
    // Muestra el nombre completo en mayúsculas.
    console.log(`Su nombre en mayuscula es: ${nombre.toUpperCase()}`);

    // Muestra solo las primeras 4 letras en mayúsculas.
    console.log(`Su nombre en mayuscula es: ${nombre.toUpperCase().slice(0,4)}`);

    // Muestra las primeras 4 letras en minúsculas.
    console.log(`Su nombre en mayuscula es: ${nombre.toLowerCase().slice(0,4)}`);

    rl.close();
});