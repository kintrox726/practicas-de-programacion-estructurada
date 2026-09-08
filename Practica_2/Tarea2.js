// Tarea 2: Información de producto con precio
// Se solicita el nombre del producto, el precio unitario y la cantidad.
// Luego se muestra el nombre en mayúsculas, las primeras 3 letras y el total.

import readline from "node:readline";

// Se crea la interfaz para capturar los datos del usuario.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Se pide la información del producto y se calcula el total final.
rl.question("Ingrese el nombre del producto: ", (producto) => {
    rl.question("Ingrese el precio unitario: ", (Precio) => {
        rl.question("Ingrese la cantidad: ", (cantidad) => {

            // Se convierten los valores a tipos numéricos.
            Precio = parseFloat(Precio);
            cantidad = parseInt(cantidad);
            let total = Precio * cantidad;

            // Muestra el nombre en mayúsculas.
            console.log(`Nombre del producto: ${producto.toUpperCase()}`);

            // Muestra las primeras 3 letras del nombre.
            console.log(`Primeras 3 letras del producto: ${producto.toUpperCase().slice(0,3)}`);

            // Muestra el total con dos decimales.
            console.log(`TOTAL: $${total.toFixed(2)}`);
            rl.close();
        });
    });
});
