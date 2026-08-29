///Conversión número a texto: Solicite un número de referencia de 8 dígitos. 
///Conviértalo a texto y extraiga los primeros 4 dígitos.

let numero =123456789;

let numeroText = numero.toString();
console.log("Su variable es tipo: "+ typeof numeroText);

console.log("Los primeros 4 digitos son: "+ numeroText.slice(0.4))