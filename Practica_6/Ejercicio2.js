import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("ingrese un numero: ",(repuesta)=>{
    let n = parseInt(repuesta);

    let pares = 0;
    let impares = 0;

    for (let i=1; i<=n; i++) {

        if (i % 2 === 0) {
            pares = pares + 1
        }else{
            impares = impares + 1
        }
    }
    
    console.log('\n=== RESULTADO ===');
    console.log('Rango del 1 al ' + n);
    console.log('Suma de números pares: ' + pares);
    console.log('Suma de números impares: ' + impares);
    
    rl.close();
})