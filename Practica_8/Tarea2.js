// ============================================
// TAREA 2: Figuras geométricas
// ============================================
// ENUNCIADO:
// Cree funciones para calcular el área y el perímetro de: círculo,
// cuadrado, rectángulo y triángulo. Cada función debe recibir los
// parámetros necesarios y retornar el resultado. Cree un menú con
// Switch para que el usuario elija la figura y luego ingrese los datos
// necesarios. Muestre el área y el perímetro con 2 decimales.
// ============================================

import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ---------- CÍRCULO ----------
function areaCirculo(radio) {
    return Math.PI * radio * radio;
}
function perimetroCirculo(radio) {
    return 2 * Math.PI * radio;
}

// ---------- CUADRADO ----------
function areaCuadrado(lado) {
    return lado * lado;
}
function perimetroCuadrado(lado) {
    return 4 * lado;
}

// ---------- RECTÁNGULO ----------
function areaRectangulo(base, altura) {
    return base * altura;
}
function perimetroRectangulo(base, altura) {
    return 2 * (base + altura);
}

// ---------- TRIÁNGULO (equilátero) ----------
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function perimetroTriangulo(lado) {
    return 3 * lado;
}

// Mostramos el menú
console.log("=== FIGURAS GEOMÉTRICAS ===");
console.log("1) Círculo");
console.log("2) Cuadrado");
console.log("3) Rectángulo");
console.log("4) Triángulo");

// Pedimos la opción
rl.question("Elige una figura: ", function (opcion) {

    // Switch para decidir qué figura calcular
    switch (opcion) {

        case "1":
            // Círculo: pedimos el radio
            rl.question("Ingresa el radio: ", function (r) {
                let radio = parseFloat(r);
                let area = areaCirculo(radio);
                let perimetro = perimetroCirculo(radio);
                console.log("\nÁrea: " + area.toFixed(2));
                console.log("Perímetro: " + perimetro.toFixed(2));
                rl.close();
            });
            break;

        case "2":
            // Cuadrado: pedimos el lado
            rl.question("Ingresa el lado: ", function (l) {
                let lado = parseFloat(l);
                let area = areaCuadrado(lado);
                let perimetro = perimetroCuadrado(lado);
                console.log("\nÁrea: " + area.toFixed(2));
                console.log("Perímetro: " + perimetro.toFixed(2));
                rl.close();
            });
            break;

        case "3":
            // Rectángulo: pedimos base y altura
            rl.question("Ingresa la base: ", function (b) {
                rl.question("Ingresa la altura: ", function (h) {
                    let base = parseFloat(b);
                    let altura = parseFloat(h);
                    let area = areaRectangulo(base, altura);
                    let perimetro = perimetroRectangulo(base, altura);
                    console.log("\nÁrea: " + area.toFixed(2));
                    console.log("Perímetro: " + perimetro.toFixed(2));
                    rl.close();
                });
            });
            break;

        case "4":
            // Triángulo: pedimos base, altura y lado
            rl.question("Ingresa la base: ", function (b) {
                rl.question("Ingresa la altura: ", function (h) {
                    rl.question("Ingresa el lado: ", function (l) {
                        let base = parseFloat(b);
                        let altura = parseFloat(h);
                        let lado = parseFloat(l);
                        let area = areaTriangulo(base, altura);
                        let perimetro = perimetroTriangulo(lado);
                        console.log("\nÁrea: " + area.toFixed(2));
                        console.log("Perímetro: " + perimetro.toFixed(2));
                        rl.close();
                    });
                });
            });
            break;

        default:
            // Opción no válida
            console.log("Opción no válida.");
            rl.close();
            break;
    }
});