//Tarea 2: Información de producto con precio
//Solicite el nombre del producto, precio unitario y cantidad. Muestre el nombre en mayúsculas,
//SSextraiga las primeras 3 letras del producto y muestre el precio total con 2 decimales.

import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el nombre del producto: ", (producto)=>{
    rl.question("Ingrese el precio unitario: ", (Precio)=>{
        rl.question("Ingrese la cantidad: ",(cantidad)=>{

            Precio = parseFloat(Precio);
            cantidad = parseInt(cantidad);
            let total = Precio * cantidad;

            console.log(`Nombre del producto: ${producto.toUpperCase()}`);
            console.log(`Primeras 3 letras del producto: ${producto.toUpperCase().slice(0,3)}`);
            console.log(`TOTAL: $${total.toFixed(2)}`)
            rl.close();

            
        });
    });
});

