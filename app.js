alert('boas vindas ao jogo do numerosecreto');
let numeroMaximo = 1000;

//cria numeros aleatorios
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);

let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`escolha um numero entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`o numero secreto é menor que o ${chute}`);
        } else(chute < numeroSecreto)
            alert(`o numero secreto é maior que o ${chute}`);
    }
    tentativas++;

}
//operador ternario
let palavraTentativas = tentativas > 1 ? "tentativas" : "tentativa";
alert(`vc descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}`);


