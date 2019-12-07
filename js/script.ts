// CONTROLADOR
let text: HTMLCollectionOf<Element> = document.getElementsByTagName("P");
let mensajeResultado: HTMLElement = text[0] as HTMLElement

let userLives = 0;
let botLives = 0;
let userWins: string;
let botWins: string;
let draw: string;

let VIDASTOTALES: number = 3;

const piedra = new Opcion("Piedra", "images/rock.png", ['Tijera', 'Lagarto']);
const papel = new Opcion("Papel", "images/paper.png", ['Piedra', 'Spock']);
const tijera = new Opcion("Tijera", "images/scissor.png", ['Papel', 'Lagarto']);
const lagarto = new Opcion("Lagarto", "images/lizard.png", ['Papel', 'Spock']);
const spock = new Opcion("Spock", "images/spock.png", ['Piedra', 'Tijera']);

let arrayOpt: Opcion[] = [piedra, papel, tijera, lagarto, spock];


function game(choice: { id: string; style: { background: string; }; }) {
  console.log("empieza el juego");
  let result: string;
  let userChoice = choice.id;
  let computerChoice: string = getRandomChoice();

  let resultado: string = game_modelo(computerChoice, userChoice);


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
    mensajeResultado.innerHTML = 'Bot: ' + computerChoice + '<span> EMPATE</span>';;
  }
  setTimeout(function () { choice.style.background = ""; }, 1000);

  score(resultado);
};


function score(resultado: string) {
  let life: HTMLCollectionOf<Element> = document.getElementsByClassName("icon-heart");
  if (resultado == "userWins") {
    (<HTMLElement>life[(botLives++) + VIDASTOTALES]).style.color = "black";
  }
  else if (resultado == "botWins") {
    (<HTMLElement>life[(userLives++)]).style.color = "black";
  }
  if (botLives == VIDASTOTALES || userLives == VIDASTOTALES) {
    if (userLives == VIDASTOTALES) {
      mensajeResultado.innerHTML += "<span>No eres rival digno, yo gano!</span>";
    }
    else {
      mensajeResultado.innerHTML += "<span>Suerte de principiante!</span>";
    }
    for (var i = life.length - 1; i >= 0; i--) {
      (<HTMLElement>life[i]).style.color = "rgb(255,0,0)";
      botLives = 0
      userLives = 0
    }
  }
};

