// ============================================
// EJERCICIO 3: Funciones para arreglos
// ============================================
// ENUNCIADO:
// Cree tres funciones: una que reciba un arreglo y devuelva la suma
// de sus elementos; otra que devuelva el promedio; y otra que devuelva
// el número mayor. Cree un arreglo con al menos 6 números y muestre
// los tres resultados.
// ============================================

// Función que suma todos los elementos de un arreglo
function sumarElementos(arreglo) {
    let suma = 0; // Acumulador inicial en 0
    for (let i = 0; i < arreglo.length; i++) {
        suma += arreglo[i]; // Vamos sumando cada elemento
    }
    return suma;
}

// Función que calcula el promedio del arreglo
function calcularPromedio(arreglo) {
    // Reutilizamos la función sumarElementos
    const suma = sumarElementos(arreglo);
    // El promedio es la suma dividida entre la cantidad de elementos
    const promedio = suma / arreglo.length;
    return promedio;
}

// Función que devuelve el número mayor del arreglo
function encontrarMayor(arreglo) {
    // Suponemos que el primero es el mayor inicialmente
    let mayor = arreglo[0];
    // Recorremos el arreglo comparando
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i]; // Actualizamos si encontramos uno mayor
        }
    }
    return mayor;
}

// ----- Programa principal -----
// Creamos un arreglo con 6 números
const numeros = [15, 8, 23, 4, 42, 10];

// Llamamos a las tres funciones
const sumaTotal = sumarElementos(numeros);
const promedio = calcularPromedio(numeros);
const numeroMayor = encontrarMayor(numeros);

// Mostramos los resultados
console.log(`Arreglo: [${numeros}]`);
console.log(`La suma de los elementos es: ${sumaTotal}`);
console.log(`El promedio es: ${promedio.toFixed(2)}`); // toFixed(2) = 2 decimales
console.log(`El número mayor es: ${numeroMayor}`);