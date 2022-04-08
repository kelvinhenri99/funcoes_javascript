// Armazenando uma função em uma variável
const imprimirSoma = function (a, b) {
    console.log(a + b);
}
    imprimirSoma(5, 5);

// Armazenando uma função arrow em uma variável
const soma = (a ,b) => {
    return a + b;
}
    console.log(soma(5,5));

// Retorno implícito
const subtracao = (a, b) => a - b
    console.log(subtracao(5,5));

// Ainda mais reduzido
const divisao = (a) => console.log(a)
    divisao(5 / 5)

