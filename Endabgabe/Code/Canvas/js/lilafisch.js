/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class LilaFisch extends abschlussaufgabe.BewegteUnterwasserwelt {
        constructor() {
            super();
            this.x = Math.floor(Math.random() * abschlussaufgabe.canvas.width) + 600;
            this.y = Math.random() * abschlussaufgabe.canvas.height;
            this.dx = Math.random() * 5 - 11;
            this.groesse = 22;
        }
        draw() {
            let schwanz = new Path2D();
            schwanz.moveTo(this.x, this.y);
            schwanz.lineTo(this.x + 80, this.y - 100);
            schwanz.lineTo(this.x + 90, this.y + 70);
            schwanz.closePath();
            abschlussaufgabe.crc.fillStyle = "#fbff21";
            abschlussaufgabe.crc.fill(schwanz);
            abschlussaufgabe.crc.strokeStyle = "#ffbc21";
            abschlussaufgabe.crc.stroke(schwanz);
            let fisch2 = new Path2D();
            fisch2.ellipse(this.x, this.y, 30, 80, 4.5, 0, 2 * Math.PI);
            fisch2.closePath();
            abschlussaufgabe.crc.fillStyle = "#BE81F7";
            abschlussaufgabe.crc.fill(fisch2);
            abschlussaufgabe.crc.strokeStyle = "#F781F3";
            abschlussaufgabe.crc.stroke(fisch2);
            let auge2 = new Path2D();
            auge2.arc(this.x - 40, this.y + 6, 8, 0, 2 * Math.PI);
            auge2.closePath();
            abschlussaufgabe.crc.fillStyle = "white";
            abschlussaufgabe.crc.fill(auge2);
            abschlussaufgabe.crc.strokeStyle = "black";
            abschlussaufgabe.crc.stroke(auge2);
            let iris2 = new Path2D();
            iris2.arc(this.x - 40, this.y + 6, 5, 2.5, 2 * Math.PI);
            iris2.closePath();
            abschlussaufgabe.crc.fillStyle = "black";
            abschlussaufgabe.crc.fill(iris2);
            abschlussaufgabe.crc.stroke(iris2);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 200 < 0 - 30)
                this.x = abschlussaufgabe.canvas.width + 100;
        }
    }
    abschlussaufgabe.LilaFisch = LilaFisch;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=lilafisch.js.map