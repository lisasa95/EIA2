/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class BewegteUnterwasserwelt {
        constructor() {
        }
        draw() {
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
        }
    }
    abschlussaufgabe.BewegteUnterwasserwelt = BewegteUnterwasserwelt;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=bewegteUnterwasserwelt.js.map