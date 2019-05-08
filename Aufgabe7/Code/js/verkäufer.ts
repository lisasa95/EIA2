/* Aufgabe 6: 
Aufgabe: Aufgabe Nummer 6 - Server: Erster Node Server
Name: Lisa Sanchez y Bittner
Matrikel: 260502 
Datum: 05.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/


namespace a6 {

    export interface Eisdaten {
        name: string;
        preis: number;
        typ: string;

    }
        


    export interface Fieldsetarray {
        [datenArray: string]: Eisdaten[];
    }

    export let sortimentArray: Fieldsetarray = {
        "Eissorten": [
            { name: "Schokolade", preis: 1, typ: "number" },
            { name:"Vanille", preis: 1, typ: "number" },
            { name: "Himbeere", preis: 1, typ: "number" },
            { name:"Joghurt", preis: 1, typ: "number" },

        ],

        "Behaelter": [
            { name: "Waffel", preis: 0, typ: "radio" },
            { name: "Becher", preis: 1, typ: "radio" }
        ],

        "Toppings": [
            { name: "Streusel", preis: 1, typ: "number" },
            { name: "Krokant", preis: 1, typ: "number" },
            { name: "Schokosauce", preis: 1, typ: "number" },
            { name: "Schlagsahne", preis: 1, typ: "number" }
        ],


    };
}
    