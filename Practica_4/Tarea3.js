// Tarea 3: Máquina de bebidas
// Cree un programa que simule una máquina expendedora de bebidas con las siguientes opciones:
// 1 = Agua, 2 = Refresco, 3 = Jugo, 4 = Café, 5 = Té. Usando Switch, muestre el mensaje
// "Ha seleccionado: [nombre de la bebida]". Si la opción no es válida, muestre "Bebida no disponible".
// Además, si la bebida es Refresco o Jugo, agregue el mensaje "¿Desea agregar hielo?".

// Importamos la librería readline para leer la opción elegida por el usuario.
import readline from "node:readline";

// Creamos la interfaz de entrada y salida del programa.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que muestra el menú de bebidas disponibles.
function menu() {
    console.log("1 = Agua");
    console.log("2 = Refresco");
    console.log("3 = Jugo");
    console.log("4 = Cafe");
    console.log("5 = Te");
}

// Mostramos las opciones antes de solicitar la selección.
menu();

rl.question("Seleccione una de las bebidas que se muestran: ", (bebidas) => {

    // Convertimos la entrada a un número entero.
    bebidas = parseInt(bebidas);

    // Evaluamos la opción seleccionada en la máquina de bebidas.
    switch (bebidas) {
        case 1:
            console.log("Ha seleccionado: agua \nDesea agregarle hielo?");
            break;

        case 2:
            console.log("Ha seleccionado: Refresco \nDesea agregarle hielo?");
            break;

        case 3:
            console.log("Ha seleccionado: Jugo \nDesea agregarle hielo?");
            break;

        case 4:
            console.log("Ha seleccionado: Cafe");
            break;

        case 5:
            console.log("Ha seleccionado: Te");
            break;

        default:
            console.log("Bebida no disponible");
            break;
    }

    // Cerramos la interfaz después de procesar la selección.
    rl.close();
});

