// Tarea 4: Validar requisitos de empleado
// Se solicita el nombre, la edad y los años de experiencia de una persona.
// Si cumple con la edad mínima y tiene experiencia, se considera candidato válido.

import readline from "node:readline";

// Se crea la interfaz para leer la información del usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Se solicitan los datos del empleado
rl.question("ingrese su nombre su nombre: ", (nomber) => {
    rl.question("Ingrese su edad: ", (edad) => {
        rl.question("Ingres sus anios de experiencia: ", (experiencia) => {

            // Se convierten los valores a enteros.
            edad = parseInt(edad);
            experiencia = parseInt(experiencia);

            // Se valida si cumple con los requisitos necesarios.
            if (edad >= 18 && experiencia > 0) {
                console.log("Candidato valido");
            } else {
                console.log("No cumple con los requisitos");
            }

            rl.close();
        });
    });
});