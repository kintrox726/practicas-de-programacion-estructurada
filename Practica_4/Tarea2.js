// Tarea 2: Nivel de estudios
// Solicite al usuario su nivel de estudios con un número del 1 al 5: 1 = Primaria, 2 = Secundaria,
// 3 = Bachillerato, 4 = Universidad, 5 = Postgrado. Usando Switch, muestre el nivel correspondiente.
// Si el número no es válido, muestre "Nivel no válido".

// Importamos la librería readline para leer la entrada del usuario.
import readline from "node:readline";

// Creamos la interfaz de entrada y salida.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que muestra el menú de opciones disponibles.
function menu() {
    console.log("Ingrese su nivel de estudios");
    console.log("1 = Primaria");
    console.log("2 = Secundaria");
    console.log("3 = Bachillerato");
    console.log("4 = Universidad");
    console.log("5 = Postgrado");
}

// Se imprime el menú antes de pedir la opción.
menu();

rl.question("Ingrese su nivel educativo: ", (nivel) => {

    // Convertimos la respuesta a un valor numérico.
    nivel = parseInt(nivel);

    // Analizamos la opción elegida por el usuario.
    switch (nivel) {
        case 1:
            console.log("Su nivel es de primaria");
            break;

        case 2:
            console.log("Su nivel es de Secundaria");
            break;

        case 3:
            console.log("Su nivel es de Bachillerato");
            break;

        case 4:
            console.log("Su nivel es de Universidad");
            break;

        case 5:
            console.log("Su nivel es de Postgrados");
            break;

        default:
            console.log("Nivel no valido");
            break;
    }

    // Cerramos la interfaz después de mostrar el resultado.
    rl.close();
});