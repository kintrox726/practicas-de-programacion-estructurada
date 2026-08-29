//Tarea 1: Procesar nombre de usuario
//Solicite al usuario su nombre completo. Convierta el nombre a mayúsculas, extraiga las primeras 40
//letras y luego conviértalo a minúsculas. Muestre todos los resultados.

import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese su nombre completo: ", (nombre) => {
    console.log(`Su nombre en mayuscula es: ${nombre.toUpperCase()}`);
    console.log(`Su nombre en mayuscula es: ${nombre.toUpperCase().slice(0,4)}`);
    console.log(`Su nombre en mayuscula es: ${nombre.toLowerCase().slice(0,4)}`); 
    rl.close();

}); 