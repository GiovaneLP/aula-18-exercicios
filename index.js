/*Exercício de interpretação 1

a) O que o código abaixo está fazendo?
b) Qual o resultado impresso no console?

let valor = 0

for (let i = 0; i < 5; i++) {
	valor += i
}

console.log(valor)

a) O código vai somar 0 + 0, 0 + 1, 0 + 2, 0 + 3, 0 + 4, vai somar com 0 mais menores que 5.

b) 10.

*/

/*Exercício de interpretação 2

Leia o código abaixo

const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}

a) O que vai ser impresso no console?

b) Se eu quisesse acessar o índice de cada elemento dessa lista, a sintaxe "for...of..." é suficiente? Se sim, o que poderia ser usado para fazer isso?

a) 19
   21
   23
   25
   27
   30

b) let lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];

for (let numero of lista) {
    if (numero > 18) {
    let indice = lista.indexOf(numero);

    console.log('Elemento ' + numero + ' está no índice ', + indice);
  }
}

*/

/*Exercício de interpretação 3

a) Qual seria o resultado impresso no console, se o usuário digitasse o número "4"?

let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}

a)  *
    **
    ***
    ****

*/

/*Exercício de escrita 1

Pergunte ao usuário quantos bichos de estimação ele tem e guarde esse dado em uma variável.

Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!".

Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array.

Dica: coloque um "prompt" dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes.

Por fim, imprima no console o "array" completo, com os nomes dos bichos.

let quantidadePets = Number(prompt("Quantos bichos de estimação você tem?")); 
if (quantidadePets === 0) { 
    console.log("Que pena! Você pode adotar um pet!"); 
} 
else if (quantidadePets > 0) { 
            const nomesDosPets = []; 
    for (let i = 0; i < quantidadePets; i++) { 
        let nome = prompt('Digite o nome do seu pet' + (i + 1) + ':'); 
        nomesDosPets.push(nome); 
    } 
    console.log("Nomes dos seus bichos de estimação:"); 
    console.log(nomesDosPets); 
} 
else { console.log("Quantidade inválida de bichos de estimação."); 
}

*/

/*Exercício de escrita 2

Considere que você tenha acesso a um "array" que é composto somente de números. Crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

1) Escreva uma função que imprime cada valor do "array" em uma linha.

2) Escreva uma função que imprime cada um dos valores do "array" divididos por 10.

3) Escreva uma função que cria um novo array contendo somente os números pares do "array original" e, depois, imprima esse novo array.

4) Escreva uma função que cria um novo array contendo strings no seguinte formato: "O elemento do índice 'i' é: 'numero'". Depois, imprima esse novo array.

5) Escreva uma função que imprime no console o maior e o menor números contidos no "array original".

const arrayOriginal = [ 80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55 ]


function imprimirLista (itens) {}

function imprimirValoresDivididos (itens) {}

function filtrarNumerosPares (numeros) {}

function identificarElementos (itens) {}

function imprimirMaiorMenor (itens) {}

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

function imprimirLista(itens) {
    for (let item of itens) {
        console.log(item);
    }
}

function imprimirValoresDivididos(itens) {
    for (let item of itens) {
        console.log(item / 10);
    }
}

function filtrarNumerosPares(numeros) {
    let numerosPares = numeros.filter((numero) => numero % 2 === 0);
    return numerosPares;
}

function identificarElementos(itens) {
    let novoArray = itens.map((item, index) => 'O elemento do índice ' + (index) + ' é: ' +(item));
    return novoArray;
}

function imprimirMaiorMenor(itens) {
    let maior = Math.max(...itens);
    let menor = Math.min(...itens);
    console.log('Maior número: ' + (maior));
    console.log('Menor número: ' + (menor));
}

imprimirLista(arrayOriginal)
imprimirValoresDivididos(arrayOriginal)
const numerosPares = filtrarNumerosPares(arrayOriginal)
console.log(numerosPares)
const elementosIdentificados = identificarElementos(arrayOriginal)
console.log(elementosIdentificados)
imprimirMaiorMenor(arrayOriginal)

*/