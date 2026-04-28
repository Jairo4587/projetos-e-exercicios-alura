alert("Bem vindo ao quiz da Copa do Mundo 2026.");
alert("São 4 perguntas e cada resposta vale 50 pontos. É necessário obter 100 pontos para vencer.");

let pontuacao = 0;

let respostaUm = prompt("Qual é a seleção que possui mais títulos?");

if (respostaUm.toLowerCase() == "brasil") { pontuacao += 50;
alert("Parabéns, você acertou!")
} else {
    alert("Você errou.");
}

let respostaDois = prompt("Qual é o jogador mais velho que irá disputar a competição?");

if (respostaDois.toLowerCase() == "cristiano ronaldo") { pontuacao += 50;
    alert("Parabéns, você acertou!");
} else {
    alert("Você errou.");
}

let respostaTres = prompt("Quantas seleções vão participar da Copa do Mundo 2026?");

if (respostaTres == "48") { pontuacao += 50;
    alert("Parabéns, você acertou!");
} else {
    alert("Você errou.")
}

let respostaQuatro = prompt("Qual país é um dos anfitriões da copa do mundo 2026?");

if (respostaQuatro.toLowerCase() == "estados unidos" || respostaQuatro.toLowerCase() == "méxico" || respostaQuatro.toLowerCase() == "canadá") { pontuacao += 50;
    alert("Parabéns, você acertou!"); 
} else {
    alert("Você errou.");
} 

if (pontuacao >= 100) { 
alert(`Parabéns, você venceu o jogo! Sua pontuação foi ${pontuacao} pontos.`);
} else {
    alert(`Tente novamente para ganhar. Você fez ${pontuacao} pontos e não atingiu a pontuação mínima.`);
}
