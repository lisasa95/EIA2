/* Aufgabe 5:
Aufgabe: Aufgabe Nummer 5 - Eisdealer re-loaded
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var a5;
(function (a5) {
    window.addEventListener("load", init);
    //Checkboxen generieren
    let behaelterbox = document.createElement("select"); //Selekt Boxen erstellen
    let lieferoptionenbox = document.createElement("select");
    let bestellUebersichtbox = document.createElement("div"); //Warenkorb Div erstellen
    //Adressfelder generieren
    let adresseName = document.createElement("input");
    let adresseStrasse = document.createElement("input");
    let adresseHausnummer = document.createElement("input"); //Texteingabefelder erstellen
    let adressePlz = document.createElement("input");
    let adresseStadt = document.createElement("input");
    let adresseTelefonnummer = document.createElement("input");
    //Button generieren
    let ueberpruefungsbutton = document.createElement("div");
    //All die erstellen Elemente werden später im Code mit Eigenschaften ausgestattet und ans DOM gehängt
    //Gesamtpreis festlegen mit Variable
    var gesamtpreis = 0;
    function init() {
        //FUNKTION INIT - Warenkorb Definieren und Anhängen
        let h2 = document.createElement("h2"); //Warenkorb überschrift
        h2.innerText = "Bestellübersicht"; //Text der überschrift
        h2.style.position = "absolute"; //CSS Gestaltung
        h2.style.right = "480px";
        h2.style.top = "140px";
        h2.style.zIndex = "99";
        document.getElementById("uebersichtscontainer").appendChild(h2); //Überschrift an div mit id korbid ins DOM hinzufügen
        bestellUebersichtbox.style.display = "inline-block"; //Warenkorb Stylen
        bestellUebersichtbox.style.position = "absolute";
        bestellUebersichtbox.style.right = "180px";
        bestellUebersichtbox.style.top = "140px";
        bestellUebersichtbox.style.width = "470px";
        bestellUebersichtbox.style.height = "500px";
        bestellUebersichtbox.style.backgroundColor = "#FEFBAF";
        bestellUebersichtbox.style.paddingTop = "40px";
        bestellUebersichtbox.style.paddingLeft = "10px";
        bestellUebersichtbox.style.border = "solid 1px black";
        document.getElementById("uebersichtscontainer").appendChild(bestellUebersichtbox); //Warenkorb (korb) an DOM anhängen
        //Behälter definieren und anhängen
        behaelterbox.addEventListener("change", AuswahlAuslesen); //oben erstellten baumtyp vararbeiten
        document.getElementById("behaelter").appendChild(behaelterbox);
        for (let i = 0; i < a5.behalterarray.length; i++) {
            let option = document.createElement("option");
            option.innerText = a5.behalterarray[i].name;
            behaelterbox.id = a5.behalterarray[i].typ; //Typ bzw ID Des Elements zuweisen, siehe Daten.ts; Wird später im Warenkorb gebraucht um zu prüfen ob Objekt schon vorhanden ist
            behaelterbox.appendChild(option);
        }
        //Eissorten definieren und anhängen      
        for (let i = 0; i < a5.eissortenarray.length; i++) {
            let kugeltyp = document.createElement("input");
            kugeltyp.type = "checkbox"; //Macht es zur Checkbox
            kugeltyp.id = a5.eissortenarray[i].typ;
            kugeltyp.addEventListener("change", function () {
                EissortenAuslesen(kugeltyp, "1"); //Werte übergeben; in kugeltyp ist alles enthalten
            });
            document.getElementById("eissorte").appendChild(kugeltyp);
            //Labels hinzufügen
            let kugellabel = document.createElement("label");
            kugellabel.innerText = a5.eissortenarray[i].name;
            document.getElementById("eissorte").appendChild(kugellabel);
            //Anzahl Selektor
            let kugelanzahl = document.createElement("input");
            kugelanzahl.type = "number"; //Macht es zum NummerHochZählFeld
            kugelanzahl.step = "1";
            kugelanzahl.min = "0";
            kugelanzahl.value = "1";
            kugelanzahl.style.marginRight = "1.5em";
            kugelanzahl.addEventListener("change", function () {
                kugeltyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                EissortenAuslesen(kugeltyp, kugelanzahl.value);
            });
            document.getElementById("eissorte").appendChild(kugelanzahl);
        }
        //Topping Selektor
        for (let i = 0; i < a5.toppingarray.length; i++) {
            let toppingtyp = document.createElement("input");
            toppingtyp.type = "checkbox";
            toppingtyp.id = a5.toppingarray[i].typ;
            toppingtyp.addEventListener("change", function () {
                ToppingsAuslesen(toppingtyp, "1");
            });
            document.getElementById("toppings").appendChild(toppingtyp);
            //Label Hinzufügen
            let toppinglabel = document.createElement("label");
            toppinglabel.innerText = a5.toppingarray[i].name;
            document.getElementById("toppings").appendChild(toppinglabel);
            //Anzahl
            let toppinganzahl = document.createElement("input");
            toppinganzahl.type = "number";
            toppinganzahl.step = "1";
            toppinganzahl.min = "0";
            toppinganzahl.value = "1";
            toppinganzahl.style.marginRight = "1.5em";
            toppinganzahl.addEventListener("change", function () {
                toppingtyp.checked = true; //Chekbox Anhaken wenn wert ge�ndert wird
                ToppingsAuslesen(toppingtyp, toppinganzahl.value);
            });
            document.getElementById("toppings").appendChild(toppinganzahl);
        }
        //Lieferoptionen Selektor       
        lieferoptionenbox.addEventListener("change", AuswahlAuslesen);
        document.getElementById("lieferung").appendChild(lieferoptionenbox);
        for (let i = 0; i < a5.lieferoptionenarray.length; i++) {
            let option = document.createElement("option");
            option.innerText = a5.lieferoptionenarray[i].name;
            lieferoptionenbox.id = a5.lieferoptionenarray[i].typ;
            lieferoptionenbox.appendChild(option);
        }
        //Persönliche Daten im Adressfeld
        adresseName.type = "text";
        adresseName.placeholder = "Name";
        adresseName.required = true;
        adresseName.style.marginRight = "1em";
        document.getElementById("adressdaten").appendChild(adresseName);
        adresseStrasse.type = "text";
        adresseStrasse.placeholder = "Strasse";
        adresseStrasse.required = true;
        adresseStrasse.style.marginRight = "1em";
        document.getElementById("adressdaten").appendChild(adresseStrasse);
        adresseHausnummer.type = "text";
        adresseHausnummer.placeholder = "Hausnummer";
        adresseHausnummer.required = true;
        adresseHausnummer.style.marginRight = "1em";
        document.getElementById("adressdaten").appendChild(adresseHausnummer);
        adressePlz.type = "text";
        adressePlz.placeholder = "PLZ";
        adressePlz.required = true;
        adressePlz.style.marginRight = "1em";
        document.getElementById("adressdaten").appendChild(adressePlz);
        adresseStadt.type = "text";
        adresseStadt.placeholder = "Stadt";
        adresseStadt.required = true;
        adresseStadt.style.marginRight = "1em";
        document.getElementById("adressdaten").appendChild(adresseStadt);
        adresseTelefonnummer.type = "text";
        adresseTelefonnummer.placeholder = "Telefonnummer";
        adresseTelefonnummer.required = true;
        adresseTelefonnummer.style.marginRight = "1em";
        document.getElementById("adressdaten").appendChild(adresseTelefonnummer);
        //Button erstellen
        let button = document.createElement("button");
        button.innerText = "Bestellung prüfen";
        button.addEventListener("click", PrufeDaten);
        button.style.marginTop = "10px";
        document.getElementById("bestellbutton").appendChild(button);
    }
    //FUNKTION - Kugeln auslesen
    function EissortenAuslesen(chkElement, anzahl) {
        for (let i = 0; i < a5.eissortenarray.length; i++) {
            if (a5.eissortenarray[i].typ == chkElement.id) {
                Warenkorb(chkElement.id, a5.eissortenarray[i].name, a5.eissortenarray[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    //FUNKTION - Toppings auslesen
    function ToppingsAuslesen(chkElement, anzahl) {
        for (let i = 0; i < a5.toppingarray.length; i++) {
            if (a5.toppingarray[i].typ == chkElement.id) {
                Warenkorb(chkElement.id, a5.toppingarray[i].name, a5.toppingarray[i].preis, parseInt(anzahl), chkElement.checked);
            }
        }
    }
    function AuswahlAuslesen() {
        var behaelterauswahl = behaelterbox.value; //baumtyp.value == ausgewählter Wert im DropDown
        if (behaelterauswahl != "") {
            ZuWarenkorb(a5.behalterarray, true, behaelterauswahl); //true --> element ist ausgewählt
        }
        else {
            ZuWarenkorb(a5.behalterarray, false, behaelterauswahl); //false --> Element wurde abgewählt
        }
        var lieferant = lieferoptionenbox.value;
        if (lieferant != "") {
            ZuWarenkorb(a5.lieferoptionenarray, true, lieferant);
        }
    }
    //Wird von DropDown genutzt; Sucht nach dem Preis
    function ZuWarenkorb(daten, ischeckt, elementname) {
        for (let i = 0; i < daten.length; i++) {
            if (daten[i].name == elementname) {
                Warenkorb(daten[i].typ, elementname, daten[i].preis, 1, ischeckt); //1 --> da nur ein Element ausgewählt werden kann
            }
        }
    }
    function Warenkorb(elementId, value, preis, anzahl, selected) {
        var preisElement; //Preis von anzahl mal Element berechnen
        preisElement = anzahl * preis;
        //Wird erst bei zweitem Durchgang ausgef�hrt, zu Beginn keine Elemente in Korb vorhanden
        for (let i = 0; i < bestellUebersichtbox.getElementsByTagName("p").length; i++) { //bestellübersicht prüfen
            if (bestellUebersichtbox.getElementsByTagName("p")[i].id == elementId) { //vergleicht vorhandene elemente mit gewähltem element
                var innerPreis = bestellUebersichtbox.getElementsByTagName("p")[i].innerText.split("=")[1]; //preis wird geschrieben
                bestellUebersichtbox.getElementsByTagName("p")[i].remove(); //vorherige ps löschen
                gesamtpreis = gesamtpreis - parseInt(innerPreis); //Gesamtpreis bereinigen
            }
            //Gesamtpreis p erstmal entfernen 
            if (bestellUebersichtbox.getElementsByTagName("p")[i].id == "gesamtpreisid") {
                bestellUebersichtbox.getElementsByTagName("p")[i].remove();
            }
        }
        //Gesamtpreis erhöhen je nachdem was gedrückt wurde
        if (selected) {
            var p = document.createElement("p");
            p.id = elementId;
            p.innerText = value + "  = " + preisElement + "€";
            gesamtpreis = gesamtpreis + preisElement;
            bestellUebersichtbox.appendChild(p);
        }
        //Gesamtpreis wieder hinzufügen nachdem etwas hinzugefügt wurde
        let pGesamt = document.createElement("p");
        pGesamt.id = "gesamtpreisid";
        pGesamt.innerText = "Gesamtpreis =  " + gesamtpreis + "€";
        pGesamt.style.position = "absolute";
        pGesamt.style.bottom = "0";
        pGesamt.style.paddingTop = "10px";
        pGesamt.style.borderTop = "2px solid black";
        bestellUebersichtbox.appendChild(pGesamt);
    }
    // FUNKTION - Prüft Adressfelder
    function PrufeDaten() {
        ueberpruefungsbutton.innerText = "";
        if (adresseName.checkValidity() == false || adresseStrasse.checkValidity() == false || adresseHausnummer.checkValidity() == false || adressePlz.checkValidity() == false || adresseStadt.checkValidity() == false || adresseTelefonnummer.checkValidity() == false) {
            ueberpruefungsbutton.innerText = "Leider fehlen eine oder mehrere Angaben. Bitte vervollständige die Felder!";
            ueberpruefungsbutton.style.color = "black";
            ueberpruefungsbutton.style.paddingTop = "30px";
            ueberpruefungsbutton.style.paddingLeft = "40px";
            document.body.appendChild(ueberpruefungsbutton);
        }
        else {
            ueberpruefungsbutton.innerText = "Deine Bestellung ist bei uns eingetroffen!";
            ueberpruefungsbutton.style.color = "green";
            ueberpruefungsbutton.style.paddingTop = "30px";
            ueberpruefungsbutton.style.paddingLeft = "40px";
            document.body.appendChild(ueberpruefungsbutton);
        }
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=main.js.map