// Receber info de todos os jogadores TOP ordenados pelo maior LP
function getDataTop1() {
    var url = "/jogTOP1";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        processarTOP1(xhttp.responseText);
      }
    };    
    xhttp.send();
}

// Receber info de todos os jogadores JUNGLE ordenados pelo maior LP
function getDataJGL1() {
    var url = "/jogJGL1";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        processarJGL1(xhttp.responseText);
      }
    };    
    xhttp.send();
}

// Receber info de todos os jogadores MID ordenados pelo maior LP
function getDataMID1() {
    var url = "/jogMID1";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        processarMID1(xhttp.responseText);
      }
    };    
    xhttp.send();
}

// Receber info de todos os jogadores ADC ordenados pelo maior LP
function getDataADC1() {
    var url = "/jogADC1";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        processarADC1(xhttp.responseText);
      }
    };    
    xhttp.send();
}

// Receber info de todos os jogadores support ordenados pelo maior LP
function getDataSUP1() {
    var url = "/jogSUP1";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        processarSUP1(xhttp.responseText);
        console.log("entrou");
      }
    };    
    xhttp.send();
}

// Adicionar Champion a GOD tier
function postChampion() {
  var url = "/adicionarChampion" + '/' + document.getElementById("championName").value + '/' + document.getElementById("role").value;
  var xhttp = new XMLHttpRequest();
  xhttp.open("POST", url, true);
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp.responseText);
    }
  };    
  xhttp.send();
}


// Processar informação para mostrar na pagina home o jogador com mais LP do TOP
function processarTOP1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerTOP").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgTOP").setAttribute('src',parsed[0].img);
}

// Processar informação para mostrar na pagina home o jogador com mais LP da JUNGLE
function processarJGL1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerJGL").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgJGL").setAttribute('src',parsed[0].img);
}

// Processar informação para mostrar na pagina home o jogador com mais LP do MID
function processarMID1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerMID").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgMID").setAttribute('src',parsed[0].img);
}

// Processar informação para mostrar na pagina home o jogador com mais LP ADC
function processarADC1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerADC").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgADC").setAttribute('src',parsed[0].img);
}

// Processar informação para mostrar na pagina home o jogador com mais LP SUPPORT
function processarSUP1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerSUP").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgSUP").setAttribute('src',parsed[0].img);
}