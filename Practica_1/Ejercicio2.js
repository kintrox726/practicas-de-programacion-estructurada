///Declare una variable con una temperatura en grados Fahrenheit. Conviértala a grados
///Celsius usando la fórmula correspondiente y muestre el resultado redondeado a dos
///decimales

let fahrenheit = 98.6; 
let celsius = (fahrenheit - 32) * 5/9;
console.log("Temperatura en Celsius: " + celsius.toFixed(2));