/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class BlaseKlein extends abschlussaufgabe.BewegteUnterwasserwelt {
        constructor() {
            super();
            this.x = Math.random() * abschlussaufgabe.canvas.width;
            this.y = Math.random() * abschlussaufgabe.canvas.height;
            this.dy = Math.random() * -8 - 1;
        }
        draw() {
            let blasen = new Path2D();
            blasen.arc(this.x, this.y, 14, 0, 2 * Math.PI);
            abschlussaufgabe.crc.strokeStyle = "#0033cc";
            abschlussaufgabe.crc.stroke(blasen);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.y += this.dy;
            if (this.y + 14 < 0)
                this.y = 600;
        }
    }
    abschlussaufgabe.BlaseKlein = BlaseKlein;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=kleineblasen.js.map