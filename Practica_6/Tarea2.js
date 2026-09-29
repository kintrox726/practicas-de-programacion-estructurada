import readline from "node:readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Ingrese un numero: ", (respuesta)=>{
    let n = parseInt(respuesta)

    //  DETERMINAR SI N ES PRIMO ---
    let divisores = 0; // Cambié el nombre a 'divisores' para no confundir con la lista

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            divisores = divisores + 1
        }
    }

    // Evaluamos tu contador: si tiene exactamente 2 divisores, es primo
    if (divisores === 2) {
        console.log(`El número ${n} SÍ es primo.`);
    } else {
        console.log(`El número ${n} NO es primo.`);
    }


    // MOSTRAR TODOS LOS PRIMOS DESDE 1 HASTA N ---
    let listaPrimos = "";

    // Un bucle "for" para revisar cada número individualmente desde el 2 hasta N
    for (let numeroActual = 2; numeroActual <= n; numeroActual++) {
        let divisoresDelActual = 0;

        // Contamos los divisores de 'numeroActual' usando tu misma lógica
        for (let j = 1; j <= numeroActual; j++) {
            if (numeroActual % j === 0) {
                divisoresDelActual = divisoresDelActual + 1;
            }
        }

        // Si este número actual resultó ser primo, lo guardamos en la lista
        if (divisoresDelActual === 2) {
            listaPrimos += numeroActual + " ";
        }
    }

    console.log(`Números primos desde 1 hasta ${n}: ${listaPrimos || "Ninguno"}`);

    rl.close();
})
