// Tarea 3: Descuento por monto de compra
// Se solicita el monto de compra y se aplica un descuento según el rango:
// - más de 100: 15%
// - más de 50: 10%
// - en caso contrario: sin descuento

import readline from "node:readline";

// Se crea la interfaz para leer la entrada del usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Se pide el monto a pagar y se determina el descuento.
rl.question("Ingrese el monto del producto: ", (monto) => {
    // Se convierte el texto a número decimal.
    monto = parseFloat(monto);
    let descuento = 0;
    let total = 0;

    // Se aplica el descuento según el monto.
    if (monto > 100) {
        descuento = monto * 0.15;
        total = monto - descuento;
    } else if (monto > 50) {
        descuento = monto * 0.10;
        total = monto - descuento;
    } else {
        total = monto;
    }

    // Se muestra el resultado final con el monto original, descuento y total.
    console.log(`\n--TOTAL--`);
    console.log(`Monto original: ${monto}
                \nDescuento aplicado: ${descuento}
                \ntotal a pagar: ${total}`);

    rl.close();
});