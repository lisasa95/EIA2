/*Endabgabe/*
Aufgabe: Endabgabe - CANVAS
Name: Lisa Sanchez y Bittner
Matrikel: 260502
Datum: 28.07.2019
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert. */
var endabgabe;
(function (endabgabe) {
    class SpielerFisch {
        constructor() {
            this.groesse = 15;
            this.schwimmrichtung = "rechts";
            this.x = endabgabe.canvas.width / 2;
            this.y = endabgabe.canvas.height / 2;
            this.dx = 0;
            this.dy = 0;
        }
        draw() {
            if (this.schwimmrichtung == "rechts") {
                let fisch3 = new Path2D();
                fisch3.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI); // 40 als zweiter wert
                endabgabe.crc.fillStyle = "#045FB4";
                endabgabe.crc.fill(fisch3);
                endabgabe.crc.strokeStyle = "#91bee6";
                endabgabe.crc.stroke(fisch3);
                let flosse = new Path2D();
                flosse.moveTo(this.x - (20 * this.groesse) / 10, this.y + (2 * this.groesse) / 10);
                flosse.lineTo(this.x - (60 * this.groesse) / 10, this.y + (15 * this.groesse) / 10);
                flosse.lineTo(this.x - (60 * this.groesse) / 10, this.y - (5 * this.groesse) / 10);
                endabgabe.crc.fillStyle = "045FB4";
                endabgabe.crc.fill(flosse);
                endabgabe.crc.strokeStyle = "#91bee6";
                endabgabe.crc.stroke(flosse);
                let iris = new Path2D();
                iris.arc(this.x + 20, this.y - 4, 8, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(iris);
                endabgabe.crc.stroke(iris);
                let pupille = new Path2D();
                pupille.arc(this.x + 20, this.y - 6, 5, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(pupille);
                endabgabe.crc.stroke(pupille);
            }
            else {
                let fisch3 = new Path2D();
                fisch3.arc(this.x, this.y, (this.groesse * 30) / 10, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "#045FB4";
                endabgabe.crc.fill(fisch3);
                endabgabe.crc.strokeStyle = "#91bee6";
                endabgabe.crc.stroke(fisch3);
                let flosse = new Path2D();
                flosse.moveTo(this.x + (20 * this.groesse) / 10, this.y + (2 * this.groesse) / 10);
                flosse.lineTo(this.x + (60 * this.groesse) / 10, this.y + (15 * this.groesse) / 10);
                flosse.lineTo(this.x + (60 * this.groesse) / 10, this.y - (5 * this.groesse) / 10);
                endabgabe.crc.fillStyle = "045FB4";
                endabgabe.crc.fill(flosse);
                endabgabe.crc.strokeStyle = "#91bee6";
                endabgabe.crc.stroke(flosse);
                let iris = new Path2D();
                iris.arc(this.x - 20, this.y - 4, 8, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "white";
                endabgabe.crc.fill(iris);
                endabgabe.crc.stroke(iris);
                let pupille = new Path2D();
                pupille.arc(this.x - 20, this.y - 6, 5, 0, 2 * Math.PI);
                endabgabe.crc.fillStyle = "black";
                endabgabe.crc.fill(pupille);
                endabgabe.crc.stroke(pupille);
            }
        }
        kollision(fisch) {
            if (Math.sqrt(Math.pow(Math.abs(this.x - fisch.x), 2) + Math.pow(Math.abs(this.y - fisch.y), 2)) < 50 && fisch.groesse > 0) {
                if (this.groesse > fisch.groesse) {
                    this.groesse++;
                    endabgabe.punktezaehler += 5;
                    console.log(this.groesse);
                    return true;
                }
                else {
                    alert("Du bist gestorben!");
                    return false;
                }
            }
            else
                return false;
        }
        move() {
            this.x += this.dx;
            this.y += this.dy;
            if (this.x > endabgabe.canvas.width) {
                this.x = endabgabe.canvas.width;
            }
            else if (this.x < 0) {
                this.x = 0;
            }
            else if (this.y > endabgabe.canvas.height) {
                this.y = endabgabe.canvas.height;
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
    endabgabe.SpielerFisch = SpielerFisch;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=spielerfisch.js.map