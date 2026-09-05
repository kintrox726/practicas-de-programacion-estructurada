//Tarea 4: Validar requisitos de empleado
//Solicite nombre, edad y años de experiencia. Valide que la edad sea mayor a 18 Y que la 
//experiencia sea mayor a 0. Si cumple ambas condiciones, muestre "Candidato válido". Si no cumple,
//muestre "No cumple con los requisitos".

import { parse } from "node:path";
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("ingrese su nombre su nombre: ",(nomber)=>{
    rl.question("Ingrese su edad: ",(edad)=>{
        rl.question("Ingres sus anios de experiencia: ",(experiencia)=>{
            
            edad = parseInt(edad);
            experiencia = parseInt(experiencia);

            if(edad >=18 && experiencia > 0){
                console.log("Candidato valido")
            }
            else{
                console.log("No cumple con los requisitos")
            }

            rl.close();

        })
    })
})