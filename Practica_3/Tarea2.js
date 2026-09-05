//Tarea 2: Comparar calificaciones
//Solicite al usuario dos calificaciones (0-100). Compare cuál es la más alta. Si son iguales, indíquelo.
//Muestre un mensaje descriptivo con el resultado.

import { parse } from "node:path";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese la primera nota del (0-100): ", (nota1)=>{
    rl.question("Ingrese la segunda nota del (0-100): ",(nota2)=>{
        nota1 = parseInt(nota1);
        nota2 = parseInt(nota2);

        if(nota1 > nota2){
            console.log(`Su nota mas alta es ${nota1}`)
        }
        else if(nota2 > nota1){
            console.log(`Su nota mas alta es ${nota2}`)
        }
        else{
            console.log("Ambas notas son iguales:) ")
        }

        rl.close();
    })
})