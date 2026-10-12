// ============================================
// TAREA 3: Manejo de cadenas
// ============================================
// ENUNCIADO:
// Cree las siguientes funciones: una que reciba una cadena y devuelva
// la cantidad de vocales; otra que reciba una cadena y devuelva la
// cadena invertida; y otra que reciba una cadena y determine si es
// palíndromo (se lee igual al derecho y al revés). Solicite una palabra
// o frase al usuario y muestre los tres resultados.
// ============================================

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función que cuenta las vocales de una cadena
function contarVocales(cadena) {
    // Convertimos todo a minúsculas para no fallar con mayúsculas
    let texto = cadena.toLowerCase();
    let contador = 0;
    let vocales = "aeiou";

    // Recorremos cada letra de la cadena
    for (let i = 0; i < texto.length; i++) {
        // Si la letra está dentro de "aeiou", es vocal
        if (vocales.includes(texto[i])) {
            contador = contador + 1;
        }
    }
    return contador;
}

// Función que devuelve la cadena invertida
function invertirCadena(cadena) {
    let invertida = "";
    // Recorremos la cadena desde el final hasta el inicio
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida = invertida + cadena[i];
    }
    return invertida;
}

// Función que dice si una cadena es palíndromo
function esPalindromo(cadena) {
    // Quitamos espacios y convertimos a minúsculas
    let limpia = cadena.toLowerCase().replace(/ /g, "");

    // Invertimos la cadena limpia
    let invertida = "";
    for (let i = limpia.length - 1; i >= 0; i--) {
        invertida = invertida + limpia[i];
    }

    // Comparamos: si son iguales, es palíndromo
    if (limpia === invertida) {
        return true;
    } else {
        return false;
    }
}

// Pedimos una palabra o frase al usuario
rl.question("Ingresa una palabra o frase: ", function (texto) {

    // Llamamos a las tres funciones
    let vocales = contarVocales(texto);
    let invertida = invertirCadena(texto);
    let palindromo = esPalindromo(texto);

    // Mostramos los resultados
    console.log("\n=== RESULTADOS ===");
    console.log("Cantidad de vocales: " + vocales);
    console.log("Cadena invertida: " + invertida);

    // Mostramos si es palíndromo o no
    if (palindromo) {
        console.log("¿Es palíndromo? SÍ");
    } else {
        console.log("¿Es palíndromo? NO");
    }

    rl.close();
});