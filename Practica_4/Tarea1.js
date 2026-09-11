// Tarea 1: Clasificación de figuras geométricas
// Solicite al usuario el número de lados de una figura (3, 4, 5, 6). Utilizando Switch, muestre el
// nombre de la figura correspondiente: 3 = Triángulo, 4 = Cuadrilátero, 5 = Pentágono, 6 = Hexágono.
// Si el número no está en la lista, muestre "Figura no reconocida".

// Importamos la librería readline para leer datos desde la consola.
import readline from "node:readline";

// Creamos la interfaz para capturar la entrada del usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Pedimos al usuario que ingrese el número de lados.
rl.question("Ingrese el numero de lados que posee la figura (ejemplo: 3, 4, 5, 6): ", (lado) => {

    // Convertimos la entrada a un número entero.
    lado = parseInt(lado);

    // Evaluamos el valor ingresado para mostrar la figura correcta.
    switch (lado) {
        case 3:
            console.log("La figura que posee es un Triangulo");
            break;

        case 4:
            console.log("La figura que posee es un Cuadrilatero");
            break;

        case 5:
            console.log("La figura que posee es un Pentagono");
            break;

        case 6:
            console.log("La figura que posee es un Hexagono");
            break;

        default:
            console.log("Figura no reconocida");
            break;
    }

    // Cerramos la interfaz después de procesar la opción.
    rl.close();
});