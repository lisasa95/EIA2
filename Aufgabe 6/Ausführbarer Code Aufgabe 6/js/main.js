/* Aufgabe 5:
Aufgabe: Aufgabe Nummer 5 - Eisdealer re-loaded
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var a5;
(function (a5) {
    window.addEventListener("load", init);
    let fieldset = document.createElement("fieldset");
    let legend = document.createElement("legend");
    function init(_event) {
        eiselemente(a5.sortimentArray);
        document.getElementById("bestellbutton").addEventListener("click", bestellungUeberpruefen);
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", bestellUebersicht);
        }
    }
    /* FUNKTION - Elemente werden mit Fieldsets bzw. darin erstellt - Eiszusammenstellung */
    function eiselemente(daten) {
        document.body.appendChild(fieldset);
        legend.innerHTML = "Hier Eis zusammenstellen";
        fieldset.appendChild(legend);
        for (let datenArray in daten) {
            let value = daten[datenArray];
            let div = document.createElement("div");
            fieldset.appendChild(div);
            div.innerText = datenArray;
            for (let i = 0; i < value.length; i++)
                eiselementeErzeugen(value[i]);
        }
    }
    function eiselementeErzeugen(sortimentAuswahl) {
        let input = document.createElement("input");
        let label = document.createElement("label");
        label.setAttribute("for", sortimentAuswahl.name);
        label.innerHTML = sortimentAuswahl.name;
        if (sortimentAuswahl.typ == "radio") {
            input.setAttribute("type", sortimentAuswahl.typ);
            input.setAttribute("name", "radiobutton");
            input.setAttribute("preis", sortimentAuswahl.preis.toString());
            input.setAttribute("id", sortimentAuswahl.name);
        }
        if (sortimentAuswahl.typ == "number") {
            input.setAttribute("type", sortimentAuswahl.typ);
            input.setAttribute("name", sortimentAuswahl.name);
            input.setAttribute("step", "1");
            input.setAttribute("min", "0");
            input.setAttribute("max", "15");
            input.setAttribute("value", "0");
            input.setAttribute("preis", "1");
        }
        fieldset.appendChild(input);
        fieldset.appendChild(label);
    }
    /*FUNKTION - Bestellübersicht und Elemente die angewählt sind werden zusammengefasst*/
    function bestellUebersicht(_event) {
        let startSumme = 0;
        let bestellAuswahl = document.getElementsByTagName("input");
        document.getElementById("eistopping").innerHTML = " ";
        document.getElementById("summe").innerHTML = " ";
        document.getElementById("behaelter").innerHTML = " ";
        document.getElementById("lieferoption").innerHTML = " ";
        for (let i = 0; i < bestellAuswahl.length; i++) {
            if (bestellAuswahl[i].type == "number" && Number(bestellAuswahl[i].value) > 0) {
                let gesamtPreis = Number(bestellAuswahl[i].value);
                startSumme += gesamtPreis;
                document.getElementById("summe").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl = document.createElement("li");
                auswahl.innerHTML = `${bestellAuswahl[i].value} x ${bestellAuswahl[i].name}`;
                document.getElementById("eistopping").appendChild(auswahl);
            }
            if (bestellAuswahl[i].checked == true && bestellAuswahl[i].getAttribute("name") == "radiobutton") {
                let gesamtPreis = Number(bestellAuswahl[i].getAttribute("preis"));
                startSumme += gesamtPreis;
                document.getElementById("summe").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl = document.createElement("li");
                behaelterWahl.innerHTML = `${bestellAuswahl[i].getAttribute("id")}`;
                document.getElementById("behaelter").appendChild(behaelterWahl);
            }
            if (bestellAuswahl[i].checked == true && bestellAuswahl[i].name == "lieferung") {
                let gesamtPreis = Number(bestellAuswahl[i].getAttribute("value"));
                startSumme += gesamtPreis;
                document.getElementById("summe").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let lieferWahl = document.createElement("li");
                lieferWahl.innerHTML = `${bestellAuswahl[i].getAttribute("id")}`;
                document.getElementById("lieferoption").appendChild(lieferWahl);
            }
        }
    }
    /*FUNKTION - Überprüft welche Daten da sind und welche fehlen, und gibt dies als Prompter aus */
    function bestellungUeberpruefen(_event) {
        let kundenAdresse = [];
        let kundenEingabe = document.getElementsByTagName("input");
        let lieferoptionLeer = 0;
        let eistoppingLeer = 0;
        let behaelterLeer = 0;
        for (let i = 0; i < kundenEingabe.length; i++) {
            if (kundenEingabe[i].value == "") {
                let benoetigteDaten = kundenEingabe[i].name;
                kundenAdresse.push(benoetigteDaten);
            }
            if (kundenEingabe[i].type == "checkbox" && kundenEingabe[i].checked == true) {
                lieferoptionLeer = 1;
            }
            if (kundenEingabe[i].type == "number" && Number(kundenEingabe[i].value) > 0) {
                eistoppingLeer = 1;
            }
            if (kundenEingabe[i].type == "radio" && kundenEingabe[i].checked == true) {
                behaelterLeer = 1;
            }
        }
        if (lieferoptionLeer == 0) {
            alert("Die Lieferoption muss noch angegeben werden.");
        }
        if (eistoppingLeer == 0) {
            alert("Das Eis mit Topping muss noch zusammengestellt werden.");
        }
        if (behaelterLeer == 0) {
            alert("Der Behälter muss noch angegeben werden");
        }
        if (kundenAdresse.length == 0) {
            alert("Deine Bestellung ist erfolgreich bei uns eingegangen!");
        }
        else {
            alert(`${kundenAdresse} ist noch nicht ausgefüllt. Bitte vervollständigen!`);
        }
    }
})(a5 || (a5 = {}));
//# sourceMappingURL=main.js.map