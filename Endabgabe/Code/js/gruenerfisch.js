var endabgabe;
(function (endabgabe) {
    class GruenerFisch {
        draw() {
            let fisch1 = new Path2D();
            fisch1.quadraticCurveTo(this.x + 70, this.y - 70, this.x + 30, this.y - 10);
            fisch1.lineTo(this.x + 150, this.y - 40);
            fisch1.quadraticCurveTo(this.x + 200, this.y + 70, this.x + 100, this.y + 20);
            fisch1.lineTo(this.x + 70, this.y - 70);
            fisch1.closePath();
            endabgabe.crc.fillStyle = "#2EFE9A";
            endabgabe.crc.fill(fisch1);
            endabgabe.crc.strokeStyle = "#b30086";
            endabgabe.crc.stroke(fisch1);
            let auge1 = new Path2D();
            auge1.arc(this.x + 140, this.y + 5, 5, 0, 2 * Math.PI);
            auge1.closePath();
            endabgabe.crc.fillStyle = "white";
            endabgabe.crc.fill(auge1);
            endabgabe.crc.strokeStyle = "black";
            endabgabe.crc.stroke(auge1);
            let iris1 = new Path2D();
            iris1.arc(this.x + 140, this.y + 5, 2, 0, 2 * Math.PI);
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
            if (this.x + 100 > endabgabe.canvas.width + 80) {
                this.x = -50;
            }
        }
    }
    endabgabe.GruenerFisch = GruenerFisch;
})(endabgabe || (endabgabe = {}));
//# sourceMappingURL=gruenerfisch.js.map