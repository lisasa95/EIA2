/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var endabgabe;
(function (endabgabe) {
    class LilaFisch extends endabgabe.BewegteUnterwasserwelt {
        constructor() {
            super();
            this.x = Math.floor(Math.random() * endabgabe.canvas.width) + 600;
            this.y = Math.random() * endabgabe.canvas.height;
            this.dx = Math.random() * 5 - 11;
            this.groesse = 22;
        }
        draw() {
            let schwanz = new Path2D();
            schwanz.moveTo(this.x, this.y);
            schwanz.lineTo(this.x + 80, this.y - 100);
            schwanz.lineTo(this.x + 90, this.y + 70);
            schwanz.closePath();
            endabgabe.crc.fillStyle = "#fbff21";
            endabgabe.crc.fill(schwanz);
            endabgabe.crc.strokeStyle = "#ffbc21";
            endabgabe.crc.stroke(schwanz);
            let fisch2 = new Path2D();
            fisch2.ellipse(this.x, this.y, 30, 80, 4.5, 0, 2 * Math.PI);
            fisch2.closePath();
            endabgabe.crc.fillStyle = "#BE81F7";
            endabgabe.crc.fill(fisch2);
            endabgabe.crc.strokeStyle = "#F781F3";
            endabgabe.crc.stroke(fisch2);
            let auge2 = new Path2D();
            auge2.arc(this.x - 40, this.y + 6, 8, 0, 2 * Math.PI);
            auge2.closePath();
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(auge2);
            endabgabe.crc.strokeStyle = "black";
            endabgabe.crc.stroke(auge2);
            let iris2 = new Path2D();
            iris2.arc(this.x - 40, this.y + 6, 5, 2.5, 2 * Math.PI);
            iris2.closePath();
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(iris2);
            endabgabe.crc.stroke(iris2);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 200 < 0 - 30)
                this.x = endabgabe.canvas.width + 100;
        }
    }
    endabgabe.LilaFisch = LilaFisch;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=lilafisch.js.map