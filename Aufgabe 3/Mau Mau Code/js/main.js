/* <!--Aufgabe 3: /*
Aufgabe: Aufgabe Nummer 3 - Events Interaktiv: Mau Mau Name: Lisa Sanchez y Bittner
Matrikel: 260502 - Datum: 14.04.2019
Der Code wurde in Zusammenarbeit mitKathrin Wurz und Carlotta Reinders erarbeitet.
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
/* Interface für Spielkarten*/
var a2;
(function (a2) {
    /* Interface für Spielkarten*/
    let herz7 = {
        zahl: "7",
        symbol: "♥",
    };
    let herz8 = {
        zahl: "8",
        symbol: "♥",
    };
    let herz9 = {
        zahl: "9",
        symbol: "♥",
    };
    let herz10 = {
        zahl: "10",
        symbol: "♥",
    };
    let herzBube = {
        zahl: "bube",
        symbol: "♥",
    };
    let herzDame = {
        zahl: "dame",
        symbol: "♥",
    };
    let herzKoenig = {
        zahl: "koenig",
        symbol: "♥",
    };
    let herzAss = {
        zahl: "ass",
        symbol: "♥",
    };
    let pik7 = {
        zahl: "7",
        symbol: "♠",
    };
    let pik8 = {
        zahl: "8",
        symbol: "♠",
    };
    let pik9 = {
        zahl: "9",
        symbol: "♠",
    };
    let pik10 = {
        zahl: "10",
        symbol: "♠",
    };
    let pikBube = {
        zahl: "bube",
        symbol: "♠",
    };
    let pikDame = {
        zahl: "dame",
        symbol: "♠",
    };
    let pikKoenig = {
        zahl: "koenig",
        symbol: "♠",
    };
    let pikAss = {
        zahl: "ass",
        symbol: "♠",
    };
    let kreuz7 = {
        zahl: "7",
        symbol: "♣",
    };
    let kreuz8 = {
        zahl: "8",
        symbol: "♣",
    };
    let kreuz9 = {
        zahl: "9",
        symbol: "♣",
    };
    let kreuz10 = {
        zahl: "10",
        symbol: "♣",
    };
    let kreuzBube = {
        zahl: "bube",
        symbol: "♣",
    };
    let kreuzDame = {
        zahl: "dame",
        symbol: "♣",
    };
    let kreuzKoenig = {
        zahl: "koenig",
        symbol: "♣",
    };
    let kreuzAss = {
        zahl: "ass",
        symbol: "♣",
    };
    let karo7 = {
        zahl: "7",
        symbol: "♦",
    };
    let karo8 = {
        zahl: "8",
        symbol: "♦",
    };
    let karo9 = {
        zahl: "9",
        symbol: "♦",
    };
    let karo10 = {
        zahl: "10",
        symbol: "♦",
    };
    let karoBube = {
        zahl: "bube",
        symbol: "♦",
    };
    let karoDame = {
        zahl: "dame",
        symbol: "♦",
    };
    let karoKoenig = {
        zahl: "koenig",
        symbol: "♦",
    };
    let karoAss = {
        zahl: "ass",
        symbol: "♦",
    };
    /*Array Karten*/
    let alleSpielkarten = [herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss, karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss];
    let Handkarten = [];
    let ersteKarte;
    /*Abfrage für Anzahl der Handkarten*/
    function spielAnfang() {
        let HandkartenAnzahl = 0;
        do {
            HandkartenAnzahl = parseInt(prompt("Mit wievielen Karten möchtest du starten? Gib eine Zahl zwischen 3 und 8 ein."));
        } while (isNaN(HandkartenAnzahl) || HandkartenAnzahl > 8 || HandkartenAnzahl < 3);
        console.log("Handkarten: " + HandkartenAnzahl);
        for (let i = 0; i < HandkartenAnzahl; i++) {
            anzeigeKarten();
        }
        console.log(Handkarten);
        nachziehstapelErzeugen();
        auflegestapelErzeugen();
        handkartenErzeugen();
    }
    function anzeigeKarten() {
        let n = Math.floor(Math.random() * (alleSpielkarten.length)); //Zufällige Karte zwischen 0 und Länge des Arrays wird erzeugt/generiert
        Handkarten.push(alleSpielkarten[n]); //Karte wird dem Deck hinzugefügt
        alleSpielkarten.splice(n, 1);
    }
    function nachziehstapelErzeugen() {
        document.getElementById("nachziehStapel").innerHTML = `<div class="CardBorder">
    <img src="img/Kartenrücken.jpeg" class="kartenrücken">
    </div>`;
    }
    function auflegestapelErzeugen() {
        let n = Math.floor(Math.random() * (alleSpielkarten.length)); //Zufällige Karte zwischen 0 und Länge des Arrays wird erzeugt/generiert
        ersteKarte = alleSpielkarten[n];
        alleSpielkarten.splice(n, 1); // Stelle, wieviel soll entfernt werden, was wird hinzugefügt, n - aktuelle karte
        let write = "";
        write += `<div class="CardBorder">`;
        switch (ersteKarte.symbol) {
            case "♥":
                write += "<div class='rot' class='stylingSymbol'>♥";
                break;
            case "♦":
                write += "<div class='rot' class='stylingSymbol'>♦";
                break;
            case "♣":
                write += "<div class='schwarz' class='stylingSymbol'>♣";
                break;
            case "♠":
                write += "<div class='schwarz' class='stylingSymbol'>♠";
                break;
            default:
                console.log("Symbol konnte nicht geladen werden");
        }
        switch (ersteKarte.zahl) {
            case "ass":
                write += `A</div>`;
                break;
            case "koenig":
                write += `K</div>`;
                break;
            case "dame":
                write += `D</div>`;
                break;
            case "bube":
                write += `B</div>`;
                break;
            case "10":
                write += `10</div>`;
                break;
            case "9":
                write += `9</div>`;
                break;
            case "8":
                write += `8</div>`;
                break;
            case "7":
                write += `7</div>`;
                break;
            default:
                console.log("ERROR while loading Value");
        }
        write += `</div>`;
        document.getElementById("auflegeStapel").innerHTML = `${write}`;
    }
    function handkartenErzeugen() {
        document.getElementById("Handkarten").innerHTML = "";
        for (var i = 0; i < Handkarten.length; i++) {
            let write = "";
            write += `<div class="CardBorder">`;
            switch (Handkarten[i].symbol) {
                case "♥":
                    write += "<div class='rot' class='stylingSymbol'>♥";
                    break;
                case "♦":
                    write += "<div class='rot' class='stylingSymbol'>♦";
                    break;
                case "♣":
                    write += "<div class='schwarz' class='stylingSymbol'>♣";
                    break;
                case "♠":
                    write += "<div class='schwarz' class='stylingSymbol'>♠";
                    break;
                default:
                    console.log("Symbol konnte nicht geladen werden");
            }
            switch (Handkarten[i].zahl) {
                case "7":
                    write += `7</div>`;
                    break;
                case "8":
                    write += `8</div>`;
                    break;
                case "9":
                    write += `9</div>`;
                    break;
                case "10":
                    write += `10</div>`;
                    break;
                case "bube":
                    write += `B</div>`;
                    break;
                case "dame":
                    write += `D</div>`;
                    break;
                case "koenig":
                    write += `K</div>`;
                    break;
                case "ass":
                    write += `A</div>`;
                    break;
                default:
                    console.log("Wert konnte nicht geladen werden");
            }
            write += `</div>`;
            document.getElementById("Handkarten").innerHTML += `${write}`;
        }
    }
    function init() {
        spielAnfang();
    }
    document.addEventListener("DOMContentLoaded", init);
})(a2 || (a2 = {}));
//# sourceMappingURL=main.js.map