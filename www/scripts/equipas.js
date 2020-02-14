function getData() {
    var url = "/equipas";
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", url, true);
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

    for(var i = 0; i < parsed.length; i++) {   

        var     titulo = "titulo";
        var     top = "top";
        var     mid = "mid";
        var    jungle = "jungle";
        var   adc = "adc";
        var   support = "support"; 
        var imgEquipa = "imgEquipa";
        var coach = "coach";

        titulo = titulo + i;
        top = top + i;
        mid = mid + i;
        jungle = jungle + i;
        adc = adc + i;
        support = support + i;
        imgEquipa = imgEquipa + i;
        coach = coach + i;

        document.getElementById(titulo).innerText = parsed[i].nome;
        document.getElementById(top).innerText = document.getElementById(top).innerText + ' '  + parsed[i].jogadores[0];
        document.getElementById(mid).innerText = document.getElementById(mid).innerText + ' '  + parsed[i].jogadores[1];
        document.getElementById(jungle).innerText = document.getElementById(jungle).innerText + ' ' + parsed[i].jogadores[2];
        document.getElementById(adc).innerText = document.getElementById(adc).innerText + ' '+ parsed[i].jogadores[3];
        document.getElementById(support).innerText = document.getElementById(support).innerText + ' ' + parsed[i].jogadores[4];
        document.getElementById(coach).innerText = document.getElementById(coach).innerText + ' ' + parsed[i].Coach;
        document.getElementById(imgEquipa).setAttribute('src',parsed[i].img);
        console.log(i);


    }
}