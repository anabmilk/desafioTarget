function fibonacci(n) {
    let sequencia = [0, 1];

    for (let i = 2; i < 100; i ++) {
        sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
    }

    for (let j = 0; j < sequencia.length; j++) {
        if (n === sequencia[j]) {
            return j;
        }
    } return false;
}

let n = parseInt(prompt("Digite um número: "));

if (fibonacci(n) !== false) {
    console.log(`O número ${n} está na sequência de Fibonacci, na posição [${fibonacci(n)}]`);
} else {
    console.log(`O número ${n} não faz parte da sequência de Fibonacci`);
}