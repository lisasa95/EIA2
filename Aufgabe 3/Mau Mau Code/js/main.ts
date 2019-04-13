/* Aufgabe 3: /*
Aufgabe: Aufgabe Nummer 3 - Events Interaktiv: Mau Mau 
Name: Lisa Sanchez y Bittner
Matrikel: 260502 - Datum: 14.04.2019
Der Code wurde in Zusammenarbeit mit Kathrin Wurz und Carlotta Reinders erarbeitet.
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */


namespace a3 {


    /* Interface für Spielkarten*/
    interface Spielkarten {
        zahl: number;
        symbol: number;
        rang: string;

    }

    let herz7: Spielkarten = {
        zahl: 7,
        symbol: 1,
        rang: "nichts",
    }

    let herz8: Spielkarten = {
        zahl: 8,
        symbol: 1,
        rang: "nichts",
    }

    let herz9: Spielkarten = {
        zahl: 9,
        symbol: 1,
        rang: "nichts",

    }

    let herz10: Spielkarten = {
        zahl: 10,
        symbol: 1,
        rang: "nichts",
    }

    let herzBube: Spielkarten = {
        zahl: 11,
        symbol: 1,
        rang: "nichts",
    }

    let herzDame: Spielkarten = {
        zahl: 12,
        symbol: 1,
        rang: "nichts",

    }

    let herzKoenig: Spielkarten = {
        zahl: 13,
        symbol: 1,
        rang: "nichts",
    }

    let herzAss: Spielkarten = {
        zahl: 14,
        symbol: 1,
        rang: "nichts",
    }

    let pik7: Spielkarten = {
        zahl: 7,
        symbol: 2,
        rang: "nichts",

    }

    let pik8: Spielkarten = {
        zahl: 8,
        symbol: 2,
        rang: "nichts",
    }

    let pik9: Spielkarten = {
        zahl: 9,
        symbol: 2,
        rang: "nichts",
    }

    let pik10: Spielkarten = {
        zahl: 10,
        symbol: 2,
        rang: "nichts",
    }

    let pikBube: Spielkarten = {
        zahl: 11,
        symbol: 2,
        rang: "nichts",
    }

    let pikDame: Spielkarten = {
        zahl: 12,
        symbol: 2,
        rang: "nichts",
    }

    let pikKoenig: Spielkarten = {
        zahl: 13,
        symbol: 2,
        rang: "nichts",
    }

    let pikAss: Spielkarten = {
        zahl: 14,
        symbol: 2,
        rang: "nichts",
    }

    let kreuz7: Spielkarten = {
        zahl: 7,
        symbol: 3,
        rang: "nichts",
    }

    let kreuz8: Spielkarten = {
        zahl: 8,
        symbol: 3,
        rang: "nichts",
    }

    let kreuz9: Spielkarten = {
        zahl: 9,
        symbol: 3,
        rang: "nichts",
    }

    let kreuz10: Spielkarten = {
        zahl: 10,
        symbol: 3,
        rang: "nichts",
    }

    let kreuzBube: Spielkarten = {
        zahl: 11,
        symbol: 3,
        rang: "nichts",
    }

    let kreuzDame: Spielkarten = {
        zahl: 12,
        symbol: 3,
        rang: "nichts",
    }

    let kreuzKoenig: Spielkarten = {
        zahl: 13,
        symbol: 3,
        rang: "nichts",
    }

    let kreuzAss: Spielkarten = {
        zahl: 14,
        symbol: 3,
        rang: "nichts",
    }

    let karo7: Spielkarten = {
        zahl: 7,
        symbol: 4,
        rang: "nichts",
    }

    let karo8: Spielkarten = {
        zahl: 8,
        symbol: 4,
        rang: "nichts",
    }

    let karo9: Spielkarten = {
        zahl: 9,
        symbol: 4,
        rang: "nichts",
    }

    let karo10: Spielkarten = {
        zahl: 10,
        symbol: 4,
        rang: "nichts",
    }

    let karoBube: Spielkarten = {
        zahl: 11,
        symbol: 4,
        rang: "nichts",
    }

    let karoDame: Spielkarten = {
        zahl: 12,
        symbol: 4,
        rang: "nichts",
    }

    let karoKoenig: Spielkarten = {
        zahl: 13,
        symbol: 4,
        rang: "nichts",
    }

    let karoAss: Spielkarten = {
        zahl: 14,
        symbol: 4,
        rang: "nichts",
    }


    /*Array Karten*/
    let alleSpielkarten: Spielkarten[] = [herz7, herz8, herz9, herz10, herzBube, herzDame, herzKoenig, herzAss, pik7, pik8, pik9, pik10, pikBube, pikDame, pikKoenig, pikAss, kreuz7, kreuz8, kreuz9, kreuz10, kreuzBube, kreuzDame, kreuzKoenig, kreuzAss, karo7, karo8, karo9, karo10, karoBube, karoDame, karoKoenig, karoAss];
    let Handkarten: Spielkarten[] = []
    let ablageStapel: Spielkarten[] = []
    let ersteKarte: Spielkarten;


    /*FUNKTION - Abfrage für Anzahl der Handkarten*/
    function spielAnfang(): void {
        let HandkartenAnzahl: number = 0;
        do {
            HandkartenAnzahl = parseInt(prompt("Mit wievielen Karten möchtest du starten? Gib eine Zahl zwischen 3 und 8 ein."));
        }
        while (isNaN(HandkartenAnzahl) || HandkartenAnzahl > 8 || HandkartenAnzahl < 3); //Zwischen 8 und 3 auswählen

        console.log("Handkarten: " + HandkartenAnzahl);

        for (let i: number = 0; i < HandkartenAnzahl; i++) {
            zieheKarte();
        }
        console.log(Handkarten);

        /* Nachziehstapel wird erstellt durch die Eingabe der Zahl im Prompter*/
        nachziehstapelErzeugen();
        let n: number = Math.floor(Math.random() * (alleSpielkarten.length)); //Zufällige Karte zwischen 0 und Länge des Arrays wird erzeugt/generiert
        ersteKarte = alleSpielkarten[n]
        alleSpielkarten.splice(n, 1); // Stelle, wieviel soll entfernt werden, was wird hinzugefügt, n - aktuelle karte

        ablegestapelErzeugen();
        document.getElementById("kartenSortieren").addEventListener("click", kartenSortieren);
        handkartenErzeugen();

    }

    /* FUNKTION - Zufällige Karte wird gezogen*/
    function zieheKarte(): void {
        if (alleSpielkarten.length > 0) {
            let n: number = Math.floor(Math.random() * (alleSpielkarten.length)); //Zufällige Karte zwischen 0 und Länge des Arrays wird erzeugt/generiert
            Handkarten.push(alleSpielkarten[n]); //Karte wird dem Deck hinzugefügt
            alleSpielkarten.splice(n, 1)
            handkartenErzeugen();
        }
        else {
            alert("Nachziehstapel ist leer")

        }
    }

    /* FUNKTION - Zufällige Karten werdenin den */
    function nachziehstapelErzeugen(): void { // Nachziehstapel wird generiert, bzw Bild von Rückseite wird angezeigt mit der id
        document.getElementById("nachziehStapel").addEventListener("click", zieheKarte)// fügt element eventlistener (klickelement) hinzu, (über ID) funktion nachziehStapel wird durchgeführt.
        document.getElementById("nachziehStapel").innerHTML = `<div class="styling">
            <img src="img/Kartenrücken.jpeg" class="kartenrücken">
            </div>`;
    }

    /* FUNKTION - Ablegestapel wird genertiert, nimmt zufälligen Wert und zufälliges Symbol*/
    function ablegestapelErzeugen(): void {
        let write: string = "";
        write += `<div class="styling">`;

        switch (ersteKarte.symbol) {
            case 1:
                write += "<div class='rot' class='stylingSymbol'>♥";
                break;
            case 4:
                write += "<div class='rot' class='stylingSymbol'>♦";
                break;
            case 3:
                write += "<div class='schwarz' class='stylingSymbol'>♣";
                break;
            case 2:
                write += "<div class='schwarz' class='stylingSymbol'>♠";
                break;
            default:
                console.log("Symbol konnte nicht geladen werden")
        }

        switch (ersteKarte.zahl) {
            case 14:
                write += `A</div>`;
                break;
            case 13:
                write += `K</div>`;
                break;
            case 12:
                write += `D</div>`;
                break;
            case 11:
                write += `B</div>`;
                break;
            case 10:
                write += `10</div>`;
                break;
            case 9:
                write += `9</div>`;
                break;
            case 8:
                write += `8</div>`;
                break;
            case 7:
                write += `7</div>`;
                break;
            default:
                console.log("ERROR while loading Value")
        }
        write += `</div>`
        document.getElementById("auflegeStapel").innerHTML = `${write}`;
    }

    /* FUNKTION - Handkarten werden erzeugt in dem darauf man Klicken kann*/
    function handkartenErzeugen(): void {
        document.getElementById("Handkarten").addEventListener("click", karteAusspielen);//dem div der Handkarten bekommt Klick Event
        document.getElementById("Handkarten").innerHTML = "";

        for (let i: number = 0; i < Handkarten.length; i++) {
            Handkarten[i].rang = "Rang" + i;//  ins handarray gehen und der wert "rang" soll zu 0 werden - div bekommt ID mit selben Namen, sonst wüsste man nicht zu welchem punkt im array es gehört
            let write: string = "";
            write += `<div class="styling" id="Rang${i}">`;

            switch (Handkarten[i].symbol) {
                case 1:
                    write += "<div class='rot' class='stylingSymbol'>♥";
                    break;
                case 4:
                    write += "<div class='rot' class='stylingSymbol'>♦";
                    break;
                case 3:
                    write += "<div class='schwarz' class='stylingSymbol'>♣";
                    break;
                case 2:
                    write += "<div class='schwarz' class='stylingSymbol'>♠";
                    break;
                default:
                    console.log("Symbol konnte nicht geladen werden")
            }

            switch (Handkarten[i].zahl) {
                case 7:
                    write += `7</div>`;
                    break;
                case 8:
                    write += `8</div>`;
                    break;
                case 9:
                    write += `9</div>`;
                    break;
                case 10:
                    write += `10</div>`;
                    break;
                case 11:
                    write += `B</div>`;
                    break;
                case 12:
                    write += `D</div>`;
                    break;
                case 13:
                    write += `K</div>`;
                    break;
                case 14:
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
        spielAnfang();
    }

    document.addEventListener("DOMContentLoaded", init);


    /* FUNKTION - Karte wird ausgespielt durch ein Klick Event*/
    function karteAusspielen(): void {
        console.log("x");
        let ausgewählteKarte: HTMLElement = <HTMLElement>event.target; //klick auf das DIV - Eventtarget, neue Variable ist dann das div
        for (let i = 0; i < Handkarten.length; i++) {
            if (String(ausgewählteKarte.getAttribute("id")) == Handkarten[i].rang) {
                if (Handkarten[i].symbol == ersteKarte.symbol || Handkarten[i].zahl == ersteKarte.zahl) {
                    ablageStapel.push(ersteKarte);
                    ersteKarte = Handkarten[i];
                    Handkarten[i].rang = "0";
                    Handkarten.splice(i, 1);
                    handkartenErzeugen();
                    ablegestapelErzeugen();
                }

                else {
                    alert("Karte kann nicht ausgespielt werden");
                }
            }
        }

    }

    /* FUNKTION - Karten werden Sortiert, nach Wert und/oder Symbol, daraus werden dann die Handkarten generiert*/
    function kartenSortieren() {  // nimmt zwei Werte aus dem Array und vergleicht diese und sortiert diese um
        Handkarten.sort(nachWertSortieren);
        Handkarten.sort(nachSymbolSortieren);
        handkartenErzeugen();


    }


    /* FUNKTION - Karten werden sortiert, indem sie nach Wert verglichen werden und ggf. ausgetauscht werden*/
    function nachWertSortieren(karte1: Spielkarten, karte2: Spielkarten): number {
        let wertKarte1: number = karte1.zahl;
        let wertKarte2: number = karte2.zahl;
        if (wertKarte1 < wertKarte2) return -1; //Schiebt es um eins nach hinten
        if (wertKarte1 > wertKarte2) return 1; //Schiebt es um eins vor
        if (wertKarte1 == wertKarte2) return 0; // es wird nichts geändert

    }
    /* FUNKTION -Karten werden sortiert, indem sie nach Symbol verglichen werden und ggf. ausgetauscht werden*/
    function nachSymbolSortieren(karte1: Spielkarten, karte2: Spielkarten): number {
        let symbolKarte1: number = karte1.symbol;
        let symbolKarte2: number = karte2.symbol;
        if (symbolKarte1 < symbolKarte2) return -1; //Schiebt es um eins nach hinten
        if (symbolKarte1 > symbolKarte2) return 1; //Schiebt es um eins vor
        if (symbolKarte1 == symbolKarte2) return 0; // es wird nichts geändert


    }

    /* FUNKTION - Welche Taste wurde gedrückt, wenn Taste 32 = Leertaste wird eine Karte gezogen*/
    function welcheTaste(event: KeyboardEvent): void {
        if (event.keyCode == 32) zieheKarte();
    }
    document.addEventListener("keydown", welcheTaste);
}

