/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var abschlussaufgabe;
(function (abschlussaufgabe) {
    class SpielerFisch {
        constructor() {
            this.groesse = 15;
            this.schwimmrichtung = "rechts";
            this.x = abschlussaufgabe.canvas.width / 2;
            this.y = abschlussaufgabe.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            if (this.schwimmrichtung == "rechts") {
                let fisch3 = new Path2D();
                fisch3.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI); // 40 als zweiter wert
                abschlussaufgabe.crc.fillStyle = "#045FB4";
                abschlussaufgabe.crc.fill(fisch3);
                abschlussaufgabe.crc.strokeStyle = "#91bee6";
                abschlussaufgabe.crc.stroke(fisch3);
                let flosse = new Path2D();
                flosse.moveTo(this.x - (20 * this.groesse) / 10, this.y + (2 * this.groesse) / 10);
                flosse.lineTo(this.x - (60 * this.groesse) / 10, this.y + (15 * this.groesse) / 10);
                flosse.lineTo(this.x - (60 * this.groesse) / 10, this.y - (5 * this.groesse) / 10);
                abschlussaufgabe.crc.fillStyle = "045FB4";
                abschlussaufgabe.crc.fill(flosse);
                abschlussaufgabe.crc.strokeStyle = "#91bee6";
                abschlussaufgabe.crc.stroke(flosse);
                let iris = new Path2D();
                iris.arc(this.x + 20, this.y - 4, 8, 0, 2 * Math.PI);
                abschlussaufgabe.crc.fillStyle = "white";
                abschlussaufgabe.crc.fill(iris);
                abschlussaufgabe.crc.stroke(iris);
                let pupille = new Path2D();
                pupille.arc(this.x + 20, this.y - 6, 5, 0, 2 * Math.PI);
                abschlussaufgabe.crc.fillStyle = "black";
                abschlussaufgabe.crc.fill(pupille);
                abschlussaufgabe.crc.stroke(pupille);
            }
            else {
                let fisch3 = new Path2D();
                fisch3.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI);
                abschlussaufgabe.crc.fillStyle = "#045FB4";
                abschlussaufgabe.crc.fill(fisch3);
                abschlussaufgabe.crc.strokeStyle = "#91bee6";
                abschlussaufgabe.crc.stroke(fisch3);
                let flosse = new Path2D();
                flosse.moveTo(this.x + (20 * this.groesse) / 10, this.y + (2 * this.groesse) / 10);
                flosse.lineTo(this.x + (60 * this.groesse) / 10, this.y + (15 * this.groesse) / 10);
                flosse.lineTo(this.x + (60 * this.groesse) / 10, this.y - (5 * this.groesse) / 10);
                abschlussaufgabe.crc.fillStyle = "045FB4";
                abschlussaufgabe.crc.fill(flosse);
                abschlussaufgabe.crc.strokeStyle = "#91bee6";
                abschlussaufgabe.crc.stroke(flosse);
                let iris = new Path2D();
                iris.arc(this.x - 20, this.y - 4, 8, 0, 2 * Math.PI);
                abschlussaufgabe.crc.fillStyle = "white";
                abschlussaufgabe.crc.fill(iris);
                abschlussaufgabe.crc.stroke(iris);
                let pupille = new Path2D();
                pupille.arc(this.x - 20, this.y - 6, 5, 0, 2 * Math.PI);
                abschlussaufgabe.crc.fillStyle = "black";
                abschlussaufgabe.crc.fill(pupille);
                abschlussaufgabe.crc.stroke(pupille);
            }
        }
        kollision(fisch) {
            let xDistanz = Math.abs(this.x - fisch.x);
            let yDistanz = Math.abs(this.y - fisch.y);
            if (Math.sqrt(Math.pow(xDistanz, 2) + Math.pow(yDistanz, 2)) < 50) {
                if (this.groesse > fisch.groesse) {
                    this.groesse++;
                    abschlussaufgabe.Punktestand += 5;
                    console.log(this.groesse);
                    return "essen";
                }
                else {
                    return "tot";
                }
            }
            else
                return "nichts";
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > abschlussaufgabe.canvas.width) {
                this.x = abschlussaufgabe.canvas.width;
            }
            else if (this.x < 0) {
                this.x = 0;
            }
            else if (this.y > abschlussaufgabe.canvas.height) {
                this.y = abschlussaufgabe.canvas.height;
            }
            else if (this.y < 0) {
                this.y = 0;
            }
        }
        update() {
            this.move();
            this.draw();
        }
    }
    abschlussaufgabe.SpielerFisch = SpielerFisch;
})(abschlussaufgabe || (abschlussaufgabe = {}));
//# sourceMappingURL=spielerfisch.js.map