// ============================================
// TAREA 3: Inventario de productos
// ============================================
// ENUNCIADO:
// Cree un arreglo de objetos que represente un inventario con al menos
// 4 productos. Cada producto debe tener: nombre, precio y cantidad.
// Usando FOR...OF, recorra el arreglo y muestre cada producto con su
// valor total (precio × cantidad). Además, usando FOR...IN, recorra
// un objeto que represente el resumen del inventario (total de productos,
// valor total del inventario) y muestre sus propiedades.
// ============================================

// Creamos un arreglo con 4 productos
// Cada producto es un objeto con nombre, precio y cantidad
const inventario = [
    { nombre: "Laptop",  precio: 800, cantidad: 3 },
    { nombre: "Mouse",   precio: 25,  cantidad: 10 },
    { nombre: "Teclado", precio: 45,  cantidad: 7 },
    { nombre: "Monitor", precio: 200, cantidad: 5 }
];

// Variables para guardar el resumen
let totalProductos = 0;
let valorTotal = 0;

console.log("=== INVENTARIO DE PRODUCTOS ===\n");

// FOR...OF: recorre los VALORES del arreglo (cada producto)
for (const producto of inventario) {

    // Calculamos el valor total de este producto
    let valorProducto = producto.precio * producto.cantidad;

    // Mostramos la información
    console.log("Producto: " + producto.nombre);
    console.log("  Precio: $" + producto.precio);
    console.log("  Cantidad: " + producto.cantidad);
    console.log("  Valor total: $" + valorProducto);
    console.log(""); // Línea vacía para separar

    // Vamos acumulando para el resumen
    totalProductos = totalProductos + producto.cantidad;
    valorTotal = valorTotal + valorProducto;
}

// Creamos un objeto con el resumen del inventario
const resumen = {
    totalProductos: totalProductos,
    valorTotalInventario: valorTotal
};

console.log("=== RESUMEN DEL INVENTARIO ===");

// FOR...IN: recorre las PROPIEDADES (nombres) del objeto
for (const propiedad in resumen) {
    console.log(propiedad + ": " + resumen[propiedad]);
}