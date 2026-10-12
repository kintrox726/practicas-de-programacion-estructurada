// ============================================
// TAREA 1: Sistema de calificaciones con funciones
// ============================================
// ENUNCIADO:
// Cree una función que reciba una calificación numérica (0-100) y
// devuelva la letra correspondiente (A, B, C, D, F). Cree otra función
// que reciba un arreglo de calificaciones y devuelva el promedio.
// Solicite al usuario cuántas calificaciones desea ingresar, almacene
// cada una en un arreglo, y al final muestre: cada calificación con
// su letra, el promedio y la letra del promedio.
// ============================================

// Importamos readline para pedir datos al usuario
import readline from "node:readline";

// Creamos la interfaz de lectura
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que recibe una calificación (0-100) y devuelve la letra
function obtenerLetra(calificacion) {
    // Según el rango, devolvemos la letra correspondiente
    if (calificacion >= 90) {
        return "A";
    } else if (calificacion >= 80) {
        return "B";
    } else if (calificacion >= 70) {
        return "C";
    } else if (calificacion >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Función que recibe un arreglo y devuelve el promedio
function calcularPromedio(arreglo) {
    let suma = 0;
    // Recorremos el arreglo sumando cada calificación
    for (let i = 0; i < arreglo.length; i++) {
        suma = suma + arreglo[i];
    }
    // Dividimos entre la cantidad de elementos
    let promedio = suma / arreglo.length;
    return promedio;
}

// Arreglo donde guardaremos las calificaciones
let calificaciones = [];

// Pedimos cuántas calificaciones quiere ingresar
rl.question("¿Cuántas calificaciones deseas ingresar? ", function (cantidad) {

    // Convertimos a número entero
    let total = parseInt(cantidad);

    // Variable para controlar cuántas llevamos
    let contador = 0;

    // Función que pide una calificación a la vez
    function pedirCalificacion() {
        // Si ya pedimos todas, mostramos resultados
        if (contador === total) {
            mostrarResultados();
            return;
        }

        // Pedimos la calificación
        rl.question("Ingresa la calificación " + (contador + 1) + ": ", function (valor) {

            // Convertimos a número decimal y lo guardamos
            let nota = parseFloat(valor);
            calificaciones.push(nota);

            // Aumentamos el contador
            contador = contador + 1;

            // Volvemos a pedir otra
            pedirCalificacion();
        });
    }

    // Función que muestra todos los resultados
    function mostrarResultados() {
        console.log("\n=== RESULTADOS ===");

        // Recorremos el arreglo con FOR...OF
        for (const nota of calificaciones) {
            let letra = obtenerLetra(nota);
            console.log("Calificación: " + nota + " -> Letra: " + letra);
        }

        // Calculamos el promedio
        let promedio = calcularPromedio(calificaciones);
        let letraPromedio = obtenerLetra(promedio);

        console.log("\nPromedio: " + promedio.toFixed(2));
        console.log("Letra del promedio: " + letraPromedio);

        // Cerramos la lectura
        rl.close();
    }

    // Iniciamos el proceso
    pedirCalificacion();
});