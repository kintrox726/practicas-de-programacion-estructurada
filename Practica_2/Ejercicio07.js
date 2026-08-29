//Formato de hora actual: Obtenga la hora, minutos y segundos actual. Muestre en formato: HH:MM:SS

let fecha = new Date();

let hr = fecha.getHours();
let min = fecha.getMinutes();
let segun = fecha.getSeconds();

console.log(`La hora es: ${hr}:${min}:${segun}`)