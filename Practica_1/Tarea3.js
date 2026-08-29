// Cálculo de Consumo de Electricidad
//Una factura de electricidad es un documento que todos recibimos en nuestros hogares. En
//esta tarea, usted simulará el cálculo de una factura eléctrica, incluyendo impuestos, que
//es un proceso común en empresas de servicios.

// Variable que almacena la cantidad de kilowatts consumidos
let kilowatts = 250;

// Constante que define el precio por kilowatt (en dólares)
const precio = 0.15;

// Calcula el costo base multiplicando kilowatts consumidos por el precio unitario
let costo_base = kilowatts * precio;

// Calcula el impuesto aplicando el 10% al costo base
let impuesto = costo_base * 0.10;

// Calcula el total sumando el costo base más el impuesto
let total = impuesto + costo_base;

// Imprime el encabezado de la factura
console.log(`--Factura--`);

// Imprime el detalle de la factura con todos los valores calculados
console.log(`Cantidad de kilowatts consumidos: ${kilowatts} \nCosto base sin impuesto: ${costo_base} \nMonto del impuesto(10%): ${impuesto} \nTotal a pagar: ${total}`);



