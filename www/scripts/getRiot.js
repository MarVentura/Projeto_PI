function getData() {
    var url = "/teste" + '/' + document.getElementById("nickname").value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", url, true);
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        processarDados(xhttp.responseText);
      }
    };    
    xhttp.send();
}

function processarDados(resposta)
{
    var parsed = JSON.parse(resposta);
    var body = JSON.parse(parsed.body); 
    console.log(body);  
    console.log(body.profileIconId);
    var imgsrc = 'https://opgg-static.akamaized.net/images/profile_icons/profileIcon'+ body.profileIconId +'.jpg';
    document.getElementById("nome").innerText = body.name;
    document.getElementById("lvl").innerText = body.summonerLevel;
    document.getElementById("iconLOL").setAttribute('src',imgsrc);
}