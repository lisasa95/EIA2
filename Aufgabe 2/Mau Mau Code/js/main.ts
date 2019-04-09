/* Aufgabe: Aufgabe Nummer 2 - Mau Mau Name: Lisa Sanchez y Bittner
Matrikel: 260502 - Datum: 07.04.2019
Der Code wurde in Zusammenarbeit mit Bastian Culig, Daniel Mainberger, Kathrin Wurz, Carlotta Reinders und Marvin Kübler erarbeitet.
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

/* Interface für Spielkarten*/
interface Spielkarten {
    zahl: string;
    symbol: string;
    imDeck: boolean;
}

/* Interface für Spielkarten*/
let herz7: Spielkarten = {
    zahl: "7",
    symbol: "♥",
    imDeck: true,
}

let herz8: Spielkarten = {
    zahl: "8",
    symbol: "♥",
    imDeck: true,
}

let herz9: Spielkarten = {
    zahl: "9",
    symbol: "♥",
    imDeck: true,
}

let herz10: Spielkarten = {
    zahl: "10",
    symbol: "♥",
    imDeck: true,
}

let herzBube: Spielkarten = {
    zahl: "bube",
    symbol: "♥",
    imDeck: true,
}

let herzDame: Spielkarten = {
    zahl: "dame",
    symbol: "♥",
    imDeck: true,

}

let herzKönig: Spielkarten = {
    zahl: "könig",
    symbol: "♥",
    imDeck: true,
}

let herzAss: Spielkarten = {
    zahl: "ass",
    symbol: "♥",
    imDeck: true,
}

let pik7: Spielkarten = {
    zahl: "7",
    symbol: "♠",
    imDeck: true,
}

let pik8: Spielkarten = {
    zahl: "8",
    symbol: "♠",
    imDeck: true,
}

let pik9: Spielkarten = {
    zahl: "9",
    symbol: "♠",
    imDeck: true,
}

let pik10: Spielkarten = {
    zahl: "10",
    symbol: "♠",
    imDeck: true,
}

let pikBube: Spielkarten = {
    zahl: "bube",
    symbol: "♠",
    imDeck: true,
}

let pikDame: Spielkarten = {
    zahl: "dame",
    symbol: "♠",
    imDeck: true,
}

let pikKönig: Spielkarten = {
    zahl: "könig",
    symbol: "♠",
    imDeck: true,
}

let pikAss: Spielkarten = {
    zahl: "ass",
    symbol: "♠",
    imDeck: true,
}

let kreuz7: Spielkarten = {
    zahl: "7",
    symbol: "♣",
    imDeck: true,
}

let kreuz8: Spielkarten = {
    zahl: "8",
    symbol: "♣",
    imDeck: true,
}

let kreuz9: Spielkarten = {
    zahl: "9",
    symbol: "♣",
    imDeck: true,
}

let kreuz10: Spielkarten = {
    zahl: "10",
    symbol: "♣",
    imDeck: true,
}

let kreuzBube: Spielkarten = {
    zahl: "bube",
    symbol: "♣",
    imDeck: true,
}

let kreuzDame: Spielkarten = {
    zahl: "dame",
    symbol: "♣",
    imDeck: true,
}

let kreuzKönig: Spielkarten = {
    zahl: "könig",
    symbol: "♣",
    imDeck: true,
}

let kreuzAss: Spielkarten = {
    zahl: "ass",
    symbol: "♣",
    imDeck: true,
}

let karo7: Spielkarten = {
    zahl: "7",
    symbol: "♦",
    imDeck: true,
}

let karo8: Spielkarten = {
    zahl: "8",
    symbol: "♦",
    imDeck: true,
}

let karo9: Spielkarten = {
    zahl: "9",
    symbol: "♦",
    imDeck: true,
}

let karo10: Spielkarten = {
    zahl: "10",
    symbol: "♦",
    imDeck: true,
}

let karoBube: Spielkarten = {
    zahl: "bube",
    symbol: "♦",
    imDeck: true,
}

let karoDame: Spielkarten = {
    zahl: "dame",
    symbol: "♦",
    imDeck: true,
}

let karoKönig: Spielkarten = {
    zahl: "könig",
    symbol: "♦",
    imDeck: true,
}

let karoAss: Spielkarten = {
    zahl: "ass",
    symbol: "♦",
    imDeck: true,
}


/*Array Karten*/

let alleSpielkarten: Spielkarten[] = [herz7, herz8, herz9, herz10, herzBube, herzDame, herzKönig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKönig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKönig, kreuzAss, karo7, karo8, karo9, karo10, karoBube, karoDame, karoKönig, karoAss];
let Handkarten: Spielkarten[] = []
let ersteKarte: Spielkarten;


/*Abfrage für Anzahl der Handkarten*/
function SpielAnfang() {
    let HandkartenAnzahl: number = 0;
    do  
        {
        HandkartenAnzahl = parseInt(prompt("Mit wievielen Karten möchtest du starten? Gib eine Zahl zwischen 3 und 8 ein."));
        } 
    while (isNaN(HandkartenAnzahl) || HandkartenAnzahl > 8 || HandkartenAnzahl < 3); 

    console.log("Handkarten: "+HandkartenAnzahl);

    for(let i:number=0;i<HandkartenAnzahl;i++){
        anzeigeKarten();
    }
    console.log(Handkarten);

    NachziehstapelErzeugen();
    AuflegestapelErzeugen();
    HandkartenErzeugen();
    
}


function anzeigeKarten() {
    let aktuelleKarte: number = Math.floor(Math.random() * 31);
    while (alleSpielkarten[aktuelleKarte].imDeck==false) {
        aktuelleKarte = Math.floor(Math.random() * 31)
    }
    Handkarten[Handkarten.length]=alleSpielkarten[aktuelleKarte];
    alleSpielkarten[aktuelleKarte].imDeck = false;
}


function NachziehstapelErzeugen(){
    document.getElementById("nachziehStapel").innerHTML = `<div class="CardBorder">
    <img src="img/Kartenrücken.jpeg" class="kartenrücken">
    </div>`;     
}


function AuflegestapelErzeugen(){
    let n:number = Math.floor(Math.random() * 31); 
    while (alleSpielkarten[n].imDeck==false)   
        {
            n = Math.floor(Math.random() * 31);
        }
    ersteKarte=alleSpielkarten[n]; 
    alleSpielkarten[n].imDeck = false;    
    
    let write:string = "";
        write += `<div class="CardBorder">`;

        switch (ersteKarte.symbol){
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
            console.log("Symbol konnte nicht geladen werden")
        }

        switch (ersteKarte.zahl){
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
                console.log("ERROR while loading Value")
            }
            write += `</div>`
    document.getElementById("auflegeStapel").innerHTML = `${write}`;     
}


function HandkartenErzeugen(){

    document.getElementById("Handkarten").innerHTML = "";

    for (var i: number = 0; i < Handkarten.length; i++){
        let write:string = "";
        write += `<div class="CardBorder">`;

        switch (Handkarten[i].symbol){
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
                console.log("Symbol konnte nicht geladen werden")
            }

        switch (Handkarten[i].zahl){
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
                console.log("Wert konnte nicht geladen werden")
            }
            write += `</div>`
        document.getElementById("Handkarten").innerHTML += `${write}`;
    }       
}


function init() {
    SpielAnfang();
}

document.addEventListener("DOMContentLoaded", init);