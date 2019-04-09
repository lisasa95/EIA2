/* Aufgabe: Aufgabe Nummer 2 - Mau Mau Name: Lisa Sanchez y Bittner
Matrikel: 260502 - Datum: 07.04.2019
Der Code wurde in Zusammenarbeit mit Bastian Culig, Daniel Mainberger, Kathrin Wurz, Carlotta Reinders und Marvin Kübler erarbeitet.
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
/* Interface für Spielkarten*/
let herz7 = {
    zahl: "7",
    symbol: "♥",
    imDeck: true,
};
let herz8 = {
    zahl: "8",
    symbol: "♥",
    imDeck: true,
};
let herz9 = {
    zahl: "9",
    symbol: "♥",
    imDeck: true,
};
let herz10 = {
    zahl: "10",
    symbol: "♥",
    imDeck: true,
};
let herzBube = {
    zahl: "bube",
    symbol: "♥",
    imDeck: true,
};
let herzDame = {
    zahl: "dame",
    symbol: "♥",
    imDeck: true,
};
let herzKönig = {
    zahl: "könig",
    symbol: "♥",
    imDeck: true,
};
let herzAss = {
    zahl: "ass",
    symbol: "♥",
    imDeck: true,
};
let pik7 = {
    zahl: "7",
    symbol: "♠",
    imDeck: true,
};
let pik8 = {
    zahl: "8",
    symbol: "♠",
    imDeck: true,
};
let pik9 = {
    zahl: "9",
    symbol: "♠",
    imDeck: true,
};
let pik10 = {
    zahl: "10",
    symbol: "♠",
    imDeck: true,
};
let pikBube = {
    zahl: "bube",
    symbol: "♠",
    imDeck: true,
};
let pikDame = {
    zahl: "dame",
    symbol: "♠",
    imDeck: true,
};
let pikKönig = {
    zahl: "könig",
    symbol: "♠",
    imDeck: true,
};
let pikAss = {
    zahl: "ass",
    symbol: "♠",
    imDeck: true,
};
let kreuz7 = {
    zahl: "7",
    symbol: "♣",
    imDeck: true,
};
let kreuz8 = {
    zahl: "8",
    symbol: "♣",
    imDeck: true,
};
let kreuz9 = {
    zahl: "9",
    symbol: "♣",
    imDeck: true,
};
let kreuz10 = {
    zahl: "10",
    symbol: "♣",
    imDeck: true,
};
let kreuzBube = {
    zahl: "bube",
    symbol: "♣",
    imDeck: true,
};
let kreuzDame = {
    zahl: "dame",
    symbol: "♣",
    imDeck: true,
};
let kreuzKönig = {
    zahl: "könig",
    symbol: "♣",
    imDeck: true,
};
let kreuzAss = {
    zahl: "ass",
    symbol: "♣",
    imDeck: true,
};
let karo7 = {
    zahl: "7",
    symbol: "♦",
    imDeck: true,
};
let karo8 = {
    zahl: "8",
    symbol: "♦",
    imDeck: true,
};
let karo9 = {
    zahl: "9",
    symbol: "♦",
    imDeck: true,
};
let karo10 = {
    zahl: "10",
    symbol: "♦",
    imDeck: true,
};
let karoBube = {
    zahl: "bube",
    symbol: "♦",
    imDeck: true,
};
let karoDame = {
    zahl: "dame",
    symbol: "♦",
    imDeck: true,
};
let karoKönig = {
    zahl: "könig",
    symbol: "♦",
    imDeck: true,
};
let karoAss = {
    zahl: "ass",
    symbol: "♦",
    imDeck: true,
};
/*Array Karten*/
let alleSpielkarten = [herz7, herz8, herz9, herz10, herzBube, herzDame, herzKönig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKönig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKönig, kreuzAss, karo7, karo8, karo9, karo10, karoBube, karoDame, karoKönig, karoAss];
let Handkarten = [];
let ersteKarte;
/*Abfrage für Anzahl der Handkarten*/
function SpielAnfang() {
    let HandkartenAnzahl = 0;
    do {
        HandkartenAnzahl = parseInt(prompt("Mit wievielen Karten möchtest du starten? Gib eine Zahl zwischen 3 und 8 ein."));
    } while (isNaN(HandkartenAnzahl) || HandkartenAnzahl > 8 || HandkartenAnzahl < 3);
    console.log("Handkarten: " + HandkartenAnzahl);
    for (let i = 0; i < HandkartenAnzahl; i++) {
        anzeigeKarten();
    }
    console.log(Handkarten);
    NachziehstapelErzeugen();
    AuflegestapelErzeugen();
    HandkartenErzeugen();
}
function anzeigeKarten() {
    let aktuelleKarte = Math.floor(Math.random() * 31);
    while (alleSpielkarten[aktuelleKarte].imDeck == false) {
        aktuelleKarte = Math.floor(Math.random() * 31);
    }
    Handkarten[Handkarten.length] = alleSpielkarten[aktuelleKarte];
    alleSpielkarten[aktuelleKarte].imDeck = false;
}
function NachziehstapelErzeugen() {
    document.getElementById("nachziehStapel").innerHTML = `<div class="CardBorder">
    <img src="img/Kartenrücken.jpeg" class="kartenrücken">
    </div>`;
}
function AuflegestapelErzeugen() {
    let n = Math.floor(Math.random() * 31);
    while (alleSpielkarten[n].imDeck == false) {
        n = Math.floor(Math.random() * 31);
    }
    ersteKarte = alleSpielkarten[n];
    alleSpielkarten[n].imDeck = false;
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
        case "könig":
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
function HandkartenErzeugen() {
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
            case "":
                write += `10</div>`;
                break;
            case "bube":
                write += `B</div>`;
                break;
            case "dame":
                write += `D</div>`;
                break;
            case "könig":
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
    SpielAnfang();
}
document.addEventListener("DOMContentLoaded", init);
//# sourceMappingURL=main.js.map