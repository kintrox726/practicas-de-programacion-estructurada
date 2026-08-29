//Tarea 3: Calcular edad y años de experiencia
//Solicite al usuario su año de nacimiento. Obtenga el año actual, calcule su edad y muestre: 
//"Tu edad aproximada es: X años."

import readline from  "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout    
});

let fecha = new Date;

rl.question("Ingrese su fecha de nacimiento: ",(fechaNac)=>{

    fechaNac = parseInt(fechaNac);
    let edad = fecha.getFullYear() - fechaNac;

    console.log(`edad aproximada es: ${edad} años`);
    rl.close();
});