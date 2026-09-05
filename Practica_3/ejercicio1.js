//Validar número positivo: Solicite un número al usuario. Verifique si es positivo, negativo o cero, y 
//muestre un mensaje correspondiente.
import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Ingrese un numero: ", (numero) => {
    numero = parseFloat(numero);

    if (numero > 0) {
        console.log("El número es positivo.");
    } else if (numero < 0) {
        console.log("El número es negativo.");
    } else {
        console.log("El número es cero.");
    }
    rl.close();
});
