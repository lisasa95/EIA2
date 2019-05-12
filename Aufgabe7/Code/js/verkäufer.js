/* Aufgabe 7:
Aufgabe: Aufgabe Nummer 7 - Serverseitige Verarbeitung
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 12.05.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var a7;
(function (a7) {
    a7.sortimentArray = {
        "Eissorten": [
            { name: "Schokolade", preis: 1, typ: "number" },
            { name: "Vanille", preis: 1, typ: "number" },
            { name: "Himbeere", preis: 1, typ: "number" },
            { name: "Joghurt", preis: 1, typ: "number" },
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
})(a7 || (a7 = {}));
//# sourceMappingURL=verkäufer.js.map