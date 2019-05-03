/* Aufgabe 6: 
Aufgabe: Aufgabe Nummer 6 - Server: Erster Node Server
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 05.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace a6 {

    window.addEventListener("load", init);

    let fieldset: HTMLFieldSetElement = document.createElement("fieldset");
    let legend: HTMLLegendElement = document.createElement("legend");

    function init(_event: Event): void {

        eiselemente(sortimentArray);

        document.getElementById("bestellbutton").addEventListener("click", bestellungUeberpruefen);
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", bestellUebersicht);
        }
    }



    /* FUNKTION - Elemente werden mit Fieldsets bzw. darin erstellt - Eiszusammenstellung */

    function eiselemente(daten: Fieldsetarray): void {
        document.getElementById("form").appendChild(fieldset);
        legend.innerHTML = "Hier Eis zusammenstellen";
        fieldset.appendChild(legend);
        for (let datenArray in daten) {
            let value: Eisdaten[] = daten[datenArray];
            let div: HTMLDivElement = document.createElement("div");
            fieldset.appendChild(div)
            div.innerText = datenArray;
            for (let i: number = 0; i < value.length; i++)
                eiselementeErzeugen(value[i]);
        }
    }


    function eiselementeErzeugen(sortimentAuswahl: Eisdaten): void {
        let input: HTMLInputElement = document.createElement("input");
        let label: HTMLLabelElement = document.createElement("label");
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

    function bestellUebersicht(_event: Event): void {
        let startSumme: number = 0;
        let bestellAuswahl: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("eistopping").innerHTML = " ";
        document.getElementById("summe").innerHTML = " ";
        document.getElementById("behaelter").innerHTML = " ";
        document.getElementById("lieferoption").innerHTML = " ";


        for (let i: number = 0; i < bestellAuswahl.length; i++) {


            if (bestellAuswahl[i].type == "number" && Number(bestellAuswahl[i].value) > 0) {
                let gesamtPreis: number = Number(bestellAuswahl[i].value);
                startSumme += gesamtPreis;
                document.getElementById("summe").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let auswahl: HTMLElement = document.createElement("li");
                auswahl.innerHTML = `${bestellAuswahl[i].value} x ${bestellAuswahl[i].name}`;
                document.getElementById("eistopping").appendChild(auswahl);
            }

            if (bestellAuswahl[i].checked == true && bestellAuswahl[i].getAttribute("name") == "radiobutton") {
                let gesamtPreis: number = Number(bestellAuswahl[i].getAttribute("preis"));
                startSumme += gesamtPreis;
                document.getElementById("summe").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let behaelterWahl: HTMLElement = document.createElement("li");
                behaelterWahl.innerHTML = `${bestellAuswahl[i].getAttribute("id")}`;
                document.getElementById("behaelter").appendChild(behaelterWahl);
            }

            if (bestellAuswahl[i].checked == true && bestellAuswahl[i].name == "lieferung") {
                let gesamtPreis: number = Number(bestellAuswahl[i].getAttribute("preis"));
                startSumme += gesamtPreis;
                document.getElementById("summe").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let lieferWahl: HTMLElement = document.createElement("li");
                lieferWahl.innerHTML = `${bestellAuswahl[i].getAttribute("id")}`;
                document.getElementById("lieferoption").appendChild(lieferWahl);
            }

        }
    }



    /*FUNKTION - Überprüft welche Daten da sind und welche fehlen, und gibt dies als Prompter aus */
    function bestellungUeberpruefen(_event: Event): void {
        let kundenAdresse: string[] = [];
        let kundenEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        let lieferoptionLeer: number = 0;
        let eistoppingLeer: number = 0;
        let behaelterLeer: number = 0;

        for (let i: number = 0; i < kundenEingabe.length; i++) {

            if (kundenEingabe[i].value == "") {
                let benoetigteDaten: string = kundenEingabe[i].name;
                kundenAdresse.push(benoetigteDaten);
            }
            if (kundenEingabe[i].type == "radio" && kundenEingabe[i].checked == true) {
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
            alert("Die Lieferoption muss noch angegeben werden.")
        }
        if (eistoppingLeer == 0) {
            alert("Das Eis mit Topping muss noch zusammengestellt werden.")
        }
        if (behaelterLeer == 0) {
            alert("Der Behälter muss noch angegeben werden")
        }
        if (kundenAdresse.length == 0) {
            alert("Deine Bestellung ist erfolgreich bei uns eingegangen!");
        }
        else {
            alert(`${kundenAdresse} ist noch nicht ausgefüllt. Bitte vervollständigen!`);
        }
    }

}
