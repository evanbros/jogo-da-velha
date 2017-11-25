// Estado da Aplicação
// Aqui vão todas as variáveis que serão modificadas durante o andamento do jogo

const tabuleiro = [
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
  [ ' ', ' ', ' ' ],
];
let ultimaJogada;

// Lógica da Aplicação
// Aqui vão todas as rotinas que modificam o estado da aplicação SEM efeitos colaterais (mudanças visuais, por exemplo)

const limparTabuleiro = () => {
  tabuleiro[0] = [ ' ', ' ', ' ' ];
  tabuleiro[1] = [ ' ', ' ', ' ' ];
  tabuleiro[2] = [ ' ', ' ', ' ' ];

  const elemento = [];
  elemento[1] = document.getElementById('marcacao-0-0');
  elemento[2] = document.getElementById('marcacao-0-1');
  elemento[3] = document.getElementById('marcacao-0-2');
  elemento[4] = document.getElementById('marcacao-1-0');
  elemento[5] = document.getElementById('marcacao-1-1');
  elemento[6] = document.getElementById('marcacao-1-2');
  elemento[7] = document.getElementById('marcacao-2-0');
  elemento[8] = document.getElementById('marcacao-2-1');
  elemento[9] = document.getElementById('marcacao-2-2');
  
  for (var i = 1; i < 10; i++) {
    if (elemento[i]) {
      document.getElementById('tabuleiro').removeChild(elemento[i]);
    }
  }
};

const reiniciarTela = () => {
  const telaVencedor = document.getElementById("tela-vencedor");

  document.body.classList.remove("empate");
  document.body.classList.remove("vencedor");
  telaVencedor.setAttribute("style", "height:0px");
  
  for (var i = 1; i < 10 ; i++) {
    document.getElementById(elemento = "t"+i).setAttribute('style', 'display:inline');  
  }
}

const marcar = (i, j, jogada) => {
  tabuleiro[i][j] = jogada;
  ultimaJogada = jogada;
};

const calcularVencedor = () => {
  // Linha cheia
  for (let i = 0; i <= 2; ++i) {
    if (tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2] && tabuleiro[i][0] !== ' ') {
      return tabuleiro[i][0];
    }
  }

  // Coluna cheia
  for (let j = 0; j <= 2; ++j) {
    if (tabuleiro[0][j] === tabuleiro[1][j] && tabuleiro[1][j] === tabuleiro[2][j] && tabuleiro[0][j] !== ' ') {
      return tabuleiro[0][j];
    }
  }

  // Diagonal principal cheia
  if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && tabuleiro[0][0] !== ' ') {
    return tabuleiro[0][0];
  }

  // Diagonal inversa cheia
  if (tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0] && tabuleiro[0][2] !== ' ') {
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

// Apresentação da Aplicação
// Aqui vai tudo responsável por exibir a aplicação para o usuário, bem como reagir às ações dele

window.onload = function () {
  // Campos para marcação
  const criarHandlerParaMarcar = (i, j) => function () { 
    marcar(i, j, ultimaJogada === 'x' ? 'o' : 'x');
    this.setAttribute('style', 'display:none');
    exibirTabuleiro();
  };

  const selecionar = [];
  for (var i = 1; i < 10; i++){
    selecionar[i] = document.querySelector(seletor ="#t"+[i]);
  }
    selecionar[1].addEventListener('click', criarHandlerParaMarcar(0, 0), false);
    selecionar[2].addEventListener('click', criarHandlerParaMarcar(0, 1), false);
    selecionar[3].addEventListener('click', criarHandlerParaMarcar(0, 2), false);
    selecionar[4].addEventListener('click', criarHandlerParaMarcar(1, 0), false);
    selecionar[5].addEventListener('click', criarHandlerParaMarcar(1, 1), false);
    selecionar[6].addEventListener('click', criarHandlerParaMarcar(1, 2), false);
    selecionar[7].addEventListener('click', criarHandlerParaMarcar(2, 0), false);
    selecionar[8].addEventListener('click', criarHandlerParaMarcar(2, 1), false);
    selecionar[9].addEventListener('click', criarHandlerParaMarcar(2, 2), false);
  
  // Botão de novo jogo
  const botaoNovoJogo = document.getElementById('novo-jogo');

  botaoNovoJogo.addEventListener('click', function () {
    reiniciarTela();
    limparTabuleiro();
    exibirTabuleiro();
  }, false);

  // Tela do tabuleiro
  const telaTabuleiro = document.getElementById('tabuleiro');

  const exibirTabuleiro = () => {
    for (let i = 0; i < tabuleiro.length; i++) {
      for (let j = 0; j < tabuleiro[i].length; j++) {
        const x = [16, 49, 82][j];
        const y = [16, 49, 82][i];

        const marcacaoAtual = document.querySelector("#marcacao-" + i + "-" + j);
        
        if (tabuleiro[i][j] === "x" && !marcacaoAtual) {
          const marcacao = document.createElementNS("http://www.w3.org/2000/svg","use");
          marcacao.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#x");
          marcacao.setAttribute("x", x);
          marcacao.setAttribute("y", y);
          marcacao.setAttribute("id", "marcacao-" + i + "-" + j);
           
          telaTabuleiro.appendChild(marcacao);
        }
        else if (tabuleiro[i][j] === "o" && !marcacaoAtual) {
          const marcacao = document.createElementNS("http://www.w3.org/2000/svg","use");
          marcacao.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#o");
          marcacao.setAttribute("x", x);
          marcacao.setAttribute("y", y);
          marcacao.setAttribute("id", "marcacao-" + i + "-" + j);

          telaTabuleiro.appendChild(marcacao);
        }
      }
    }

    // Verifica vencedor ou empate
    const vencedor = calcularVencedor();

    if (vencedor !== 'nenhum') {
      if (vencedor === 'empate') {
        document.body.classList.add("empate");
        document.getElementById("tela-vencedor").setAttribute("style", "height:400px");
      }
      else{
        if (vencedor === 'x') {
          document.body.classList.add("vencedor");
          document.getElementById("tela-vencedor").setAttribute("style", "height:400px");
        }
        else{
          document.body.classList.add("vencedor");
          document.getElementById("tela-vencedor").setAttribute("style", "height:400px");
        }
      }
    }
  }

  exibirTabuleiro();
}
