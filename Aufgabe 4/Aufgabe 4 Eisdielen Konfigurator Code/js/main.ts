/* Aufgabe 4: 
Aufgabe: Aufgabe Nummer 4 - Eisdealer
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 21.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */

namespace a4 {

    window.addEventListener("load", init);
    

let summe: number= 0;
let schokolade: number = 0;
let vanille: number = 0;
let himbeere: number= 0;
let joghurt: number = 0;
let streusel: number = 0;
let krokant: number= 0;
let schokosauce: number = 0;
let schlagsahne: number = 0;
let waffel: boolean = false;
let becher: boolean = false;
let daheim: boolean = false;
let abholen: boolean = false;
let name: string = undefined;
let adresse: string = undefined;
let hausnummer: string = undefined;
let plz: string = undefined;
let stadt: string = undefined;
let telefonnummer: string = undefined;
let anmerkungen: string = undefined;
}

function init(_event: Event): void {
    console.log("init");
    let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

    for (let i = 0; i < fieldsets.length; i++) {
        let fieldset: HTMLElement = fieldsets[i];
        fieldset.addEventListener("change", anders);
    }

}

function anders(_event: Event): void {
    console.log(_event);
    
}


function eingabecheck(): void {

}



function preis():void {

document.getElementById("zusammenfassung").innerHTML = "";
let input: HTMLCollectionOf<HTMLInputElement> = document.getElementById("input");
for (let: i =0);

}