// ============================================
// TAREA 2: Cajero automático (DO...WHILE)
// ============================================
// ENUNCIADO:
// Cree un cajero con saldo inicial de $1000. El menú debe repetirse
// hasta que el usuario salga: 1) Consultar saldo, 2) Retirar,
// 3) Depositar, 4) Salir. Valide que los retiros no excedan el saldo
// y que los depósitos sean mayores a 0. Use Switch y DO...WHILE.
// ============================================

// Importamos readline
import readline from "node:readline";

// Creamos la interfaz para leer datos
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// El cajero empieza con 1000 dólares
let saldo = 1000;

// Esta variable controla si el usuario quiere salir
let salir = false;

// Esta función muestra el menú en pantalla
function mostrarMenu() {
    console.log("\n=== CAJERO AUTOMÁTICO ===");
    console.log("1) Ver saldo");
    console.log("2) Retirar");
    console.log("3) Depositar");
    console.log("4) Salir");
}

// Esta función hace que el cajero funcione
function usarCajero() {

    // DO...WHILE: el bloque se ejecuta AL MENOS UNA VEZ
    // y se repite mientras "salir" sea false
    do {

        // Mostramos el menú
        mostrarMenu();

        // Pedimos una opción al usuario
        rl.question("Elige una opción: ", function (opcion) {

            // Switch para decidir qué hacer según la opción
            switch (opcion) {

                case "1":
                    // Mostrar saldo
                    console.log("Tu saldo es: $" + saldo.toFixed(2));
                    usarCajero(); // Volvemos a mostrar el menú
                    break;

                case "2":
                    // Retirar dinero
                    rl.question("¿Cuánto quieres retirar? ", function (monto) {
                        let cantidad = parseFloat(monto);

                        // Validamos
                        if (cantidad <= 0) {
                            console.log("Error: debes retirar más de 0.");
                        } 
                        else if (cantidad > saldo) {
                            console.log("Error: no tienes suficiente saldo.");
                        } 
                        else {
                            saldo = saldo - cantidad;
                            console.log("Retiro hecho. Nuevo saldo: $" + saldo.toFixed(2));
                        }
                        usarCajero(); // Volvemos al menú
                    });
                    break;

                case "3":
                    // Depositar dinero
                    rl.question("¿Cuánto quieres depositar? ", function (monto) {
                        let cantidad = parseFloat(monto);

                        // Validamos
                        if (cantidad <= 0) {
                            console.log("Error: debes depositar más de 0.");
                        } 
                        else {
                            saldo = saldo + cantidad;
                            console.log("Depósito hecho. Nuevo saldo: $" + saldo.toFixed(2));
                        }
                        usarCajero(); // Volvemos al menú
                    });
                    break;

                case "4":
                    // Salir del cajero
                    console.log("Gracias por usar el cajero. Saldo final: $" + saldo.toFixed(2));
                    salir = true; // Cambiamos la condición para salir del DO...WHILE
                    rl.close();
                    break;

                default:
                    // Si escribe algo que no es 1, 2, 3 o 4
                    console.log("Opción no válida.");
                    usarCajero();
                    break;
            }
        });

    } while (salir === false); // Se repite mientras no quiera salir
}

// Iniciamos el cajero
usarCajero();