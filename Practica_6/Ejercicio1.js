import readline from "node:readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese un numero: ",(respuesta)=>{
    const numero = parseInt(respuesta);

    for(let i=1; i<=10; i++){
        let total = numero * i;
        console.log(`${numero} x ${i} = ${total}`)
    }

    rl.close();
})