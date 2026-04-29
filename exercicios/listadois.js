/* LISTA DE EXERCÍCIOS 2 DO CURSO LÓGICA DE PROGRMACAÇÃO DA ALURA.
"CONDICIONAIS E CONCATENAÇÃO" */

//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let resposta = prompt("Qual é o dia da semana?");
if (resposta == "Sábado") {
    alert("Bom fim de semana!");
} else if (resposta == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroEscolhido = prompt("Digite um número");

if (numeroEscolhido > 0  ) {
    alert("O número digitado é positivo!");
} else if (numeroEscolhido < 0 ) {
    alert("O número escolhido é negativo!");
} else {
    alert("O número escolhido é zero.");
}

//3. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoBancario = 15000;
alert(`Seu saldo bancário é de R$ ${saldoBancario} reais.`);

//4. Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeUsuario = prompt("Olá, qual é o seu nome?");
alert(`Boas vindas, ${nomeUsuario} ao nosso site.`);



