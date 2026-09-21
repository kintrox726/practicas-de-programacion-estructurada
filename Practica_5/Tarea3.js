//Tarea 3: Simulador de cajero automático con menú
//Cree un programa que simule un cajero automático. Inicie con un saldo de $1000.
//Muestre un menú con las opciones:
//1. Consultar saldo
//2. Retirar dinero
//3. Depositar dinero
//4. Salir
//Usando Switch, ejecute la opción seleccionada:
//- Opción 1: Muestre el saldo actual.
//- Opción 2: Solicite el monto a retirar. Valide que sea mayor a 0, múltiplo de $5 
//  y que no exceda el saldo. Si cumple, reste del saldo; si no, muestre el error 
//  correspondiente.
//- Opción 3: Solicite el monto a depositar. Valide que sea mayor a 0 y que no 
//  exceda $5000 en un solo depósito. Si cumple, sume al saldo; si no, muestre 
//  el error.
//- Opción 4: Muestre "Gracias por usar el cajero" y salga.
//- Si la opción no es válida, muestre "Opción no válida".

import readline from "node:readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Variable global para el saldo (empieza en 1000)
let saldo = 1000;

// Muestro el menú
console.log("=== SIMULADOR DE CAJERO AUTOMÁTICO ===");
console.log("1. Consultar saldo");
console.log("2. Retirar dinero");
console.log("3. Depositar dinero");
console.log("4. Salir");
console.log("");

// Pido la opción al usuario
rl.question("Ingrese una opción: ", (respuesta) => {

    // Convierto lo que escribió a número entero
    let opcion = parseInt(respuesta);

    // Uso switch para evaluar la opción
    switch (opcion) {

        // OPCIÓN 1: Consultar saldo
        case 1:
            console.log("Su saldo actual es: $" + saldo);
            rl.close();
            break;

        // OPCIÓN 2: Retirar dinero
        case 2:
            rl.question("Ingrese el monto a retirar: ", (monto) => {
                // Convierto el monto a número
                let monto = parseFloat(monto);

                // VALIDACIÓN 1: que sea mayor a 0
                if (monto <= 0) {
                    console.log("Error: El monto debe ser mayor a 0");
                }
                // VALIDACIÓN 2: que sea múltiplo de 5
                else if (monto % 5 !== 0) {
                    console.log("Error: El monto debe ser múltiplo de $5");
                }
                // VALIDACIÓN 3: que no exceda el saldo
                else if (monto > saldo) {
                    console.log("Error: Saldo insuficiente. Su saldo es: $" + saldo);
                }
                // Si todo está bien, hago el retiro
                else {
                    saldo = saldo - monto;
                    console.log("Retiro exitoso. Su nuevo saldo es: $" + saldo);
                }

                rl.close();
            });
            break;

        // OPCIÓN 3: Depositar dinero
        case 3:
            rl.question("Ingrese el monto a depositar: ", (montoTexto) => {

                // Convierto el monto a número
                let monto = parseFloat(montoTexto);

                // VALIDACIÓN 1: que sea mayor a 0
                if (monto <= 0) {
                    console.log("Error: El monto debe ser mayor a 0");
                }
                // VALIDACIÓN 2: que no exceda 5000
                else if (monto > 5000) {
                    console.log("Error: El depósito no puede exceder $5000");
                }
                // Si todo está bien, hago el depósito
                else {
                    saldo = saldo + monto;
                    console.log("Depósito exitoso. Su nuevo saldo es: $" + saldo);
                }

                rl.close();
            });
            break;

        // OPCIÓN 4: Salir
        case 4:
            console.log("Gracias por usar el cajero");
            rl.close();
            break;

        // Si escribió otra cosa
        default:
            console.log("Opción no válida");
            rl.close();
            break;
    }
});