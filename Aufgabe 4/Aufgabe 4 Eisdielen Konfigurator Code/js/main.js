/* Aufgabe 4:
Aufgabe: Aufgabe Nummer 4 - Eisdealer
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 21.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var a4;
(function (a4) {
    document.addEventListener("load", init);
    document.getElementById("pruefen").addEventListener("click", orderComplete);
    function init(_event) {
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", preisberechnung);
            function preisberechnung() {
            }
            //fieldset.addEventListener("change", zusammenfassung);*//
        }
    }
    function orderComplete() {
        let allesausfuellen = 0;
        let eissorte1 = document.getElementById("schokolade");
        let eissorte2 = document.getElementById("vanille");
        let eissorte3 = document.getElementById("himbeere");
        let eissorte4 = document.getElementById("joghurt");
        let topping1 = document.getElementById("streusel");
        let topping2 = document.getElementById("krokant");
        let topping3 = document.getElementById("schokosauce");
        let topping4 = document.getElementById("schlagsahne");
        let behaelter1 = document.getElementById("waffel");
        let behaelter2 = document.getElementById("becher");
        let lieferung1 = document.getElementById("nachHause");
        let lieferung2 = document.getElementById("abholung");
        let name = document.getElementById("name");
        let adresse = document.getElementById("adresse");
        let hausnummer = document.getElementById("hausnummer");
        let plz = document.getElementById("plz");
        let stadt = document.getElementById("stadt");
        let telefon = document.getElementById("telefon");
        let anmerkungen = document.getElementById("anmerkungen");
        if (lieferung1.checked == true || lieferung2.checked == true) {
            allesausfuellen = 1;
        }
        if (eissorte1.value == "" || eissorte2.value == "" || eissorte3.value == "" || eissorte4.value == "" || eissorte4.value == "" || topping1.value == "" || topping2.value == "" || topping3.value == "" || topping4.value == "" || behaelter1.value == "" || behaelter2.value == "" || name.value == "" || adresse.value == "" || hausnummer.value == "" || plz.value == "" || stadt.value == "" || telefon.value == "" || anmerkungen.value == "") {
            allesausfuellen == 0;
            alert("Bitte fehlenden Felder ergänzen!");
        }
    }
})(a4 || (a4 = {}));
//# sourceMappingURL=main.js.map