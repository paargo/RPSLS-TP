CANTOPCIONES = 5;
var Opcion = /** @class */ (function () {
    function Opcion(nombreN, imagenN, ganaA) {
        this.nombre = nombreN;
        this.imagen = imagenN;
        this.ganaA = ganaA;
    }
    Opcion.prototype.verSiGana = function (userChoice) {
        for (var i = 0; i < Math.floor(CANTOPCIONES / 2); i++) {
            if (this.ganaA[i] == userChoice) {
                return "botWins";
            }
        }
        return "userWins";
    };
    return Opcion;
}());
function game_modelo(computerChoice, userChoice) {
    if (computerChoice == userChoice) {
        console.log("Devuelve empate");
        return "draw";
    }
    else {
        var result_1 = "botWins";
        arrayOpt.map(function (elem) {
            if (elem.nombre == computerChoice) {
                result_1 = elem.verSiGana(userChoice);
            }
        });
        console.log("Gana: " + result_1);
        return result_1;
    }
}
