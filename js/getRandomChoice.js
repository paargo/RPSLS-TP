//import { getRandomChoice } from "./getRandomChoice";
// A SACAR DE ESTE ARCHIVO
function getRandomChoice() {
    var choiceArray = ["Papel", "Piedra", "Tijera", "Spock", "Lagarto"];
    var computerChoice = Math.random();
    computerChoice = Math.floor((computerChoice * 5));
    return choiceArray[computerChoice];
}
