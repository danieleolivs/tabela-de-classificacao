

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
  }
  
  var jogadores = [];
  
  function exibeJogadores(jogadores) {
    var elemento = "";
    for (var i = 0; i < jogadores.length; i++) {
      elemento += " <tr><td>" + jogadores[i].nome + "</td>";
      elemento +="<td><img id='imagem' src="+jogadores[i].url+"</td>";
      elemento += "<td>" + jogadores[i].vitorias + "</td>";
      elemento += "<td>" + jogadores[i].empates + "</td>";
      elemento += "<td>" + jogadores[i].derrotas + "</td>";
      elemento += "<td>" + jogadores[i].pontos + "</td>";
      elemento +=
        "<td><button id ='jogador' elemento onClick='adicionarVitoria(" +
        i +
        ")'>Vitória</button></td>";
      elemento +=
        "<td><button id ='jogador' onClick='adicionarEmpate(" +
        jogadores.length +
        ")'>Empate</button></td>";
      elemento +=
        "<td><button id ='jogador' onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
      elemento += "</tr>";
    }
  
    var tabelaJogadores = document.getElementById("tabelaJogadores");
    tabelaJogadores.innerHTML = elemento;
  }
  
  exibeJogadores(jogadores);
  
  function adicionarVitoria(i) {
    var jogador = jogadores[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibeJogadores(jogadores);
  }
  
  function adicionarEmpate(i) {
    for (var j = 0; j < i; j++) {
      var jogador = jogadores[j];
      jogador.empates++;
      jogador.pontos = calculaPontos(jogador);
      exibeJogadores(jogadores);
    }
  }
  
  function adicionarDerrota(i) {
    var jogador = jogadores[i];
    jogador.derrotas++;
    exibeJogadores(jogadores);
  }
  
  function zerar() {
    for (var i = 0; i < jogadores.length; i++) {
      var jogador = jogadores[i];
      jogador.vitorias = 0;
      jogador.empates = 0;
      jogador.derrotas = 0;
      jogador.pontos = 0;
      exibeJogadores(jogadores);
    }
  }
  
  function AdicionaJogador() {
    var Jogador = window.prompt("Qual o seu nome?");
    var imagem = window.prompt("Adicione a URL de uma imagem:");
    var title = `${Jogador}`
    var descricao = `${imagem}`

    Jogador = {};
    Jogador.nome = title;
    Jogador.url = descricao
    Jogador.vitorias = 0;
    Jogador.empates = 0;
    Jogador.derrotas = 0;
    Jogador.pontos = 0;

    jogadores.push(Jogador);
    exibeJogadores(jogadores);
  }

  