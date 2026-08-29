//Información de estudiante: Solicite nombre, apellido, año de ingreso y promedio. Muestre nombre y 
//pellido en mayúsculas, primeras 3 letras del apellido, últimos 2 dígitos del año y promedio con 2 decimales.

let nombre = "carlos";
let apellido = "Lopez";
let anio = 2007;
let promedio = 9.8888;

console.log(`Su nombre y apelido en mayusculas es: ${nombre.toUpperCase()} ${apellido.toLowerCase()}`);
console.log(`Las primeras 3 letras del apellido son: ${apellido.slice(0.3)}`);
console.log(`Los 2 ultimos digitos del anio son: ${anio.toString().slice(2.4)}`);
console.log(`Su promedio en 2 decimales son: ${promedio.toFixed(2)}`)