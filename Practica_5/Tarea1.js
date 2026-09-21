// Tarea 1: Sistema de acceso bancario
// Solicite al usuario su tipo de tarjeta (1=Débito, 2=Crédito, 3=Premium) y el monto 
// a retirar. Usando Switch, asigne un límite de retiro según el tipo de tarjeta: 
// 1=$500, 2=$1000, 3=$2000. Luego, valide con IF si el monto solicitado es menor 
// o igual al límite y si es múltiplo de $10. Si cumple ambas condiciones, muestre 
// "Retiro exitoso". Si el monto excede el límite, muestre "Límite excedido". Si no 
// es múltiplo de $10, muestre "El monto debe ser múltiplo de 10". Si el tipo de 
// tarjeta no es válido, muestre "Tarjeta no válida".

import readline from "node:readline";


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Menú visual para el usuario
console.log("--TIPO DE TARJETA--");
console.log("1=Debito");
console.log("2=Credito");
console.log("3=Premium");

// Solicita el tipo de tarjeta
rl.question("Seleccione el tipo de tarjeta que posee: ", (tarjeta) => {
    // Solicita el monto a retirar
    rl.question("Ingrese el monto que desea retirar: ", (monto) => {

        // Convierte los valores ingresados a números (entero para la tarjeta y decimal para el monto)
        tarjeta = parseInt(tarjeta);
        monto = parseFloat(monto);

        let limite = 0;

        // Estructura Switch para asignar el límite de retiro según el tipo de tarjeta seleccionado
        switch (tarjeta) {
            case 1:
                limite = 500;
                break;
            case 2:
                limite = 1000;
                break;
            case 3:
                limite = 2000;
                break;
            default:
                // Si la opción no coincide con ninguna, muestra el error, cierra la consola y detiene la ejecución
                console.log("Tarjeta no válida");
                rl.close();
                return;
        }

        // Estructura condicional IF-ELSE para validar el monto del retiro
        if (monto > limite) {
            console.log("Límite excedido");
        } else if (monto % 10 !== 0) {
            console.log("El monto debe ser múltiplo de 10");
        } else {
            console.log("Retiro exitoso");
        }

        // Cierra la interfaz de lectura al finalizar el proceso
        rl.close();
    });
});