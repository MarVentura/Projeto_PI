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

function processarTOP1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerTOP").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgTOP").setAttribute('src',parsed[0].img);
}

function processarJGL1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerJGL").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgJGL").setAttribute('src',parsed[0].img);
}

function processarMID1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerMID").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgMID").setAttribute('src',parsed[0].img);
}

function processarADC1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerADC").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgADC").setAttribute('src',parsed[0].img);
}

function processarSUP1(resposta)
{
    var parsed = JSON.parse(resposta);
    document.getElementById("playerSUP").innerText = parsed[0].nome + " - " + parsed[0].LP;
    document.getElementById("imgSUP").setAttribute('src',parsed[0].img);
}