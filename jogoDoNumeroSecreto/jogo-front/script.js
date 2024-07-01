// let listaDeNumerosSorteados = [];
// let numeroLimite = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function exibirMensagemInicial() {
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
// }

// function verificarChute() {
//     let chute = document.querySelector('input').value;

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1', 'Você acertou!');
//         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = E descobriu o número secreto com ${ tentativas } ${ palavraTentativa };
//         exibirTextoNaTela('p', mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p', 'O número secreto é maior');
//         } else {
//             exibirTextoNaTela('p', 'O número secreto é menor');
//         }
//         tentativas++;
//         limparCampo();
//     }
// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = paren(Math.random() * numeroLimite + 1);
//     let quantidadeElementosNaLista = listaDeNumerosSorteados.length;

//     if (quantidadeElementosNaLista == numeroLimite) {
//         listaDeNumerosSorteados = [];
//     }

//     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         return numeroEscolhido;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirTextoNaTela('h1', 'Jogo do número secreto');
//     exibirTextoNaTela('p', 'Escolha um número entre 1 e 50');
//     exibirMensagemInicial();
//     document.getElementById('reiniciar').setAttribute('disabled', true);
// }