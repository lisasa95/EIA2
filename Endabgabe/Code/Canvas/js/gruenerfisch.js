/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var endabgabe;
(function (endabgabe) {
    class GruenerFisch extends endabgabe.BewegteUnterwasserwelt {
        constructor() {
            super();
            this.x = Math.floor(Math.random() * endabgabe.canvas.width) + 600;
            this.y = Math.random() * endabgabe.canvas.height;
            this.dx = Math.random() * 15 + 2;
            this.groesse = 10;
        }
        draw() {
            let fisch1 = new Path2D();
            fisch1.moveTo(this.x, this.y);
            fisch1.lineTo(this.x - 50, this.y + 30);
            fisch1.lineTo(this.x - 50, this.y - 30);
            fisch1.closePath();
            endabgabe.crc.fillStyle = "#2EFE9A";
            endabgabe.crc.fill(fisch1);
            endabgabe.crc.strokeStyle = "#b30086";
            endabgabe.crc.stroke(fisch1);
            let flosse = new Path2D();
            flosse.moveTo(this.x - 47, this.y);
            flosse.lineTo(this.x - 70, this.y + 10);
            flosse.lineTo(this.x - 70, this.y - 10);
            flosse.closePath();
            endabgabe.crc.fillStyle = "#63c29f";
            endabgabe.crc.fill(flosse);
            endabgabe.crc.strokeStyle = "#b30086";
            endabgabe.crc.stroke(flosse);
            let auge1 = new Path2D();
            auge1.arc(this.x - 20, this.y - 2, 5, 0, 2 * Math.PI);
            auge1.closePath();
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(auge1);
            endabgabe.crc.strokeStyle = "black";
            endabgabe.crc.stroke(auge1);
            let iris1 = new Path2D();
            iris1.arc(this.x - 20, this.y - 2, 2, 0, 2 * Math.PI);
            iris1.closePath();
            endabgabe.crc.fillStyle = "black";
            endabgabe.crc.fill(iris1);
            endabgabe.crc.stroke(iris1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x > endabgabe.canvas.width + 80) {
                this.x = -50;
            }
        }
    }
    endabgabe.GruenerFisch = GruenerFisch;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=gruenerfisch.js.map