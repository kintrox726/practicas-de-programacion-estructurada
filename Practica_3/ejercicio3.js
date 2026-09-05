//Validar calificación: Solicite una calificación (0-100). Muestre si aprobó (>=60) o reprobó (<60).
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese la calificacion de 0 - 100: ", (calificacion)=>{
    calificacion = parseInt(calificacion);

    if(calificacion >= 60){
        console.log(`\nUsted aprobo`);
    } 
    else if(calificacion < 60){
        console.log(`\nUsted reprobo`);
    }
    else{
        console.log(`\nPeticion erronea`)
    }
    rl.close();
})
