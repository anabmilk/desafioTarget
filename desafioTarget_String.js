let string = prompt('Escreva uma mensagem para ser invertida:');

function inverso() {
    let newString = '';

    for (let i = string.length - 1; i >= 0; i--) {

        newString += string[i];
    }

return newString;
}

console.log(inverso());