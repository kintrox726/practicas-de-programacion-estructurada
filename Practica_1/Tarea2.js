// Conversión de Monedas
//En el mundo globalizado en el que vivimos, es común necesitar convertir dinero de una
//moneda a otra. Esta tarea le enseña cómo utilizar operadores matemáticos para realizar
//conversiones de monedas de forma automatizada.

// Variable que almacena la cantidad de dólares a convertir
let dolares = 100;

// Convierte dólares a euros multiplicando por la tasa de cambio
const Euros = dolares * 0.92;

// Convierte dólares a pesos salvadoreños multiplicando por la tasa de cambio
const salvadoreño = dolares * 8.75;

// Convierte dólares a quetzales multiplicando por la tasa de cambio
const Quetzalte = dolares * 7.80; 

// Imprime el encabezado de los resultados
console.log(`--Resultado de las conversiones--`);

// Imprime la cantidad de dólares a convertir
console.log(`Cantidad ${dolares}`);

// Imprime todos los valores convertidos redondeados a 2 decimales
console.log(`Euros: ${Euros.toFixed(2)}, \npesos Salvadoreños: ${salvadoreño.toFixed(2)}, \nQuetzalte: ${Quetzalte.toFixed(2)} `);