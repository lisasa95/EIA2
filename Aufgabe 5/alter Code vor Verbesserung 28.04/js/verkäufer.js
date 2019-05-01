/* Aufgabe 5:
Aufgabe: Aufgabe Nummer 5 - Eisdealer re-loaded
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.04.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.*/
var a5;
(function (a5) {
    a5.eissortenarray = [
        { typ: "eissorte", name: "Schokolade", preis: 1 },
        { typ: "eissorte", name: "Vanille", preis: 1 },
        { typ: "eissorte", name: "Himbeere", preis: 1 },
        { typ: "eissorte", name: "Joghurt", preis: 1 }
    ];
    a5.toppingarray = [
        { typ: "topping", name: "Streusel", preis: 0.80 },
        { typ: "topping", name: "Krokant", preis: 0.80 },
        { typ: "topping", name: "Schokosauce", preis: 0.80 },
        { typ: "topping", name: "Sahne", preis: 0.80 }
    ];
    a5.behalterarray = [
        { typ: "behaelter", name: "Waffel", preis: 0 },
        { typ: "behaelter", name: "Becher", preis: 1 }
    ];
    a5.lieferoptionenarray = [
        { typ: "lieferoption", name: "Lieferung", preis: 3 },
        { typ: "lieferoption", name: "Abholung", preis: 0 }
    ];
})(a5 || (a5 = {}));
//# sourceMappingURL=verkäufer.js.map