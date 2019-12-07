// MODELO
declare let CANTOPCIONES: number;
CANTOPCIONES = 5;
class Opcion {
    nombre: string;
    imagen: string;
    ganaA: string[];
    constructor(nombreN: string, imagenN: string, ganaA: string[]) {
        this.nombre = nombreN;
        this.imagen = imagenN;
        this.ganaA = ganaA;
    }
    verSiGana(userChoice: string): string {
        for (let i = 0; i < Math.floor(CANTOPCIONES / 2); i++) {
            if (this.ganaA[i] == userChoice) {
                return "botWins";
            }
        }
        return "userWins";
    }
}
function game_modelo(computerChoice: string, userChoice: string): string {
    if (computerChoice == userChoice) {
        console.log("Devuelve empate");
        return "draw";
    }
    else {
        let result = "botWins";
        arrayOpt.map(elem => {
            if (elem.nombre == computerChoice) {
                result = elem.verSiGana(userChoice);
            }
        });
        console.log("Gana: " + result);
        return result;
    }
}
