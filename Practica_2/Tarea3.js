// Tarea 3: Calcular edad y años de experiencia
// Se solicita el año de nacimiento del usuario y se compara con el año actual.
// Con base en esa diferencia, se muestra su edad aproximada.

import readline from "node:readline";

// Se crea la interfaz para leer la entrada del usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se obtiene la fecha actual del sistema.
let fecha = new Date();

// Se pide el año de nacimiento y se calcula la edad.
rl.question("Ingrese su fecha de nacimiento: ", (fechaNac) => {
    // Se convierte el valor ingresado a número entero.
    fechaNac = parseInt(fechaNac);

    // Se calcula la edad con la diferencia entre el año actual y el año de nacimiento.
    let edad = fecha.getFullYear() - fechaNac;

    // Se muestra la edad aproximada.
    console.log(`edad aproximada es: ${edad} años`);
    rl.close();
});