/* Aufgabe 4: 
Aufgabe: Aufgabe Nummer 4 - Eisdealer
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 21.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/

namespace a4 {

    document.addEventListener("load", init);
    document.getElementById("pruefen").addEventListener("click", orderComplete);

    function init(_event: Event): void {

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", preisberechnung);

            //fieldset.addEventListener("change", zusammenfassung);*//
        }
    }

    function orderComplete(): void {
        let allesausfuellen: number = 0;

        let eissorte1: HTMLInputElement = <HTMLInputElement>document.getElementById("schokolade");
        let eissorte2: HTMLInputElement = <HTMLInputElement>document.getElementById("vanille");
        let eissorte3: HTMLInputElement = <HTMLInputElement>document.getElementById("himbeere");
        let eissorte4: HTMLInputElement = <HTMLInputElement>document.getElementById("joghurt");
        let topping1: HTMLInputElement = <HTMLInputElement>document.getElementById("streusel");
        let topping2: HTMLInputElement = <HTMLInputElement>document.getElementById("krokant");
        let topping3: HTMLInputElement = <HTMLInputElement>document.getElementById("schokosauce");
        let topping4: HTMLInputElement = <HTMLInputElement>document.getElementById("schlagsahne");
        let behaelter1: HTMLInputElement = <HTMLInputElement>document.getElementById("waffel");
        let behaelter2: HTMLInputElement = <HTMLInputElement>document.getElementById("becher");
        let lieferung1: HTMLInputElement = <HTMLInputElement>document.getElementById("nachHause");
        let lieferung2: HTMLInputElement = <HTMLInputElement>document.getElementById("abholung");
        let name: HTMLInputElement = <HTMLInputElement>document.getElementById("name");
        let adresse: HTMLInputElement = <HTMLInputElement>document.getElementById("adresse");
        let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("hausnummer");
        let plz: HTMLInputElement = <HTMLInputElement>document.getElementById("plz");
        let stadt: HTMLInputElement = <HTMLInputElement>document.getElementById("stadt");
        let telefon: HTMLInputElement = <HTMLInputElement>document.getElementById("telefon");
        let anmerkungen: HTMLInputElement = <HTMLInputElement>document.getElementById("anmerkungen");


        if (lieferung1.checked == true || lieferung2.checked == true) {
            allesausfuellen = 1; 
        }

        if (eissorte1.value == "" || eissorte2.value == "" || eissorte3.value == "" || eissorte4.value == "" || eissorte4.value == ""|| topping1.value == "" || topping2.value == ""|| topping3.value == "" || topping4.value == ""|| behaelter1.value == "" || behaelter2.value == "" || name.value == "" || adresse.value == "" || hausnummer.value == "" || plz.value == ""|| stadt.value == "" || telefon.value == ""|| anmerkungen.value == "" ) {
            allesausfuellen == 0;
            alert("Bitte fehlenden Felder ergänzen!");

        }
    }

    function preisberechnung (_event: Event): void {
        let startSumme: number = 0;
        let bestellEingabe: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");
        document.getElementById("uebersicht").innerHTML = "";
        for (let i: number = 0; i < bestellEingabe.length; i++) {
            if (bestellEingabe[i].checked == true) {
                let gesamtPreis: number = Number(bestellEingabe[i].value)
                startSumme += gesamtPreis;
                document.getElementById("preis").innerHTML = startSumme.toFixed(2).toString() + " " + "€";
                let bestellUebersicht = document.createElement("li");
                bestellUebersicht.innerHTML = `${bestellEingabe[i].id}`
                document.getElementById("uebersicht").appendChild(bestellUebersicht)
            }
        }
    }
}
    

        
    