// ============================================
// CALCULADORA CON FUNCIONES
// ============================================
// ENUNCIADO:
// Cree una función para cada operación básica: sumar, restar,
// multiplicar y dividir. Solicite dos números y un operador al usuario.
// Según el operador, llame a la función correspondiente y muestre
// el resultado.
// ============================================

// Importamos el módulo readline para poder pedir datos al usuario
// desde la consola (teclado).
import readline from "node:readline";

// Creamos la interfaz de lectura.
// "input" es de dónde lee (el teclado) y "output" es dónde escribe (la consola).
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// --------------------------------------------
// FUNCIÓN: menu()
// Muestra en pantalla las opciones disponibles.
// --------------------------------------------
function menu() {
    console.log("***CALCULADORA***");
    console.log("1) Sumar");
    console.log("2) Restar");
    console.log("3) Multiplicar");
    console.log("4) Dividir");
}

// --------------------------------------------
// FUNCIÓN: sumar(num1, num2)
// Recibe dos números y devuelve la suma.
// --------------------------------------------
function sumar(num1, num2) {
    return num1 + num2;
}

// --------------------------------------------
// FUNCIÓN: restar(num1, num2)
// Recibe dos números y devuelve la resta.
// --------------------------------------------
function restar(num1, num2) {
    return num1 - num2;
}

// --------------------------------------------
// FUNCIÓN: multiplicar(num1, num2)
// Recibe dos números y devuelve la multiplicación.
// --------------------------------------------
function multiplicar(num1, num2) {
    return num1 * num2;
}

// --------------------------------------------
// FUNCIÓN: dividir(num1, num2)
// Recibe dos números y devuelve la división.
// Antes valida que el segundo número no sea 0,
// porque no se puede dividir entre cero.
// --------------------------------------------
function dividir(num1, num2) {
    if (num2 === 0) {
        // Si el divisor es 0, devolvemos un mensaje de error
        return "Error: no se puede dividir entre cero";
    }
    return num1 / num2;
}

// --------------------------------------------
// PROGRAMA PRINCIPAL
// --------------------------------------------

// Mostramos el menú de opciones al usuario
menu();

// Pedimos al usuario que elija una opción del menú (1 al 4)
rl.question("Ingrese unas de las opciones: ", (Opcion) => {

    // Pedimos el primer número
    rl.question("Ingrese el primer numero: ", (num1) => {

        // Pedimos el segundo número
        rl.question("Ingrese el segundo numero: ", (num2) => {

            // Convertimos las respuestas de texto a números:
            // - Opcion -> entero (para el switch)
            // - num1 y num2 -> decimales (por si el usuario usa decimales)
            Opcion = parseInt(Opcion);
            num1 = parseFloat(num1);
            num2 = parseFloat(num2);

            // Variable donde guardaremos el resultado de la operación
            let Resultado;

            // Según la opción elegida, llamamos a la función correspondiente
            switch (Opcion) {
                case 1:
                    // Opción 1: Sumar
                    Resultado = sumar(num1, num2);
                    break;

                case 2:
                    // Opción 2: Restar
                    Resultado = restar(num1, num2);
                    break;

                case 3:
                    // Opción 3: Multiplicar
                    Resultado = multiplicar(num1, num2);
                    break;

                case 4:
                    // Opción 4: Dividir
                    Resultado = dividir(num1, num2);
                    break;

                default:
                    // Si el usuario escribió algo que no es 1, 2, 3 o 4
                    console.log("Opcion no valida");
                    break;
            }

            // Mostramos el resultado final en consola
            console.log(`Resultado: ${Resultado}`);

            // Cerramos la interfaz de lectura para terminar el programa
            rl.close();
        });
    });
});