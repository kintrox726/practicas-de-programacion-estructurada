// Tarea 4: Información completa de fecha y hora
// Se obtiene la fecha y la hora actual del sistema y se muestra en formato legible.

// Se crea un objeto Date con la fecha y hora del sistema.
fecha = new Date();

// Se extraen el día, mes y año de la fecha actual.
let dia = fecha.getDate();
let mes = fecha.getMonth() + 1;
let anio = fecha.getFullYear();

// Se extraen la hora, minutos y segundos actuales.
let hr = fecha.getHours();
let min = fecha.getMinutes();
let segun = fecha.getSeconds();

// Se imprime la fecha y hora actual en el formato solicitado.
console.log(`Hoy es: ${dia}/${mes}/${anio} y son las ${hr}:${min}:${segun}`);