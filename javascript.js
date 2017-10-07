const tabuleiro = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
];

var jogar1 = document.getElementById('jogar1');
var jogar2 = document.getElementById('jogar2');
var jogar3 = document.getElementById('jogar3');
var jogar4 = document.getElementById('jogar4');
var jogar5 = document.getElementById('jogar5');
var jogar6 = document.getElementById('jogar6');
var jogar7 = document.getElementById('jogar7');
var jogar8 = document.getElementById('jogar8');
var jogar9 = document.getElementById('jogar9');

let ultimaJogada;

const exibirTabuleiro = () => {
  let saida = tabuleiro.map(
    linha => linha.join('|')
  ).join('\n-+-+-\n');
  
  let vencedor = calcularVencedor();
  
  if (vencedor !== 'nenhum') {
    saida += '\nVencedor: ' + vencedor;
  }
  
  document.getElementById('tabuleiro').innerHTML = saida
    .replace(/ /g, '&nbsp;')
    .replace(/\n/g, '<br />');
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
      jogar1.disabled = true;
      jogar2.disabled = true;
      jogar3.disabled = true;
      jogar4.disabled = true;
      jogar5.disabled = true;
      jogar6.disabled = true;
      jogar7.disabled = true;
      jogar8.disabled = true;
      jogar9.disabled = true;
      return tabuleiro[i][0];
    }
  }
  
  // Coluna cheia
  for (let j = 0; j <= 2; ++j) {
    if (tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j] && tabuleiro[0][j] !== ' ') {
      jogar1.disabled = true;
      jogar2.disabled = true;
      jogar3.disabled = true;
      jogar4.disabled = true;
      jogar5.disabled = true;
      jogar6.disabled = true;
      jogar7.disabled = true;
      jogar8.disabled = true;
      jogar9.disabled = true;
      return tabuleiro[0][j];
    }
  }
  
  // Diagonal principal cheia
  if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== ' ') {
      jogar1.disabled = true;
      jogar2.disabled = true;
      jogar3.disabled = true;
      jogar4.disabled = true;
      jogar5.disabled = true;
      jogar6.disabled = true;
      jogar7.disabled = true;
      jogar8.disabled = true;
      jogar9.disabled = true;
      return tabuleiro[0][0];
  }
  
  // Diagonal inversa cheia
  if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== ' ') {
      jogar1.disabled = true;
      jogar2.disabled = true;
      jogar3.disabled = true;
      jogar4.disabled = true;
      jogar5.disabled = true;
      jogar6.disabled = true;
      jogar7.disabled = true;
      jogar8.disabled = true;
      jogar9.disabled = true;
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
    
jogar1.addEventListener('click', function () {
  i = 0;
  j = 0;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar2.addEventListener('click', function () {
  i = 0;
  j = 1;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar3.addEventListener('click', function () {
  i = 0;
  j = 2;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar4.addEventListener('click', function () {
  i = 1;
  j = 0;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar5.addEventListener('click', function () {
  i = 1;
  j = 1;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar6.addEventListener('click', function () {
  i = 1;
  j = 2;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar7.addEventListener('click', function () {
  i = 2;
  j = 0;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar8.addEventListener('click', function () {
  i = 2;
  j = 1;
  marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
  calcularVencedor();
  this.disabled = true;
}, false);
jogar9.addEventListener('click', function () {
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
  jogar1.disabled = false;
  jogar2.disabled = false;
  jogar3.disabled = false;
  jogar4.disabled = false;
  jogar5.disabled = false;
  jogar6.disabled = false;
  jogar7.disabled = false;
  jogar8.disabled = false;
  jogar9.disabled = false;
},false);