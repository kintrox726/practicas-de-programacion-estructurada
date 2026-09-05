//Categoría por edad: Solicite la edad del usuario. Clasifíquelo en: niño (0-12), adolescente (13-17), 
//adulto (18-64) o adulto mayor (65+).
import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Ingrese su edad: ", (edad)=>{4
    edad = parseInt(edad);

    if(edad >= 0 && edad <= 12){
        console.log(`\nUsted es un niño`);
    }
    else if (edad >= 13 && edad <=17){
        console.log("\nUsted es adolescente")
    }
    else if (edad >= 18 && edad <=64){
        console.log("\nUsted es adulto")
    }
    else{
        console.log("Ustede es adulto mayor")
    }
    rl.close();
});