//Comparar dos números: Solicite dos números. Compare cuál es mayor y muestre el resultado. Si son 
//iguales, indíquelo.

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese el primero numero: ", (numero1)=>{
    rl.question("Ingrese el segundo numero: ", (numero2)=>{

        numero1 =parseFloat(numero1);
        numero2 = parseFloat(numero2);

        if(numero1 > numero2){
            console.log(`\nEl numero ${numero1} es mayor que el ${numero2}`);
        }
        else if(numero2 > numero1){
            console.log(`\nEl numero ${numero2} es mayor que el ${numero1}`);
        }
        else{
            console.log(`\n${numero1} y ${numero2} son iguales`);
        }
        rl.close();
    });
});