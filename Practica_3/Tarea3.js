//Tarea 3: Descuento por monto de compra
//Solicite el monto de compra. Si es mayor a $100, aplique 15% de descuento. Si es mayor a $50,
//aplique 10%. En otro caso, no hay descuento. Muestre el monto original, el descuento aplicado y el 
//total a pagar con 2 decimales.

import { log } from "node:console";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese el monto del producto: ",(monto)=>{
    monto= parseFloat(monto);
    let descuento = 0;
    let total = 0;

    if(monto > 100){
        descuento = monto*0.15
        total = monto - descuento
    } 
    else if(monto > 50){
        descuento = monto * 0.10
        total = monto - descuento
    }
    else{
        total = monto
    }

    console.log(`\n--TOTAL--`);
    console.log(`Monto original: ${monto}
                \nDescuento aplicado: ${descuento}
                \ntotal a pagar: ${total}`)

    rl.close();
})