var a12;
(function (a12) {
    class PinkerFisch {
        draw() {
            let fisch1 = new Path2D();
            fisch1.quadraticCurveTo(this.x + 70, this.y - 70, this.x + 30, this.y - 10);
            fisch1.lineTo(this.x + 150, this.y - 40);
            fisch1.quadraticCurveTo(this.x + 200, this.y + 70, this.x + 100, this.y + 20);
            fisch1.lineTo(this.x + 70, this.y - 70);
            fisch1.closePath();
            a12.crc.fillStyle = "#e6b3ff";
            a12.crc.fill(fisch1);
            a12.crc.strokeStyle = "#b30086";
            a12.crc.stroke(fisch1);
            let auge1 = new Path2D();
            auge1.arc(this.x + 140, this.y + 5, 5, 0, 2 * Math.PI);
            auge1.closePath();
            a12.crc.fillStyle = "white";
            a12.crc.fill(auge1);
            a12.crc.strokeStyle = "black";
            a12.crc.stroke(auge1);
            let iris1 = new Path2D();
            iris1.arc(this.x + 140, this.y + 5, 2, 0, 2 * Math.PI);
            iris1.closePath();
            a12.crc.fillStyle = "black";
            a12.crc.fill(iris1);
            a12.crc.stroke(iris1);
        }
        update() {
            this.move();
            this.draw();
        }
        move() {
            this.x += this.dx;
            if (this.x + 100 > a12.canvas.width + 80) {
                this.x = -50;
            }
        }
    }
    a12.PinkerFisch = PinkerFisch;
})(a12 || (a12 = {}));
//# sourceMappingURL=pinkerfisch.js.map