// CONTROLADOR
var text = document.getElementsByTagName("P");
var mensajeResultado = text[0];
var userLives = 0;
var botLives = 0;
var userWins;
var botWins;
var draw;
var VIDASTOTALES = 3;
var piedra = new Opcion("Piedra", "images/rock.png", ['Tijera', 'Lagarto']);
var papel = new Opcion("Papel", "images/paper.png", ['Piedra', 'Spock']);
var tijera = new Opcion("Tijera", "images/scissor.png", ['Papel', 'Lagarto']);
var lagarto = new Opcion("Lagarto", "images/lizard.png", ['Papel', 'Spock']);
var spock = new Opcion("Spock", "images/spock.png", ['Piedra', 'Tijera']);
var arrayOpt = [piedra, papel, tijera, lagarto, spock];
function game(choice) {
    console.log("empieza el juego");
    var result;
    var userChoice = choice.id;
    var computerChoice = getRandomChoice();
    var resultado = game_modelo(computerChoice, userChoice);
    if (resultado == "userWins") {
        mensajeResultado.style.color = "green";
        choice.style.background = "green";
        mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> TU GANAS !!</span>';
    }
    else if (resultado == "botWins") {
        mensajeResultado.style.color = "red";
        choice.style.background = "red";
        mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> TU PIERDES !!</span>';
    }
    else if (resultado == "draw") {
        mensajeResultado.style.color = "white";
        choice.style.background = "white";
        mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> EMPATE</span>';
        ;
    }
    setTimeout(function () { choice.style.background = ""; }, 1000);
    score(resultado);
}
;
function score(resultado) {
    var life = document.getElementsByClassName("icon-heart");
    if (resultado == "userWins") {
        life[(botLives++) + VIDASTOTALES].style.color = "black";
    }
    else if (resultado == "botWins") {
        life[(userLives++)].style.color = "black";
    }
    if (botLives == VIDASTOTALES || userLives == VIDASTOTALES) {
        if (userLives == VIDASTOTALES) {
            mensajeResultado.innerHTML += "<span>No eres rival digno, yo gano!</span>";
        }
        else {
            mensajeResultado.innerHTML += "<span>Suerte de principiante!</span>";
        }
        for (var i = life.length - 1; i >= 0; i--) {
            life[i].style.color = "rgb(255,0,0)";
            botLives = 0;
            userLives = 0;
        }
    }
}
;
