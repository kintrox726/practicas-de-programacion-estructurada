//Extracción de datos: Solicite un código 
//con formato "EST20260645". Extraiga los primeros 3 caracteres y los últimos 4.

let codigo = "EST20260645";

let codigo3caracteres = codigo.slice(0,3)
let codigo4caracteres = codigo.slice(8.11)

console.log("los primero 3 caracteres: " +codigo3caracteres);
console.log("los primeros 4 caracteres: "+codigo4caracteres);