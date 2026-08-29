//Cálculo de Perímetro y Área de un Círculo
//Un círculo es una figura geométrica muy común en matemáticas e ingeniería. En esta
//tarea, usted necesita calcular dos propiedades importantes de un círculo: su perímetro
//(también llamado circunferencia) y su área.

// Variable que almacena el radio del círculo en unidades
let radio = 5;

// Calcula el perímetro (circunferencia) usando la fórmula: 2 * π * r
let perimetro = 2 * 3.14159 * radio;

// Calcula el área usando la fórmula: π * r²
let area = 3.14159 * radio **2;

// Imprime el radio del círculo
console.log("Radio del círculo: " + radio);

// Imprime el perímetro redondeado a 2 decimales
console.log("Perímetro del círculo: " + perimetro.toFixed(2));

// Imprime el área redondeada a 2 decimales
console.log("Área del círculo: " + area.toFixed(2));