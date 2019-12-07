//import { getRandomChoice } from "./getRandomChoice";
// A SACAR DE ESTE ARCHIVO
function getRandomChoice(): string {
    let choiceArray = ["Papel", "Piedra", "Tijera", "Spock", "Lagarto"];
    let computerChoice = Math.random();
    computerChoice = Math.floor((computerChoice * 5));
    return choiceArray[computerChoice];
}
