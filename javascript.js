window.onload = function() {

const tabuleiro = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
];
let ultimaJogada;

const botoes = document.querySelectorAll(
  '#jogar1, #jogar2, #jogar3, #jogar4, #jogar5, #jogar6, #jogar7, #jogar8, #jogar9'
);

const exibirTabuleiro = () => {
    let saida = tabuleiro.map(
    linha => linha.join('|')
    ).join('\n-+-+-\n');

    let vencedor = calcularVencedor();

    if (vencedor !== 'nenhum') {
        saida += '\nVencedor: ' + vencedor;
    }

    document.getElementById('tabuleiro').innerHTML = saida.replace(/ /g, '&nbsp;').replace(/\n/g, '<br />');
}

const limparTabuleiro = () => {
    tabuleiro[0] = [ ' ', ' ', ' ' ];
    tabuleiro[1] = [ ' ', ' ', ' ' ];
    tabuleiro[2] = [ ' ', ' ', ' ' ];
};

const marcar = (i, j, char) => {
    tabuleiro[i][j] = char;
    ultimaJogada = char;
    exibirTabuleiro();
};

const calcularVencedor = () => {
    // Linha cheia
    for (let i = 0; i <= 2; ++i) {
        if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== ' ') {
            botoes[0].disabled = true;
            botoes[1].disabled = true;
            botoes[2].disabled = true;
            botoes[3].disabled = true;
            botoes[4].disabled = true;
            botoes[5].disabled = true;
            botoes[6].disabled = true;
            botoes[7].disabled = true;
            botoes[8].disabled = true;
            return tabuleiro[i][0];
        }
    }

    // Coluna cheia
    for (let j = 0; j <= 2; ++j) {
        if (tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j] && tabuleiro[0][j] !== ' ') {
            botoes[0].disabled = true;
            botoes[1].disabled = true;
            botoes[2].disabled = true;
            botoes[3].disabled = true;
            botoes[4].disabled = true;
            botoes[5].disabled = true;
            botoes[6].disabled = true;
            botoes[7].disabled = true;
            botoes[8].disabled = true;
            return tabuleiro[0][j];
        }
    }

    // Diagonal principal cheia
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== ' ') {
        botoes[0].disabled = true;
        botoes[1].disabled = true;
        botoes[2].disabled = true;
        botoes[3].disabled = true;
        botoes[4].disabled = true;
        botoes[5].disabled = true;
        botoes[6].disabled = true;
        botoes[7].disabled = true;
        botoes[8].disabled = true;
        return tabuleiro[0][0];
    }

    // Diagonal inversa cheia
    if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== ' ') {
        botoes[0].disabled = true;
        botoes[1].disabled = true;
        botoes[2].disabled = true;
        botoes[3].disabled = true;
        botoes[4].disabled = true;
        botoes[5].disabled = true;
        botoes[6].disabled = true;
        botoes[7].disabled = true;
        botoes[8].disabled = true;
        return tabuleiro[0][2];
    }

    // Empate
    let preenchidos = 0;

    for (let i = 0; i <= 2; ++i) {
        for (let j = 0; j <= 2; ++j) {
            if (tabuleiro[i][j] !== ' ') {
                ++preenchidos;
            }
        }
    }

    if (preenchidos === 9) {
        return 'empate';
    }

    return 'nenhum';

};

let i, j;

botoes[0].addEventListener('click', function () {
    i = 0;
    j = 0;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[1].addEventListener('click', function () {
    i = 0;
    j = 1;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[2].addEventListener('click', function () {
    i = 0;
    j = 2;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[3].addEventListener('click', function () {
    i = 1;
    j = 0;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[4].addEventListener('click', function () {
    i = 1;
    j = 1;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[5].addEventListener('click', function () {
    i = 1;
    j = 2;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[6].addEventListener('click', function () {
    i = 2;
    j = 0;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[7].addEventListener('click', function () {
    i = 2;
    j = 1;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

botoes[8].addEventListener('click', function () {
    i = 2;
    j = 2;
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    calcularVencedor();
    this.disabled = true;
}, false);

exibirTabuleiro();

const nj = document.getElementById('nj');

nj.addEventListener('click', function (){
    limparTabuleiro();
    exibirTabuleiro();
    botoes[0].disabled = false;
    botoes[1].disabled = false;
    botoes[2].disabled = false;
    botoes[3].disabled = false;
    botoes[4].disabled = false;
    botoes[5].disabled = false;
    botoes[6].disabled = false;
    botoes[7].disabled = false;
    botoes[8].disabled = false;
},false);

}