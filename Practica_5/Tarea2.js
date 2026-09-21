// Tarea 2: Clasificador de números con múltiples condiciones
// Solicite tres números al usuario (a, b, c). Usando IF...ELSE IF y operadores 
// lógicos, determine y muestre:
// - Si los tres son iguales: "Los tres números son iguales"
// - Si los tres son diferentes: "Los tres números son diferentes"
// - Si exactamente dos son iguales: "Hay dos números iguales"
// - Además, indique cuál de los tres números es el mayor y cuál es el menor.
// - Si algún número es negativo, agregue el mensaje "Hay números negativos".

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitud secuencial de los tres números (a, b, c)
rl.question("Ingrese el primer número (a): ", (a) => {
    rl.question("Ingrese el segundo número (b): ", (b) => {
        rl.question("Ingrese el tercer número (c): ", (c) => {  
            
            // Convierte los valores de texto ingresados a números decimales
            a = parseFloat(a);
            b = parseFloat(b);
            c = parseFloat(c);

            // Estructura IF...ELSE IF para clasificar la igualdad o diferencia entre los tres números
            if (a === b && b === c) {
                console.log("Los tres números son iguales");
            } else if (a !== b && b !== c && a !== c) {
                console.log("Los tres números son diferentes");
            } else {
                // Si no son todos iguales ni todos diferentes, por lógica significa que hay exactamente dos iguales
                console.log("Hay dos números iguales");
            }

            // Se inicializan las variables 'mayor' y 'menor' asumiendo provisionalmente que 'a' es ambos
            let mayor = a;
            let menor = a;

            // Lógica para encontrar el número mayor
            if (b > mayor) {
                mayor = b;
            }
            if (c > mayor) {
                mayor = c;
            }

            // Lógica para encontrar el número menor
            if (b < menor) {
                menor = b;
            }
            if (c < menor) {
                menor = c;
            }

            // Muestra los resultados obtenidos del mayor y menor
            console.log(`El número mayor es: ${mayor}`);
            console.log(`El número menor es: ${menor}`);

            // Validación usando el operador lógico OR (||) para detectar si al menos uno es negativo
            if (a < 0 || b < 0 || c < 0) {
                console.log("Hay números negativos");
            }

            // Cierra la interfaz de lectura al finalizar todo el proceso
            rl.close();
        });
    });
});